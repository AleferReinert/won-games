export default [
  {
    title: 'Price',
    name: 'price',
    type: 'checkbox',
    fields: [
      {
        label: 'Under $50',
        id: 'under-50'
      },
      {
        label: 'Under $100',
        id: 'under-100'
      },
      {
        label: 'Under $150',
        id: 'under-150'
      },
      {
        label: 'Under $200',
        id: 'under-200'
      },
      {
        label: 'Free',
        id: 'free'
      },
      {
        label: 'Discounted',
        id: 'discounted'
      }
    ]
  },
  {
    title: 'Sort by',
    name: 'sort-by',
    type: 'radio',
    fields: [
      {
        label: 'High to low',
        id: 'high-to-low'
      },
      {
        label: 'Low to high',
        id: 'low-to-high'
      }
    ]
  },
  {
    title: 'Platform',
    name: 'platform',
    type: 'checkbox',
    fields: [
      {
        label: 'Windows',
        id: 'windows'
      },
      {
        label: 'Mac',
        id: 'mac'
      },
      {
        label: 'Linux',
        id: 'linux'
      }
    ]
  },
  {
    title: 'Category',
    name: 'category',
    type: 'checkbox',
    fields: [
      {
        label: 'Action',
        id: 'action'
      },
      {
        label: 'Adventure',
        id: 'adventure'
      },
      {
        label: 'FPS',
        id: 'fps'
      }
    ]
  }
]
