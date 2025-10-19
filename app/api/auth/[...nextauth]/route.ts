
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const authOptions  = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET_ID || "",
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  callbacks: {
  async jwt({ token, user }:{token:any , user: any}) {
    if (user && !token.id ) token.id = user.id;
    return token;
  },
  async session({ session, token }:{token:any , session: any}) {
    if (session.user) session.user.id = token.id ;
    return session;
  },
},
  secret: process.env.NEXTAUTH_SECRET,
};
//@ts-ignorec
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };
export default handler