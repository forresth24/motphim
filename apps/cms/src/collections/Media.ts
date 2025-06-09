import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: true,
  fields: [
    {
      name: 'alt', // Alternative text for accessibility
      type: 'text',
      required: true,
    },
    // Add other custom fields if needed, e.g., tmdbId
    // {
    //   name: 'tmdbId',
    //   type: 'number',
    //   // nullable: true,
    // },
  ],
  // Define access control
  // access: {
  //   read: () => true, // Public read access
  //   create: ({ req }) => req.user, // Authenticated users can upload
  //   update: ({ req }) => req.user, // Authenticated users can update
  //   delete: ({ req }) => req.user, // Authenticated users can delete
  // },
};
