import type { CollectionConfig, CollectionSlug } from 'payload'; // Use type import

export const Imports: CollectionConfig = {
  slug: 'imports',
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users', // Assuming your users collection slug is 'users'
      required: true,
    },
    {
      name: 'provider',
      type: 'select',
      options: [
        { label: 'MyAnimeList', value: 'MY_ANIME_LIST' },
        { label: 'Letterboxd', value: 'LETTERBOXD' },
      ],
      required: true,
    },
    {
      name: 'itemsCount',
      type: 'number',
      // required: true, // Might be set after parsing the file
    },
    {
      name: 'importStatus',
      type: 'select',
      options: [
        { label: 'Completed', value: 'COMPLETED' },
        { label: 'Failed', value: 'FAILED' },
        { label: 'Partial', value: 'PARTIAL' },
        { label: 'Not Started', value: 'NOT_STARTED' },
      ],
      required: true,
      defaultValue: 'NOT_STARTED',
    },
    {
      name: 'series',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'tmdbId',
          type: 'number',
          // nullable: true,
        },
        {
          name: 'startDate',
          type: 'date',
          // nullable: true,
        },
        {
          name: 'endDate',
          type: 'date',
          // nullable: true,
        },
        {
          name: 'userItemStatus',
          type: 'select',
          options: [
            { label: 'Watchlist', value: 'WATCHLIST' },
            { label: 'Watched', value: 'WATCHED' },
            { label: 'Watching', value: 'WATCHING' },
            { label: 'Dropped', value: 'DROPPED' },
          ],
          required: true,
        },
        {
          name: 'watchedEpisodes',
          type: 'number',
          // nullable: true,
        },
        {
          name: 'seriesEpisodes',
          type: 'number',
          // nullable: true,
        },
        {
          name: 'importStatus',
          type: 'select',
          options: [
            { label: 'Completed', value: 'COMPLETED' },
            { label: 'Failed', value: 'FAILED' },
            { label: 'Not Started', value: 'NOT_STARTED' },
          ],
          required: true,
          defaultValue: 'NOT_STARTED',
        },
      ],
    },
    {
      name: 'movies',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'tmdbId',
          type: 'number',
          // nullable: true,
        },
        {
          name: 'endDate',
          type: 'date',
          // nullable: true,
        },
        {
          name: 'userItemStatus',
          type: 'select',
          options: [
            { label: 'Watchlist', value: 'WATCHLIST' },
            { label: 'Watched', value: 'WATCHED' },
            { label: 'Watching', value: 'WATCHING' },
            { label: 'Dropped', value: 'DROPPED' },
          ],
          required: true,
        },
        {
          name: 'importStatus',
          type: 'select',
          options: [
            { label: 'Completed', value: 'COMPLETED' },
            { label: 'Failed', value: 'FAILED' },
            { label: 'Not Started', value: 'NOT_STARTED' },
          ],
          required: true,
          defaultValue: 'NOT_STARTED',
        },
      ],
    },
    // Payload automatically adds createdAt and updatedAt
  ],
  // Define access control and hooks as needed
};
