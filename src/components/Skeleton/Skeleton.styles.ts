import styled, { css, keyframes } from 'styled-components'
import { SkeletonProps } from './Skeleton'

const pulse = keyframes`
  50% {
    opacity: 0.5;
  }
`

export const Wrapper = styled.div<SkeletonProps>`
  ${({ theme, width, height }) => css`
    width: ${typeof width === 'number' ? `${width}px` : width};
    height: ${typeof height === 'number' ? `${height}px` : height};
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    animation: ${pulse} 2s ease-in-out infinite;
  `}
`
