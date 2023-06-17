import styled, { css } from 'styled-components'
import * as BannerStyles from 'components/Banner/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-dots {
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};

      li {
        width: 0.9rem;
        height: 0.9rem;
        display: inline-flex;
        margin: 0 ${theme.spacings.xxsmall};

        button {
          border-radius: 100%;
          background-color: ${theme.colors.lightGray};
          font-size: 0;
          line-height: 0;
          width: 0.9rem;
          height: 0.9rem;
          transition: background-color ${theme.transition.fast};
        }

        &.slick-active button,
        button:hover {
          background-color: ${theme.colors.primary};
        }
      }
    }

    ${theme.media().greaterThan('large')`
        ${BannerStyles.Wrapper} {
            max-width: 104rem;
            margin: 0 auto;
        }

        .slick-dots {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            flex-direction: column;

            li {
                margin: ${theme.spacings.xxsmall} 0;
            }
        }
    `}
  `}
`
