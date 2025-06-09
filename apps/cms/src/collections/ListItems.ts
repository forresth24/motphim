import type { CollectionConfig, CollectionSlug } from 'payload'

export const ListItems: CollectionConfig = {
  slug: 'list-items',
  fields: [
    {
      name: 'list',
      type: 'relationship',
      relationTo: 'lists' as CollectionSlug, // Cast the string to CollectionSlug
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
      name: 'position',
      type: 'number',
      // You might want to add a hook to automatically set the position
    },
    // Consider adding fields for title, posterPath, backdropPath,
    // or handle fetching them from a media collection
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
  ],
  // Define access control
  // access: {
  //   create: ({ req }) => req.user, // Only authenticated users can create
  //   read: ({ req, doc }) => {
  //     // Read access based on parent list visibility
  //   },
  //   update: ({ req, doc }) => {
  //      // Only list owner can update (check relationship to list)
  //   },
  //   delete: ({ req, doc }) => {
  //     // Only list owner can delete (check relationship to list)
  //   },
  // },
  // Define hooks
  // hooks: {
  //   beforeChange: [
  //     // Hook to set initial position
  //   ],
  //   afterChange: [
  //     // Hook to update parent list's items field
  //   ],
  //   afterDelete: [
  //     // Hook to update parent list's items field
  //   ],
  // },
};
