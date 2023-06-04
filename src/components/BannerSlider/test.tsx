import 'match-media-mock'
import { screen } from '@testing-library/react'
import BannerSlider from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlider />', () => {
  it('Slider vertical', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)
    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('Apenas um item ativo', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    // Se tem dois items
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)

    // Se tem apenas uma classe active
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /defy death 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /defy death 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('Bolinhas', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
