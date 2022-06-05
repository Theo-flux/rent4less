export default {
  name: 'stats',
  type: 'document',
	title: 'Stats',
  fields: [
    {
      name: 'tag',
      type: 'string',
      title: 'Tag'
    },
    {
      name: 'figure',
      type: 'number',
      title: 'Figure'
    },
    {
        name: 'image',
        type: 'image',
        title: 'Image',
    }
  ]
}