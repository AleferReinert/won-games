import { FilterOptionsProps } from './Filter'

export const filterOptionsMock: FilterOptionsProps[] = [
  {
    title: 'Price',
    name: 'price',
    type: 'radio',
    fields: [
      {
        label: 'Under $50',
        id: 'under-50',
        value: '50'
      },
      {
        label: 'Under $100',
        id: 'under-100',
        value: '100'
      },
      {
        label: 'Under $150',
        id: 'under-150',
        value: '150'
      },
      {
        label: 'Under $200',
        id: 'under-200',
        value: '200'
      },
      {
        label: 'Free',
        id: 'free',
        value: '0'
      }
    ]
  },
  {
    title: 'Sort by',
    name: 'sort',
    type: 'radio',
    fields: [
      {
        label: 'Low to high',
        id: 'low-to-high',
        value: 'price:asc'
      },
      {
        label: 'High to low',
        id: 'high-to-low',
        value: 'price:desc'
      }
    ]
  },
  {
    title: 'Platforms',
    name: 'platforms',
    type: 'checkbox',
    fields: [
      {
        label: 'Linux',
        id: 'linux',
        value: 'linux'
      },
      {
        label: 'Mac',
        id: 'mac',
        value: 'mac'
      },
      {
        label: 'Nintendo Switch',
        id: 'nintendo-switch',
        value: 'nintendo-switch'
      },
      {
        label: 'Nintendo Wii',
        id: 'nintendo-wii',
        value: 'nintendo-wii'
      },
      {
        label: 'PlayStation 2',
        id: 'playstation-2',
        value: 'playstation-2'
      },
      {
        label: 'PlayStation 3',
        id: 'playstation-3',
        value: 'playstation-3'
      },
      {
        label: 'PlayStation 4',
        id: 'playstation-4',
        value: 'playstation-4'
      },
      {
        label: 'PlayStation 5',
        id: 'playstation-5',
        value: 'playstation-5'
      },
      {
        label: 'Windows 10',
        id: 'windows-10',
        value: 'windows-10'
      },
      {
        label: 'Windows 11',
        id: 'windows-11',
        value: 'windows-11'
      },
      {
        label: 'Windows 7',
        id: 'windows-7',
        value: 'windows-7'
      },
      {
        label: 'Windows 8',
        id: 'windows-8',
        value: 'windows-8'
      },
      {
        label: 'Windows Vista',
        id: 'windows-vista',
        value: 'windows-vista'
      },
      {
        label: 'Windows XP',
        id: 'windows-xp',
        value: 'windows-xp'
      },
      {
        label: 'Xbox One',
        id: 'xbox-one',
        value: 'xbox-one'
      },
      {
        label: 'Xbox Series X|S',
        id: 'xbox-series-x-s',
        value: 'xbox-series-x-s'
      }
    ]
  },
  {
    title: 'Categories',
    name: 'categories',
    type: 'checkbox',
    fields: [
      {
        label: 'Action',
        id: 'action',
        value: 'action'
      },
      {
        label: 'Adventure',
        id: 'adventure',
        value: 'adventure'
      },
      {
        label: 'Arcade',
        id: 'arcade',
        value: 'arcade'
      },
      {
        label: 'Building',
        id: 'building',
        value: 'building'
      },
      {
        label: 'Comedy',
        id: 'comedy',
        value: 'comedy'
      },
      {
        label: 'Fantasy',
        id: 'fantasy',
        value: 'fantasy'
      },
      {
        label: 'Fighting',
        id: 'fighting',
        value: 'fighting'
      },
      {
        label: 'FPP',
        id: 'fpp',
        value: 'fpp'
      },
      {
        label: 'FPS',
        id: 'fps',
        value: 'fps'
      },
      {
        label: 'Historical',
        id: 'historical',
        value: 'historical'
      },
      {
        label: 'Horror',
        id: 'horror',
        value: 'horror'
      },
      {
        label: 'Mystery',
        id: 'mystery',
        value: 'mystery'
      },
      {
        label: 'Naval',
        id: 'naval',
        value: 'naval'
      },
      {
        label: 'Open World',
        id: 'open-world',
        value: 'open-world'
      },
      {
        label: 'Point-and-click',
        id: 'point-and-click',
        value: 'point-and-click'
      },
      {
        label: 'Puzzle',
        id: 'puzzle',
        value: 'puzzle'
      },
      {
        label: 'Real-time',
        id: 'real-time',
        value: 'real-time'
      },
      {
        label: 'Role-playing',
        id: 'role-playing',
        value: 'role-playing'
      },
      {
        label: 'Sandbox',
        id: 'sandbox',
        value: 'sandbox'
      },
      {
        label: 'Sci-fi',
        id: 'sci-fi',
        value: 'sci-fi'
      },
      {
        label: 'Shooter',
        id: 'shooter',
        value: 'shooter'
      },
      {
        label: 'Simulation',
        id: 'simulation',
        value: 'simulation'
      },
      {
        label: 'Stealth',
        id: 'stealth',
        value: 'stealth'
      },
      {
        label: 'Strategy',
        id: 'strategy',
        value: 'strategy'
      },
      {
        label: 'Survival',
        id: 'survival',
        value: 'survival'
      },
      {
        label: 'Tactical',
        id: 'tactical',
        value: 'tactical'
      },
      {
        label: 'Turn-based',
        id: 'turn-based',
        value: 'turn-based'
      }
    ]
  }
]
