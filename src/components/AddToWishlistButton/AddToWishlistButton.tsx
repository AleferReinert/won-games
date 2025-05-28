'use client'
import { Button, ButtonProps } from 'components/Button/Button'
import { Loading } from 'components/Loading/Loading'
import { useWishlist } from 'hooks/useWishlist'
import { useSession } from 'next-auth/react'
import { ComponentProps, useState } from 'react'
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'

interface AddToWishlistButtonProps extends Omit<ButtonProps, 'children'>, ComponentProps<'button'> {
  id: string
  showLabel?: boolean
  loadingClass?: string
}

export const AddToWishlistButton = ({
  id,
  showLabel = false,
  loadingClass = '',
  ...rest
}: AddToWishlistButtonProps) => {
  const [loading, setLoading] = useState(false)
  const { status } = useSession()
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  return (
    status === 'authenticated' && (
      <div data-testid='AddToWishlistButtonComponent' className='leading-0'>
        {isInWishlist(id) ? (
          <Button
            variant='link'
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
              <Loading animation='spinner' className={`${loadingClass} size-6!`} inline />
            ) : (
              <MdOutlineFavorite role='img' aria-hidden className='fill-theme-primary size-6!' />
            )}
            {showLabel && (loading ? 'Removing from wishlist' : 'Remove from wishlist')}
          </Button>
        ) : (
          <Button
            variant='link'
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
              <Loading animation='spinner' className={`${loadingClass} size-6!`} inline />
            ) : (
              <MdOutlineFavoriteBorder role='img' aria-hidden className='fill-theme-primary size-6!' />
            )}
            {showLabel && (loading ? 'Adding to wishlist' : 'Add to wishlist')}
          </Button>
        )}
      </div>
    )
  )
}
