export default {
  name: 'sales',
  type: 'document',
	title: 'Sales',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
        name: 'image',
        type: 'image',
        title: 'Image',
    },
    {
        name: 'tag',
        type: 'string',
        title: 'Tag',
    }
  ]
}
