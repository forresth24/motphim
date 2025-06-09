import type { CollectionConfig, CollectionSlug } from 'payload'; // Use type import

export const UserEpisodes: CollectionConfig = {
  slug: 'user-episodes', // Or 'userEpisodes'
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
      label: 'TMDB Show ID', // Add a descriptive label
    },
    {
      name: 'seasonNumber',
      type: 'number',
      required: true,
    },
    {
      name: 'episodeNumber',
      type: 'number',
      required: true,
    },
    {
      name: 'runtime',
      type: 'number',
      // nullable: true, // Based on schema, but consider making it required if you have the data
    },
    {
      name: 'watchedAt',
      type: 'date', // Or 'dateTime'
      required: true,
      // Add a hook to set this automatically on creation if needed
    },
  ],
  // Define access control and hooks as needed
};
