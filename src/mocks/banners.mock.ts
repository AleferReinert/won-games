import { BannerProps } from 'components/Banner/Banner'

export const bannersMock: BannerProps[] = [
  {
    img: '/img/background-test.png',
    title: 'Defy death',
    description: 'Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/products/defy-death'
  },
  {
    img: '/img/background-test.png',
    title: 'God of War',
    description: 'Same background to test',
    buttonLabel: 'Buy now',
    buttonLink: '/products/god-of-war',
    ribbon: {
      text: 'new'
    }
  }
]
