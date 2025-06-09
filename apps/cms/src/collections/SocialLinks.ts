import type { CollectionConfig, CollectionSlug } from 'payload'; // Use type import

export const SocialLinks: CollectionConfig = {
  slug: 'social-links', // Or 'socialLinks'
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users', // Assuming your users collection slug is 'users'
      required: true,
    },
    {
      name: 'platform',
      type: 'select',
      options: [
        { label: 'Instagram', value: 'INSTAGRAM' },
        { label: 'TikTok', value: 'TIKTOK' },
        { label: 'YouTube', value: 'YOUTUBE' },
        { label: 'X', value: 'X' },
      ],
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      // Consider adding validation for URL format
    },
    // Payload automatically adds createdAt and updatedAt
  ],
  // Define access control and hooks as needed
};
