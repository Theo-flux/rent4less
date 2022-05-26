export default {
  name: 'jumbotron',
  type: 'document',
	title: 'Jumbotron',
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
    },
  ]
}