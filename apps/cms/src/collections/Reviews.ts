import type { CollectionConfig, CollectionSlug } from 'payload'; // Use type import

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users', // Assuming your users collection slug is 'users'
      required: true,
    },
    {
      name: 'tmdbId',
      type: 'number',
      required: true,
    },
    {
      name: 'mediaType',
      type: 'select',
      options: [
        { label: 'TV Show', value: 'TV_SHOW' },
        { label: 'Movie', value: 'MOVIE' },
      ],
      required: true,
    },
    {
      name: 'review',
      type: 'textarea', // Or 'richText' if you need rich text editing
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      // Add validation for rating range if needed
    },
    {
      name: 'hasSpoilers',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'language',
      type: 'select',
      options: [
        { label: 'English', value: 'en-US' },
        { label: 'Spanish', value: 'es-ES' },
        // Add other language options
      ],
      // nullable: true, // If language is optional
    },
    {
      name: 'seasonNumber',
      type: 'number',
      // nullable: true, // If season number is optional
    },
    {
      name: 'episodeNumber',
      type: 'number',
      // nullable: true, // If episode number is optional
    },
    {
      name: 'likeCount',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'replyCount',
      type: 'number',
      defaultValue: 0,
    },
    // You might need a relationship to Review Replies if you create that collection
    // {
    //   name: 'replies',
    //   type: 'array', // Or 'relationship'
    //   fields: [
    //     // Fields for replies
    //   ],
    // },
  ],
  // Define access control and hooks as needed
};
