import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import { connectToDatabase } from '../../../lib/mongodb'


export default async function auth(req, res) {
  let { client } = await connectToDatabase()
  return await NextAuth(req, res, {
    adapter: MongoDBAdapter({
      db: client.db(process.env.DB_NAME)
    }),
    session: {
      jwt: true
    },
    providers: [
      // OAuth authentication providers
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      })
    ],
    pages: {
      signIn: '/login'
    },
    secret: process.env.SECRET,
    callbacks: {
      session: async (token) =>{
        console.log(`---token---`, token)
        let session = token.session
        session.userId = token.user.id
        return session
      }
    }
    //debug: true,
    //...
  })
}