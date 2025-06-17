'use client'
import { Button } from 'components/Button/Button'
import { Empty } from 'components/Empty/Empty'
import { Product, ProductSkeleton } from 'components/Product/Product'
import { useWishlist } from 'hooks/useWishlist'
import { productMapper } from 'utils/mappers'

export default function WishlistPage() {
  const { products, loading, clearWishlist } = useWishlist()
  const wishlistProducts = productMapper(products)

  return (
    <>
      <div data-testid='WishlistPage'>
        <div
          aria-label='wishlist products'
          className='mt-6 grid gap-6 sm:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)] xl:grid-cols-[repeat(4,_1fr)]'
        >
          {loading ? (
            <>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton className='hidden lg:block' />
              <ProductSkeleton className='hidden xl:block' />
            </>
          ) : (
            wishlistProducts.map((product) => {
              return (
                <Product
                  key={'wishlist-' + product.id}
                  id={product.id}
                  title={product.title}
                  developer={product.developer}
                  cover={product.cover}
                  price={product.price}
                  slug={product.slug}
                  imgSizes='(max-width: 320px) 288px, (max-width: 640px) 292px, (max-width: 768px) 356px, (max-width: 1024px) 315px, (max-width: 1280px) 274px, (max-width: 1536px) 299px, 299px'
                />
              )
            })
          )}
        </div>

        {!loading && products.length === 0 && (
          <Empty
            title='Your wishlist is empty'
            description='Games added to your wishlist will appear here.'
            imgPriority
          />
        )}
      </div>

      {wishlistProducts.length > 0 && (
        <div className='flex justify-center sm:justify-end mt-4'>
          <Button
            data-testid='ClearWishlistButton'
            variant='link'
            className='px-0!'
            onClick={() => {
              clearWishlist()
            }}
          >
            Clear wishlist
          </Button>
        </div>
      )}
    </>
  )
}
