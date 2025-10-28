import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

const prismaAdapter = PrismaAdapter(prisma);

export const authOptions: any = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET_ID || "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" as const },
  callbacks: {
    async jwt({ token, user, account }: { token: any; user: any; account: any }) {
      // On sign in, add user data to token
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.verified = user.verified || false;
        token.role = user.role || "user";
      }
      return token;
    },
    
    async session({ session, token }: { token: any; session: any }) {
      // Pass token data to session
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.verified = token.verified as boolean;
        session.user.role = token.role as string;
      }
      return session;
    },
    
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      return '/';
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };