import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import Button, { ButtonProps } from 'components/Button/Button'
import { Loading } from 'components/Loading/Loading'
import { useWishlist } from 'hooks/useWishlist'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import theme from 'styles/theme'

interface AddToWishlistButtonProps extends ButtonProps {
  id: string
  showLabel?: boolean
  loadingColor?: string
}

const AddToWishlistButton = ({ id, showLabel = false, loadingColor, ...rest }: AddToWishlistButtonProps) => {
  const [loading, setLoading] = useState(false)
  const { status } = useSession()
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  return (
    status === 'authenticated' && (
      <div data-testid='AddToWishlistButtonComponent'>
        {isInWishlist(id) ? (
          <Button
            $variant='link'
            onClick={() => {
              setLoading(true)
              removeFromWishlist(id).finally(() => setLoading(false))
            }}
            title='Remove from wishlist'
            aria-label='Remove from wishlist'
            disabled={loading}
            {...rest}
          >
            {loading ? (
              <Loading animation='spinner' size={24} color={loadingColor} />
            ) : (
              <Favorite role='img' aria-hidden fill={theme.colors.primary} />
            )}
            {showLabel && 'Remove from wishlist'}
          </Button>
        ) : (
          <Button
            $variant='link'
            onClick={() => {
              setLoading(true)
              addToWishlist(id).finally(() => setLoading(false))
            }}
            title='Add to wishlist'
            aria-label='Add to wishlist'
            disabled={loading}
            {...rest}
          >
            {loading ? (
              <Loading animation='spinner' size={24} color={loadingColor} />
            ) : (
              <FavoriteBorder role='img' aria-hidden fill={theme.colors.primary} />
            )}
            {showLabel && 'Add to wishlist'}
          </Button>
        )}
      </div>
    )
  )
}

export default AddToWishlistButton
