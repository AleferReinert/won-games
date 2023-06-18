import Divider from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Divider />', () => {
  it('should render divider', () => {
    const { container } = renderWithTheme(<Divider />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin: 5.6rem 0;
        border: 0;
        height: 1px;
        background-color: #2E2F42;
      }

      @media (min-width:960px) {
        .c0 {
          margin: calc(4.0rem * 2) 0;
        }
      }

      @media (min-width:1440px) {
        .c0 {
          margin: calc(4.8rem * 2) 0;
        }
      }

      <hr
        class="c0"
      />
    `)
  })
})
