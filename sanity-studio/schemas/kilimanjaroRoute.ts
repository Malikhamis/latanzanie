export default {
  name: 'kilimanjaroRoute',
  title: 'Kilimanjaro Route',
  type: 'document',
  fields: [
    {
      name: 'routeId',
      title: 'Route ID',
      type: 'string',
      description: 'Unique identifier for the route (e.g., lemosho-8)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Route Name',
      type: 'string',
      description: 'Display name for the route (e.g., Lemosho Route - 8 Days)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'baseSuccessRate',
      title: 'Base Success Rate',
      type: 'number',
      description: 'Base success rate percentage for this route',
      validation: (Rule: any) => Rule.required().min(0).max(100),
    },
    {
      name: 'difficulty',
      title: 'Difficulty Level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
          { title: 'Expert', value: 'expert' },
        ],
      },
    },
    {
      name: 'duration',
      title: 'Duration (Days)',
      type: 'number',
      description: 'Number of days for this route',
      validation: (Rule: any) => Rule.required().min(1).max(20),
    },
    {
      name: 'description',
      title: 'Route Description',
      type: 'text',
      description: 'Detailed description of the route',
    },
    {
      name: 'bestTimeToClimb',
      title: 'Best Time to Climb',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'January', value: 'january' },
          { title: 'February', value: 'february' },
          { title: 'March', value: 'march' },
          { title: 'April', value: 'april' },
          { title: 'May', value: 'may' },
          { title: 'June', value: 'june' },
          { title: 'July', value: 'july' },
          { title: 'August', value: 'august' },
          { title: 'September', value: 'september' },
          { title: 'October', value: 'october' },
          { title: 'November', value: 'november' },
          { title: 'December', value: 'december' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'routeId',
    },
  },
}