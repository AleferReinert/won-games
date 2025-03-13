import { BannerProps } from 'components/Banner/Banner'

export default [
  {
    img: '/img/background-test.png',
    title: 'Defy death 1',
    description: 'Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: {
      text: 'Bestselling'
    }
  },
  {
    img: '/img/background-test.png',
    title: 'Defy death 2',
    description: 'Same background to test',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
] satisfies BannerProps[]
