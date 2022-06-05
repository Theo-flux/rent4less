export default {
  name: 'about',
  type: 'document',
	title: 'About',
  fields: [
    {
      name: 'tag',
      type: 'string',
      title: 'Tag'
    },
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
      name: 'description',
      type: 'string',
      title: 'Description'
    }
  ]
}