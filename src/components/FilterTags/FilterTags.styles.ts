import styled, { css } from 'styled-components'

export const Tags = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Tag = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    padding: 0 2px 0 ${theme.spacings.xxsmall};
    align-items: center;
    border-radius: ${theme.border.radius};
    white-space: nowrap;

    > span {
      line-height: ${theme.font.sizes.xxlarge};

      span {
        color: ${theme.colors.primary};
        font-weight: ${theme.font.bold};
      }
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
      transform: scale(0.75);
      fill: ${theme.colors.black};
    }
  `}
`
