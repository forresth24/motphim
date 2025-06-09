import type { CollectionConfig } from 'payload'

export const Lists: CollectionConfig = {
  slug: 'lists',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'visibility',
      type: 'select',
      options: [
        { label: 'Public', value: 'PUBLIC' },
        { label: 'Network', value: 'NETWORK' },
        { label: 'Private', value: 'PRIVATE' },
      ],
      defaultValue: 'PRIVATE',
      required: true,
    },
    {
      name: 'bannerUrl',
      type: 'upload', // Assuming you'll use Payload's upload functionality for banners
      relationTo: 'media', // Or whatever your media collection is named
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    // Add a field for list items (e.g., an array of relationships to a ListItems collection)
    // {
    //   name: 'items',
    //   type: 'array', // Or 'relationship' if ListItems is a separate collection
    //   fields: [
    //     // Fields for list items (e.g., tmdbId, mediaType)
    //   ],
    // },
    // Add a field for like count
    // {
    //   name: 'likeCount',
    //   type: 'number',
    //   defaultValue: 0,
    // },
  ],
  // Define access control
  access: {
    create: ({ req: { user }, data }) => {
      return Boolean(user)
    },
    read: ({ req: { user } }) => true, // Public read access (adjust based on visibility)
    // update: ({ req: { user }, id }) => {
    //   if (!Boolean(user)) {
    //     return false;
    //   }
    //   // Allow users with a role of 'admin'
    //   if (user.roles && user.roles.some((role) => role === 'admin')) {
    //     return true
    //   }
    
    //   // allow any other users to update only oneself
    //   return user.id === id
    // }
    // delete: ({ req }) => req.user.id === req.data.user, // Only list owner can delete
  },
  // Define hooks
  // hooks: {
  //   // beforeChange, afterChange, etc.
  // },
};
