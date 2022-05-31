export default {
  name: 'posts',
  type: 'document',
	title: 'Posts',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
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
    },
    {
        name: 'author',
        type: 'string',
        title: 'Author',
    },
    {
        name: 'timePosted',
        type: 'datetime',
        title: 'TimePosted',
    },
    {
        name: 'slug',
        type: 'string',
        title: 'Slug'
    }
  ]
}
