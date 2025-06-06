'use client'
import { NetworkStatus, useQuery } from '@apollo/client'
import { Empty } from 'components/Empty/Empty'
import { Product, ProductSkeleton } from 'components/Product/Product'
import { PRODUCTS } from 'graphql/queries/products'
import { useSearchParams } from 'next/navigation'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { ProductsQuery } from 'types/generated'
import { getImageUrl } from 'utils/getImageUrl'
import { queryStringToGraphqlVariables } from 'utils/queryStringToGraphqlVariables'

export const productsLimit = 9

export default function ExplorePage() {
  const searchParams = useSearchParams()
  const query = Object.fromEntries(searchParams.entries())
  const variables = queryStringToGraphqlVariables({ queryString: query ?? {} })
  const { data, fetchMore, loading, networkStatus } = useQuery<ProductsQuery>(PRODUCTS, {
    notifyOnNetworkStatusChange: true,
    variables: { ...variables }
  })
  const products = data?.products || []
  const allProductsLength = data?.products_connection?.pageInfo.total || 0
  const allProductsLoaded = products.length >= allProductsLength
  const hasProducts = products.length > 0
  const showEmpty = !loading && !hasProducts
  const showShowMore = hasProducts && !loading && !allProductsLoaded
  const productsToLoad = NetworkStatus.fetchMore === networkStatus ? allProductsLength - products.length : 3

  const loadMore = () => {
    fetchMore({
      variables: {
        start: products.length,
        limit: productsLimit
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        return {
          products_connection: {
            pageInfo: {
              total: fetchMoreResult.products_connection?.pageInfo.total || 0
            }
          },
          products: [...prev.products, ...fetchMoreResult.products]
        }
      }
    })
  }

  return (
    <>
      <div
        data-cy='products'
        className='grid gap-6 auto-rows-max md:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)]'
      >
        {hasProducts &&
          products.map((product, index) => {
            const firstThreeProducts = index < 3

            return (
              <Product
                id={product.documentId}
                key={product.documentId}
                title={product.name}
                developer={product.developers[0]?.name || ''}
                cover={{
                  url: getImageUrl(product.cover.url) || '/img/default/product.webp',
                  alternativeText: product.cover.alternativeText || 'Decorative image'
                }}
                imgPriority={firstThreeProducts}
                price={product.price}
                slug={product.slug}
                promotionalPrice={product.promotional_price}
                ribbonLabel={product.ribbon_label}
              />
            )
          })}
        {loading &&
          Array.from({ length: productsToLoad }).map((_, index) => {
            return <ProductSkeleton key={index} />
          })}
      </div>

      {showEmpty && (
        <Empty
          title='No results found'
          description="Sorry, we couldn't find any results for your search."
          imgPriority
        />
      )}

      {showShowMore && (
        <button onClick={loadMore} className='group my-8 mx-auto bg-transparent block cursor-pointer'>
          <span className='block uppercase text-zinc-50 font-semibold text-base'>Show more</span>
          <MdOutlineKeyboardArrowDown className='fill-theme-primary inline-flex -mt-[3px] transition-all ease-in-out duration-100 size-6 group-hover:mt-0' />
        </button>
      )}
    </>
  )
}
