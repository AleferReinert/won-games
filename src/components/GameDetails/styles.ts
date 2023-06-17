import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.large};

    ${theme.media().greaterThan('small')`
        grid-template-columns: repeat(3, 1fr);
    `}

    ${theme.media().greaterThan('large')`
        grid-template-columns: repeat(4, 1fr);
    `}

    ${theme.media().greaterThan('huge')`
        grid-template-columns: repeat(6, 1fr);
    `}
  `}
`

export const Block = styled.div``

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
  `}
`

export const IconsWrapper = styled.span`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
    color: ${theme.colors.white};

    ${theme.media().greaterThan('small')`
        gap: ${theme.spacings.small};
    `}
  `}
`

export const Icon = styled.span`
  width: 2rem;
`
