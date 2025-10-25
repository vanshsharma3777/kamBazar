

import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { redirects } from "@/next.config";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
const prismaAdapter = PrismaAdapter(prisma);

export const authOptions: any = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET_ID || "",
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" as const },
  callbacks: {

    async jwt({ token, user, account }: { token: any; user: any; account: any }, req: Request) {

      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.verified = user.verified;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { token: any; session: any }) {

      if (session.user) {
        session.user.id = token.id  as string;
        session.user.email = token.email as string;
        session.user.verified = token.verified as string;
        session.user.role = token.role as string;
      }
      console.log("session : ", session)
      return session;
    },
    
    async redirect({ url, baseurl }: { url: string, baseurl: string }) {
      return '/'
    }

  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };