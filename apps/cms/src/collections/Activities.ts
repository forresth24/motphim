import type { CollectionConfig, CollectionSlug } from 'payload'; // Use type import

export const Activities: CollectionConfig = {
  slug: 'activities',
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users', // Assuming your users collection slug is 'users'
      required: true,
    },
    {
      name: 'activityType',
      type: 'select',
      options: [
        { label: 'Add Item', value: 'ADD_ITEM' },
        { label: 'Delete Item', value: 'DELETE_ITEM' },
        { label: 'Follow User', value: 'FOLLOW_USER' },
        { label: 'Unfollow User', value: 'UNFOLLOW_USER' },
        { label: 'Create List', value: 'CREATE_LIST' },
        { label: 'Like List', value: 'LIKE_LIST' },
        { label: 'Like Review', value: 'LIKE_REVIEW' },
        { label: 'Create Review', value: 'CREATE_REVIEW' },
        { label: 'Like Reply', value: 'LIKE_REPLY' },
        { label: 'Create Reply', value: 'CREATE_REPLY' },
        { label: 'Watch Episode', value: 'WATCH_EPISODE' },
        { label: 'Change Status', value: 'CHANGE_STATUS' },
        { label: 'Create Account', value: 'CREATE_ACCOUNT' },
      ],
      required: true,
    },
    {
      name: 'entityType',
      type: 'select',
      options: [
        { label: 'List', value: 'LIST' },
        { label: 'Review', value: 'REVIEW' },
        { label: 'Reply', value: 'REPLY' },
      ],
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
    },
    {
      name: 'entityId',
      type: 'text', // Store the ID of the related entity as a string
      required: true,
    },
    {
      name: 'metadata',
      type: 'json', // Or 'object'
    },
    {
      name: 'additionalInfo',
      type: 'json', // Or 'object' - structure varies by activity type
      required: true,
    },
    // Payload automatically adds createdAt and updatedAt
  ],
  // Define access control and hooks as needed
};
