import styled, { css } from 'styled-components'

export const WrapperWishlistGames = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};
    border-bottom: 1px solid ${theme.colors.gray};
    margin-bottom: ${theme.spacings.xxlarge};
    display: grid;
    gap: ${theme.spacings.small};

    ${theme.media().greaterThan('small')`
        margin-top: ${theme.spacings.medium};
        padding-bottom: calc(${theme.spacings.large} * 2);
        margin-bottom: calc(${theme.spacings.large} * 2);
        grid-template-columns: repeat(2, 1fr);
    `}

    ${theme.media().greaterThan('medium')`
        grid-template-columns: repeat(3, 1fr);
    `}

    ${theme.media().greaterThan('large')`
        grid-template-columns: repeat(4, 1fr);
    `}
  `}
`
