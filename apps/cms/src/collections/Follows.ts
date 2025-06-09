import type { CollectionConfig, CollectionSlug } from 'payload'; // Use type import

export const Follows: CollectionConfig = {
  slug: 'follows',
  fields: [
    {
      name: 'follower',
      type: 'relationship',
      relationTo: 'users', // Assuming your users collection slug is 'users'
      required: true,
    },
    {
      name: 'followed',
      type: 'relationship',
      relationTo: 'users', // Assuming your users collection slug is 'users'
      required: true,
    },
    // Payload automatically adds createdAt and updatedAt
  ],
  // Define access control
  // access: {
  //   create: ({ req }) => req.user, // Only authenticated users can create
  //   read: ({ req, doc }) => true, // Adjust based on your privacy settings
  //   delete: ({ req, doc }) => req.user.id === doc.follower.id, // Only the follower can delete
  // },
  // Define hooks
  // hooks: {
  //   afterChange: [
  //     // Hook to update follower/following counts on users
  //   ],
  //   afterDelete: [
  //     // Hook to decrement follower/following counts on users
  //   ],
  // },
};
