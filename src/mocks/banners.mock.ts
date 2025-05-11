import { BannerProps } from 'components/Banner/Banner'

export const bannersMock: BannerProps[] = [
  {
    id: '2',
    img: {
      url: '/img/test/banner.png',
      alternativeText: ''
    },
    title: 'Defy death',
    description: 'Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonUrl: '/products/defy-death'
  },
  {
    id: '1',
    img: {
      url: '/img/test/banner.png',
      alternativeText: ''
    },
    title: 'God of War',
    description: 'Same background to test',
    buttonLabel: 'Buy now',
    buttonUrl: '/products/god-of-war',
    ribbon: {
      label: 'new'
    }
  }
]
