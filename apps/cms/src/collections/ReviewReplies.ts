import type { CollectionConfig, CollectionSlug } from 'payload'; // Use type import

export const ReviewReplies: CollectionConfig = {
  slug: 'review-replies', // Or 'reviewReplies'
  fields: [
    {
      name: 'review',
      type: 'relationship',
      relationTo: 'reviews', // Assuming your reviews collection slug is 'reviews'
      required: true,
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users', // Assuming your users collection slug is 'users'
      required: true,
    },
    {
      name: 'reply',
      type: 'textarea', // Or 'richText'
      required: true,
    },
    {
      name: 'likeCount',
      type: 'number',
      defaultValue: 0,
    },
  ],
  // Define access control and hooks as needed
};
