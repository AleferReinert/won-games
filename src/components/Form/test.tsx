import { renderWithTheme } from 'utils/tests/helpers'
import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render form styles', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          lorem ipsum dolor?<a href='#'>sit amet</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.4rem;
        color: #030517;
        text-align: center;
        margin-top: 1.6rem;
      }

      .c0 a {
        color: #3CD3C1;
        margin-left: 0.8rem;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
        border-bottom: 0.1rem solid #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 a:hover {
        color: #29b3a3;
        border-bottom-color: #29b3a3;
      }

      <body>
        <div>
          <div
            class=""
          >
            <div
              class="c0"
            >
              lorem ipsum dolor?
              <a
                href="#"
              >
                sit amet
              </a>
            </div>
          </div>
        </div>
      </body>
    `)
  })
})
