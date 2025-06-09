import type { CollectionConfig, CollectionSlug } from 'payload'; // Use type import

export const UserItems: CollectionConfig = {
  slug: 'user-items', // Or 'userItems'
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
      name: 'status',
      type: 'select',
      options: [
        { label: 'Watchlist', value: 'WATCHLIST' },
        { label: 'Watched', value: 'WATCHED' },
        { label: 'Watching', value: 'WATCHING' },
        { label: 'Dropped', value: 'DROPPED' },
      ],
      required: true,
      defaultValue: 'WATCHLIST', // Or a suitable default status
    },
    // Payload automatically adds createdAt and updatedAt, which might correspond to addedAt and updatedAt
    // If not, you might need custom date/time fields
    // {
    //   name: 'addedAt',
    //   type: 'date',
    //   required: true,
    // },
    // {
    //   name: 'updatedAt',
    //   type: 'date',
    //   required: true,
    // },
    // Consider adding fields for title, posterPath, backdropPath, or a relationship to a media collection
    // {
    //   name: 'title',
    //   type: 'text',
    // },
    // {
    //   name: 'posterPath',
    //   type: 'text',
    // },
    // {
    //   name: 'backdropPath',
    //   type: 'text',
    // },
    // Consider adding a relationship to the Reviews collection
    // {
    //   name: 'review',
    //   type: 'relationship',
    //   relationTo: 'reviews', // Assuming your reviews collection slug is 'reviews'
    //   // nullable: true, // If an item might not have a review
    // },
  ],
  // Define access control and hooks as needed
};
