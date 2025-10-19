import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

const prismaAdapter = PrismaAdapter(prisma);

export const authOptions  = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET_ID || "",
      allowDangerousEmailAccountLinking: false,
    }),
  ],
  adapter: {
    ...prismaAdapter,
    // Override createUser to ensure new users are created for different emails
    createUser: async (user:any) => {
      console.log("Creating new user with email:", user.email);
      try {
        const newUser = await prisma.user.create({
          data: {
            name: user.name,
            email: user.email,
            image: user.image,
            emailVerified: user.emailVerified,
          },
        });
        console.log("User created successfully:", newUser.id);
        return newUser;
      } catch (error: any) {
        console.error("Error creating user:", error.message);
        throw error;
      }
    },
    // Override getUserByEmail - THIS IS KEY
    getUserByEmail: async (email:any) => {
      console.log("Getting user by email:", email);
      const user = await prisma.user.findUnique({
        where: { email },
      });
      console.log("Found user by email:", user?.id, user?.email);
      return user;
    },
    // Override getUserByAccount to handle multi-account properly
    getUserByAccount: async (account:any) => {
      console.log("Getting user by account:", account.provider, account.providerAccountId);
      const dbAccount = await prisma.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider: account.provider,
            providerAccountId: account.providerAccountId,
          },
        },
        include: { user: true },
      });
      console.log("Found user via account:", dbAccount?.user?.id);
      return dbAccount?.user || null;
    },
  },
  session: { strategy: "jwt" as const },
  callbacks: {
    async jwt({ token, user, account }: { token: any; user: any; account: any }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: { token: any; session: any }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };