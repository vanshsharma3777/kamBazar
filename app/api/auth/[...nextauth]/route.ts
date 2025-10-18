// app/api/auth/[type]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_SECRET_ID || ''
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email }) {
            console.log(user)
            return true
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name
            }
            return token;
        },
        async session({ token, session }) {

            if (session.user) {
                session.user.id = token.id as string
                session.user.name = token.name as string
                session.user.email = token.email as string
                session.user.image = token.image as string
            }
            return session
        }
    },
    session: { strategy: 'jwt' },
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
