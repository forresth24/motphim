import type { CollectionConfig, CollectionSlug } from 'payload'; // Use type import

export const Videos: CollectionConfig = {
  slug: 'videos',
  fields: [
    {
      name: 'url',
      type: 'text',
      required: true,
      // Add validation for URL format and platform if needed
    },
    {
      name: 'platform',
      type: 'select',
      options: [
        { label: 'YouTube', value: 'YouTube' },
        { label: 'Vimeo', value: 'Vimeo' },
        { label: 'Facebook', value: 'Facebook' },
        // Add other platforms as needed
      ],
    },
    {
      name: 'language',
      type: 'text', // Or a select field with language options
      // nullable: true,
      defaultValue: 'vi'
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Recap', value: 'recap' },
        { label: 'Review', value: 'review' },
        { label: 'Trailer', value: 'trailer' },
      ],
    },
    {
      name: 'tmdbId',
      type: 'number',
      required: true,
      label: 'TMDB ID (Movie or Show)',
    },
    {
      name: 'mediaType',
      type: 'select',
      options: [
        { label: 'Movie', value: 'MOVIE' },
        { label: 'TV Show', value: 'TV_SHOW' },
      ],
      required: true,
    },
    {
      name: 'seasonNumber',
      type: 'number',
      admin: {
        condition: (_, data) => data?.mediaType === 'TV_SHOW', // Show this field only for TV Shows
      },
    },
    {
      name: 'episodeNumber',
      type: 'number',
      admin: {
        condition: (_, data) => data?.mediaType === 'TV_SHOW', // Show this field only for TV Shows
      },
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'thumbnailUrl',
      type: 'text',
    },
    // Payload automatically adds createdAt and updatedAt
  ],
  // Define access control and hooks as needed
};
