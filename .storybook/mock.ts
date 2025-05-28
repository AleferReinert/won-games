import { fn } from '@storybook/test'
import { ReadonlyURLSearchParams } from 'next/navigation'

export function createMockRouter() {
  return {
    push: fn(),
    replace: fn(),
    refresh: fn(),
    back: fn(),
    forward: fn(),
    prefetch: fn(),
    pathname: '/',
    query: {},
    asPath: '/',
    basePath: '',
    params: {},
    segment: '',
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    locale: undefined,
    locales: [],
    defaultLocale: undefined,
    route: '/',
    statusCode: 200,
    url: '/',
    viewTransitionState: {},
    searchParams: {} as ReadonlyURLSearchParams
  }
}
