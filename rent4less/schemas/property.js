export default {
  name: 'property',
  type: 'document',
	title: 'Property',
  fields: [
    {
      name: 'availability',
      type: 'string',
      title: 'Availability'
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
      name: 'location',
      type: 'string',
      title: 'Location'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
    }
  ]
}