import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetGamesQueryVariables = Types.Exact<{
  limit: Types.Scalars['Int']['input'];
}>;


export type GetGamesQuery = { __typename?: 'Query', games?: { __typename?: 'GameEntityResponseCollection', data: Array<{ __typename?: 'GameEntity', attributes?: { __typename?: 'Game', name: string, price: number, slug: string, cover?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, developers?: { __typename?: 'DeveloperRelationResponseCollection', data: Array<{ __typename?: 'DeveloperEntity', attributes?: { __typename?: 'Developer', name: string } | null }> } | null } | null }> } | null };


export const GetGamesDocument = gql`
    query GetGames($limit: Int!) {
  games(pagination: {start: 0, limit: $limit}) {
    data {
      attributes {
        cover {
          data {
            attributes {
              url
            }
          }
        }
        developers {
          data {
            attributes {
              name
            }
          }
        }
        name
        price
        slug
      }
    }
  }
}
    `;

/**
 * __useGetGamesQuery__
 *
 * To run a query within a React component, call `useGetGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGamesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetGamesQuery(baseOptions: Apollo.QueryHookOptions<GetGamesQuery, GetGamesQueryVariables> & ({ variables: GetGamesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGamesQuery, GetGamesQueryVariables>(GetGamesDocument, options);
      }
export function useGetGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGamesQuery, GetGamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGamesQuery, GetGamesQueryVariables>(GetGamesDocument, options);
        }
export function useGetGamesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGamesQuery, GetGamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGamesQuery, GetGamesQueryVariables>(GetGamesDocument, options);
        }
export type GetGamesQueryHookResult = ReturnType<typeof useGetGamesQuery>;
export type GetGamesLazyQueryHookResult = ReturnType<typeof useGetGamesLazyQuery>;
export type GetGamesSuspenseQueryHookResult = ReturnType<typeof useGetGamesSuspenseQuery>;
export type GetGamesQueryResult = Apollo.QueryResult<GetGamesQuery, GetGamesQueryVariables>;