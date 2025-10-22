

import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { redirects } from "@/next.config";

const prismaAdapter = PrismaAdapter(prisma);

export const authOptions: any = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET_ID || "",
      allowDangerousEmailAccountLinking: false,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" as const },
  callbacks: {
    async jwt({ token, user, account }: { token: any; user: any; account: any }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.verified = user.verified;
      }
      return token;
    },
    async session({ session, token }: { token: any; session: any }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.verified = token.verified;
      }
      return session;
    },
    async redirect({url , baseurl}:{url:string , baseurl:string}){
      return '/'
    }
    
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };