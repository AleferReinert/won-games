import 'match-media-mock'
import { render, screen } from '@testing-library/react'
import Slider from '.'

describe('<Slider />', () => {
  it('Renderizar items', () => {
    const { container } = render(
      <Slider settings={{ slidesToScroll: 1, infinite: false }}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>
    )

    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')
    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(container.firstChild).toMatchSnapshot()
  })
})
