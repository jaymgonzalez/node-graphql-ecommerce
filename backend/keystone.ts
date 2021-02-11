import 'dotenv/config'
import {config , createSchema} from '@keystone-next/keystone/schema'

const dataBaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/keystone-sickfits'

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 365,
  secret: process.env.COOKIE_SECRET,
}

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    }
  },
  db: {
    adapter: 'mongoose',
    url: dataBaseUrl,
  },
  lists: createSchema({
    //schema goes in here
  }),
  ui: {
    isAccessAllowed: () => true,
  },
})