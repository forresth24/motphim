// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Lists } from './collections/Lists' // Import the Lists collection
import { ListItems } from './collections/ListItems' // Import the ListItems collection
import { Reviews } from './collections/Reviews' // Import Reviews
import { ReviewReplies } from './collections/ReviewReplies' // Import ReviewReplies
import { Likes } from './collections/Likes' // Import Likes
import { UserItems } from './collections/UserItems' // Import UserItems
import { UserEpisodes } from './collections/UserEpisodes' // Import UserEpisodes
import { SocialLinks } from './collections/SocialLinks' // Import SocialLinks
import { Imports } from './collections/Imports' // Import Imports
import { Activities } from './collections/Activities'
import { Videos } from './collections/Videos'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.SERVER_URL, 
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Lists,
    ListItems,
    Reviews,
    ReviewReplies,
    Likes,
    UserItems,
    UserEpisodes,
    SocialLinks,
    Imports,
    Activities,
    Videos,
  ], // Add all collections to the array
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  cors: [process.env.NEXT_PUBLIC_SERVER_URL || ''].filter(Boolean),
  csrf: [process.env.NEXT_PUBLIC_SERVER_URL || ''].filter(Boolean),
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
