import type { CollectionConfig, CollectionSlug } from 'payload'; // Use type import

export const Likes: CollectionConfig = {
  slug: 'likes',
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users', // Assuming your users collection slug is 'users'
      required: true,
    },
    {
      name: 'entityId',
      type: 'text', // Store the ID of the liked entity as a string
      required: true,
    },
    {
      name: 'entityType',
      type: 'select',
      options: [
        { label: 'Review', value: 'REVIEW' },
        { label: 'Reply', value: 'REPLY' },
        { label: 'List', value: 'LIST' },
      ],
      required: true,
    },
    // Payload automatically adds createdAt and updatedAt
  ],
  // Define access control
  // access: {
  //   create: ({ req }) => req.user, // Only authenticated users can create
  //   read: ({ req, doc }) => true, // Adjust based on entity visibility
  //   delete: ({ req, doc }) => req.user.id === doc.user, // Only the user who liked can delete
  // },
  // Define hooks
  // hooks: {
  //   afterChange: [
  //     // Hook to update likeCount on the related entity (Review, Reply, or List)
  //   ],
  //   afterDelete: [
  //     // Hook to decrement likeCount on the related entity
  //   ],
  // },
};
