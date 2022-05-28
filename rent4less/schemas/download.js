export default {
  name: 'download',
  type: 'document',
	title: 'Download',
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
  ]
}