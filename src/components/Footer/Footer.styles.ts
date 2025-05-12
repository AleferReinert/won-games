import * as HeadingStyles from 'components/Heading/Heading.styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`
export const Logo = styled.div`
  position: relative;
  object-fit: contain;

  img {
    height: 3.3rem;
    width: fit-content;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    @media (min-width: ${theme.breakpoint.xsmall}) {
      grid-template-columns: repeat(2, 1fr);
      overflow-wrap: anywhere;
    }

    @media (min-width: ${theme.breakpoint.small}) {
      grid-template-columns: repeat(4, 1fr);
      overflow-wrap: normal;
    }
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.darkGray};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }

    a:hover {
      text-decoration: underline;
    }

    ul {
      list-style: none;
    }
  `}
`

export const Address = styled.address`
  font-style: normal;
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`
