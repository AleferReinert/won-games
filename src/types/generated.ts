import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Long: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Banner = {
  __typename?: 'Banner';
  button: Maybe<ComponentPageButton>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  img: UploadFileEntityResponse;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  ribbon: Maybe<ComponentPageRibbon>;
  title: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type BannerEntity = {
  __typename?: 'BannerEntity';
  attributes: Maybe<Banner>;
  id: Maybe<Scalars['ID']['output']>;
};

export type BannerEntityResponse = {
  __typename?: 'BannerEntityResponse';
  data: Maybe<BannerEntity>;
};

export type BannerEntityResponseCollection = {
  __typename?: 'BannerEntityResponseCollection';
  data: Array<BannerEntity>;
  meta: ResponseCollectionMeta;
};

export type BannerFiltersInput = {
  and: InputMaybe<Array<InputMaybe<BannerFiltersInput>>>;
  button: InputMaybe<ComponentPageButtonFiltersInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  description: InputMaybe<StringFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<BannerFiltersInput>;
  or: InputMaybe<Array<InputMaybe<BannerFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  ribbon: InputMaybe<ComponentPageRibbonFiltersInput>;
  title: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type BannerInput = {
  button: InputMaybe<ComponentPageButtonInput>;
  description: InputMaybe<Scalars['String']['input']>;
  img: InputMaybe<Scalars['ID']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  ribbon: InputMaybe<ComponentPageRibbonInput>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains: InputMaybe<Scalars['Boolean']['input']>;
  containsi: InputMaybe<Scalars['Boolean']['input']>;
  endsWith: InputMaybe<Scalars['Boolean']['input']>;
  eq: InputMaybe<Scalars['Boolean']['input']>;
  eqi: InputMaybe<Scalars['Boolean']['input']>;
  gt: InputMaybe<Scalars['Boolean']['input']>;
  gte: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt: InputMaybe<Scalars['Boolean']['input']>;
  lte: InputMaybe<Scalars['Boolean']['input']>;
  ne: InputMaybe<Scalars['Boolean']['input']>;
  not: InputMaybe<BooleanFilterInput>;
  notContains: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi: InputMaybe<Scalars['Boolean']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  products: Maybe<ProductRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryProductsArgs = {
  filters: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes: Maybe<Category>;
  id: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<CategoryFiltersInput>;
  or: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  products: InputMaybe<ProductFiltersInput>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  slug: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  name: InputMaybe<Scalars['String']['input']>;
  products: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type Company = {
  __typename?: 'Company';
  city: Scalars['String']['output'];
  complement: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  logoDark: UploadFileEntityResponse;
  logoIcon: UploadFileEntityResponse;
  logoLight: UploadFileEntityResponse;
  name: Scalars['String']['output'];
  neighborhood: Scalars['String']['output'];
  number: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  socialLinks: Maybe<Array<Maybe<ComponentPageSocialLink>>>;
  state: Scalars['String']['output'];
  street: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  zipcode: Scalars['String']['output'];
};


export type CompanySocialLinksArgs = {
  filters: InputMaybe<ComponentPageSocialLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CompanyEntity = {
  __typename?: 'CompanyEntity';
  attributes: Maybe<Company>;
  id: Maybe<Scalars['ID']['output']>;
};

export type CompanyEntityResponse = {
  __typename?: 'CompanyEntityResponse';
  data: Maybe<CompanyEntity>;
};

export type CompanyInput = {
  city: InputMaybe<Scalars['String']['input']>;
  complement: InputMaybe<Scalars['String']['input']>;
  country: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  logoDark: InputMaybe<Scalars['ID']['input']>;
  logoIcon: InputMaybe<Scalars['ID']['input']>;
  logoLight: InputMaybe<Scalars['ID']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  neighborhood: InputMaybe<Scalars['String']['input']>;
  number: InputMaybe<Scalars['String']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
  socialLinks: InputMaybe<Array<InputMaybe<ComponentPageSocialLinkInput>>>;
  state: InputMaybe<Scalars['String']['input']>;
  street: InputMaybe<Scalars['String']['input']>;
  zipcode: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPageButton = {
  __typename?: 'ComponentPageButton';
  id: Scalars['ID']['output'];
  label: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type ComponentPageButtonFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ComponentPageButtonFiltersInput>>>;
  label: InputMaybe<StringFilterInput>;
  not: InputMaybe<ComponentPageButtonFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ComponentPageButtonFiltersInput>>>;
  url: InputMaybe<StringFilterInput>;
};

export type ComponentPageButtonInput = {
  id: InputMaybe<Scalars['ID']['input']>;
  label: InputMaybe<Scalars['String']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPageHighlight = {
  __typename?: 'ComponentPageHighlight';
  alignment: Maybe<Enum_Componentpagehighlight_Alignment>;
  background: UploadFileEntityResponse;
  buttonLabel: Scalars['String']['output'];
  buttonUrl: Scalars['String']['output'];
  description: Scalars['String']['output'];
  floatImg: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ComponentPageHighlightInput = {
  alignment: InputMaybe<Enum_Componentpagehighlight_Alignment>;
  background: InputMaybe<Scalars['ID']['input']>;
  buttonLabel: InputMaybe<Scalars['String']['input']>;
  buttonUrl: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  floatImg: InputMaybe<Scalars['ID']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPagePopularProducts = {
  __typename?: 'ComponentPagePopularProducts';
  highlight: ComponentPageHighlight;
  id: Scalars['ID']['output'];
  products: Maybe<ProductRelationResponseCollection>;
  title: Scalars['String']['output'];
};


export type ComponentPagePopularProductsProductsArgs = {
  filters: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPagePopularProductsInput = {
  highlight: InputMaybe<ComponentPageHighlightInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  products: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPageRibbon = {
  __typename?: 'ComponentPageRibbon';
  color: Enum_Componentpageribbon_Color;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  size: Enum_Componentpageribbon_Size;
};

export type ComponentPageRibbonFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ComponentPageRibbonFiltersInput>>>;
  color: InputMaybe<StringFilterInput>;
  label: InputMaybe<StringFilterInput>;
  not: InputMaybe<ComponentPageRibbonFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ComponentPageRibbonFiltersInput>>>;
  size: InputMaybe<StringFilterInput>;
};

export type ComponentPageRibbonInput = {
  color: InputMaybe<Enum_Componentpageribbon_Color>;
  id: InputMaybe<Scalars['ID']['input']>;
  label: InputMaybe<Scalars['String']['input']>;
  size: InputMaybe<Enum_Componentpageribbon_Size>;
};

export type ComponentPageSection = {
  __typename?: 'ComponentPageSection';
  highlight: Maybe<ComponentPageHighlight>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ComponentPageSectionInput = {
  highlight: InputMaybe<ComponentPageHighlightInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPageSocialLink = {
  __typename?: 'ComponentPageSocialLink';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ComponentPageSocialLinkFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ComponentPageSocialLinkFiltersInput>>>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<ComponentPageSocialLinkFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ComponentPageSocialLinkFiltersInput>>>;
  url: InputMaybe<StringFilterInput>;
};

export type ComponentPageSocialLinkInput = {
  id: InputMaybe<Scalars['ID']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
};

export type DateFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains: InputMaybe<Scalars['Date']['input']>;
  containsi: InputMaybe<Scalars['Date']['input']>;
  endsWith: InputMaybe<Scalars['Date']['input']>;
  eq: InputMaybe<Scalars['Date']['input']>;
  eqi: InputMaybe<Scalars['Date']['input']>;
  gt: InputMaybe<Scalars['Date']['input']>;
  gte: InputMaybe<Scalars['Date']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt: InputMaybe<Scalars['Date']['input']>;
  lte: InputMaybe<Scalars['Date']['input']>;
  ne: InputMaybe<Scalars['Date']['input']>;
  not: InputMaybe<DateFilterInput>;
  notContains: InputMaybe<Scalars['Date']['input']>;
  notContainsi: InputMaybe<Scalars['Date']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains: InputMaybe<Scalars['DateTime']['input']>;
  containsi: InputMaybe<Scalars['DateTime']['input']>;
  endsWith: InputMaybe<Scalars['DateTime']['input']>;
  eq: InputMaybe<Scalars['DateTime']['input']>;
  eqi: InputMaybe<Scalars['DateTime']['input']>;
  gt: InputMaybe<Scalars['DateTime']['input']>;
  gte: InputMaybe<Scalars['DateTime']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt: InputMaybe<Scalars['DateTime']['input']>;
  lte: InputMaybe<Scalars['DateTime']['input']>;
  ne: InputMaybe<Scalars['DateTime']['input']>;
  not: InputMaybe<DateTimeFilterInput>;
  notContains: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi: InputMaybe<Scalars['DateTime']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith: InputMaybe<Scalars['DateTime']['input']>;
};

export type Developer = {
  __typename?: 'Developer';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  products: Maybe<ProductRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type DeveloperProductsArgs = {
  filters: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DeveloperEntity = {
  __typename?: 'DeveloperEntity';
  attributes: Maybe<Developer>;
  id: Maybe<Scalars['ID']['output']>;
};

export type DeveloperEntityResponse = {
  __typename?: 'DeveloperEntityResponse';
  data: Maybe<DeveloperEntity>;
};

export type DeveloperEntityResponseCollection = {
  __typename?: 'DeveloperEntityResponseCollection';
  data: Array<DeveloperEntity>;
  meta: ResponseCollectionMeta;
};

export type DeveloperFiltersInput = {
  and: InputMaybe<Array<InputMaybe<DeveloperFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<DeveloperFiltersInput>;
  or: InputMaybe<Array<InputMaybe<DeveloperFiltersInput>>>;
  products: InputMaybe<ProductFiltersInput>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  slug: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type DeveloperInput = {
  name: InputMaybe<Scalars['String']['input']>;
  products: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};

export type DeveloperRelationResponseCollection = {
  __typename?: 'DeveloperRelationResponseCollection';
  data: Array<DeveloperEntity>;
};

export enum Enum_Componentpagehighlight_Alignment {
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentpageribbon_Color {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum Enum_Componentpageribbon_Size {
  Large = 'large',
  Small = 'small'
}

export enum Enum_Product_Rating {
  Br0 = 'BR0',
  Br10 = 'BR10',
  Br12 = 'BR12',
  Br14 = 'BR14',
  Br16 = 'BR16',
  Br18 = 'BR18'
}

export type FileInfoInput = {
  alternativeText: InputMaybe<Scalars['String']['input']>;
  caption: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains: InputMaybe<Scalars['Float']['input']>;
  containsi: InputMaybe<Scalars['Float']['input']>;
  endsWith: InputMaybe<Scalars['Float']['input']>;
  eq: InputMaybe<Scalars['Float']['input']>;
  eqi: InputMaybe<Scalars['Float']['input']>;
  gt: InputMaybe<Scalars['Float']['input']>;
  gte: InputMaybe<Scalars['Float']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt: InputMaybe<Scalars['Float']['input']>;
  lte: InputMaybe<Scalars['Float']['input']>;
  ne: InputMaybe<Scalars['Float']['input']>;
  not: InputMaybe<FloatFilterInput>;
  notContains: InputMaybe<Scalars['Float']['input']>;
  notContainsi: InputMaybe<Scalars['Float']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Banner | Category | Company | ComponentPageButton | ComponentPageHighlight | ComponentPagePopularProducts | ComponentPageRibbon | ComponentPageSection | ComponentPageSocialLink | Developer | Home | I18NLocale | Order | Platform | Product | Publisher | Recommended | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Wishlist;

export type Home = {
  __typename?: 'Home';
  comingSoonProducts: Maybe<ComponentPageSection>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  freeProducts: Maybe<ComponentPageSection>;
  newProducts: Maybe<ComponentPageSection>;
  popularProducts: Maybe<ComponentPagePopularProducts>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type HomeEntity = {
  __typename?: 'HomeEntity';
  attributes: Maybe<Home>;
  id: Maybe<Scalars['ID']['output']>;
};

export type HomeEntityResponse = {
  __typename?: 'HomeEntityResponse';
  data: Maybe<HomeEntity>;
};

export type HomeInput = {
  comingSoonProducts: InputMaybe<ComponentPageSectionInput>;
  freeProducts: InputMaybe<ComponentPageSectionInput>;
  newProducts: InputMaybe<ComponentPageSectionInput>;
  popularProducts: InputMaybe<ComponentPagePopularProductsInput>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  name: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes: Maybe<I18NLocale>;
  id: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code: InputMaybe<StringFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<I18NLocaleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains: InputMaybe<Scalars['ID']['input']>;
  containsi: InputMaybe<Scalars['ID']['input']>;
  endsWith: InputMaybe<Scalars['ID']['input']>;
  eq: InputMaybe<Scalars['ID']['input']>;
  eqi: InputMaybe<Scalars['ID']['input']>;
  gt: InputMaybe<Scalars['ID']['input']>;
  gte: InputMaybe<Scalars['ID']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt: InputMaybe<Scalars['ID']['input']>;
  lte: InputMaybe<Scalars['ID']['input']>;
  ne: InputMaybe<Scalars['ID']['input']>;
  not: InputMaybe<IdFilterInput>;
  notContains: InputMaybe<Scalars['ID']['input']>;
  notContainsi: InputMaybe<Scalars['ID']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains: InputMaybe<Scalars['Int']['input']>;
  containsi: InputMaybe<Scalars['Int']['input']>;
  endsWith: InputMaybe<Scalars['Int']['input']>;
  eq: InputMaybe<Scalars['Int']['input']>;
  eqi: InputMaybe<Scalars['Int']['input']>;
  gt: InputMaybe<Scalars['Int']['input']>;
  gte: InputMaybe<Scalars['Int']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt: InputMaybe<Scalars['Int']['input']>;
  lte: InputMaybe<Scalars['Int']['input']>;
  ne: InputMaybe<Scalars['Int']['input']>;
  not: InputMaybe<IntFilterInput>;
  notContains: InputMaybe<Scalars['Int']['input']>;
  notContainsi: InputMaybe<Scalars['Int']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains: InputMaybe<Scalars['JSON']['input']>;
  containsi: InputMaybe<Scalars['JSON']['input']>;
  endsWith: InputMaybe<Scalars['JSON']['input']>;
  eq: InputMaybe<Scalars['JSON']['input']>;
  eqi: InputMaybe<Scalars['JSON']['input']>;
  gt: InputMaybe<Scalars['JSON']['input']>;
  gte: InputMaybe<Scalars['JSON']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt: InputMaybe<Scalars['JSON']['input']>;
  lte: InputMaybe<Scalars['JSON']['input']>;
  ne: InputMaybe<Scalars['JSON']['input']>;
  not: InputMaybe<JsonFilterInput>;
  notContains: InputMaybe<Scalars['JSON']['input']>;
  notContainsi: InputMaybe<Scalars['JSON']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith: InputMaybe<Scalars['JSON']['input']>;
};

export type LongFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  contains: InputMaybe<Scalars['Long']['input']>;
  containsi: InputMaybe<Scalars['Long']['input']>;
  endsWith: InputMaybe<Scalars['Long']['input']>;
  eq: InputMaybe<Scalars['Long']['input']>;
  eqi: InputMaybe<Scalars['Long']['input']>;
  gt: InputMaybe<Scalars['Long']['input']>;
  gte: InputMaybe<Scalars['Long']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt: InputMaybe<Scalars['Long']['input']>;
  lte: InputMaybe<Scalars['Long']['input']>;
  ne: InputMaybe<Scalars['Long']['input']>;
  not: InputMaybe<LongFilterInput>;
  notContains: InputMaybe<Scalars['Long']['input']>;
  notContainsi: InputMaybe<Scalars['Long']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  startsWith: InputMaybe<Scalars['Long']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword: Maybe<UsersPermissionsLoginPayload>;
  createBanner: Maybe<BannerEntityResponse>;
  createCategory: Maybe<CategoryEntityResponse>;
  createDeveloper: Maybe<DeveloperEntityResponse>;
  createOrder: Maybe<OrderEntityResponse>;
  createPlatform: Maybe<PlatformEntityResponse>;
  createProduct: Maybe<ProductEntityResponse>;
  createPublisher: Maybe<PublisherEntityResponse>;
  createUploadFile: Maybe<UploadFileEntityResponse>;
  createUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWishlist: Maybe<WishlistEntityResponse>;
  deleteBanner: Maybe<BannerEntityResponse>;
  deleteCategory: Maybe<CategoryEntityResponse>;
  deleteCompany: Maybe<CompanyEntityResponse>;
  deleteDeveloper: Maybe<DeveloperEntityResponse>;
  deleteHome: Maybe<HomeEntityResponse>;
  deleteOrder: Maybe<OrderEntityResponse>;
  deletePlatform: Maybe<PlatformEntityResponse>;
  deleteProduct: Maybe<ProductEntityResponse>;
  deletePublisher: Maybe<PublisherEntityResponse>;
  deleteRecommended: Maybe<RecommendedEntityResponse>;
  deleteUploadFile: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWishlist: Maybe<WishlistEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword: Maybe<UsersPermissionsLoginPayload>;
  updateBanner: Maybe<BannerEntityResponse>;
  updateCategory: Maybe<CategoryEntityResponse>;
  updateCompany: Maybe<CompanyEntityResponse>;
  updateDeveloper: Maybe<DeveloperEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHome: Maybe<HomeEntityResponse>;
  updateOrder: Maybe<OrderEntityResponse>;
  updatePlatform: Maybe<PlatformEntityResponse>;
  updateProduct: Maybe<ProductEntityResponse>;
  updatePublisher: Maybe<PublisherEntityResponse>;
  updateRecommended: Maybe<RecommendedEntityResponse>;
  updateUploadFile: Maybe<UploadFileEntityResponse>;
  updateUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWishlist: Maybe<WishlistEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateBannerArgs = {
  data: BannerInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateDeveloperArgs = {
  data: DeveloperInput;
};


export type MutationCreateOrderArgs = {
  data: OrderInput;
};


export type MutationCreatePlatformArgs = {
  data: PlatformInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationCreatePublisherArgs = {
  data: PublisherInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWishlistArgs = {
  data: WishlistInput;
};


export type MutationDeleteBannerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDeveloperArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePlatformArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePublisherArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWishlistArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateBannerArgs = {
  data: BannerInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCompanyArgs = {
  data: CompanyInput;
};


export type MutationUpdateDeveloperArgs = {
  data: DeveloperInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHomeArgs = {
  data: HomeInput;
};


export type MutationUpdateOrderArgs = {
  data: OrderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePlatformArgs = {
  data: PlatformInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePublisherArgs = {
  data: PublisherInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRecommendedArgs = {
  data: RecommendedInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWishlistArgs = {
  data: WishlistInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info: InputMaybe<FileInfoInput>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};

export type Order = {
  __typename?: 'Order';
  card_brand: Maybe<Scalars['String']['output']>;
  card_last4: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  payment_intent_id: Maybe<Scalars['String']['output']>;
  products: Maybe<ProductRelationResponseCollection>;
  total_in_cents: Scalars['Long']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  users_permissions_user: Maybe<UsersPermissionsUserEntityResponse>;
};


export type OrderProductsArgs = {
  filters: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OrderEntity = {
  __typename?: 'OrderEntity';
  attributes: Maybe<Order>;
  id: Maybe<Scalars['ID']['output']>;
};

export type OrderEntityResponse = {
  __typename?: 'OrderEntityResponse';
  data: Maybe<OrderEntity>;
};

export type OrderEntityResponseCollection = {
  __typename?: 'OrderEntityResponseCollection';
  data: Array<OrderEntity>;
  meta: ResponseCollectionMeta;
};

export type OrderFiltersInput = {
  and: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  card_brand: InputMaybe<StringFilterInput>;
  card_last4: InputMaybe<StringFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<OrderFiltersInput>;
  or: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  payment_intent_id: InputMaybe<StringFilterInput>;
  products: InputMaybe<ProductFiltersInput>;
  total_in_cents: InputMaybe<LongFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  users_permissions_user: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type OrderInput = {
  card_brand: InputMaybe<Scalars['String']['input']>;
  card_last4: InputMaybe<Scalars['String']['input']>;
  payment_intent_id: InputMaybe<Scalars['String']['input']>;
  products: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  total_in_cents: InputMaybe<Scalars['Long']['input']>;
  users_permissions_user: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  start: InputMaybe<Scalars['Int']['input']>;
};

export type Platform = {
  __typename?: 'Platform';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  products: Maybe<ProductRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type PlatformProductsArgs = {
  filters: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PlatformEntity = {
  __typename?: 'PlatformEntity';
  attributes: Maybe<Platform>;
  id: Maybe<Scalars['ID']['output']>;
};

export type PlatformEntityResponse = {
  __typename?: 'PlatformEntityResponse';
  data: Maybe<PlatformEntity>;
};

export type PlatformEntityResponseCollection = {
  __typename?: 'PlatformEntityResponseCollection';
  data: Array<PlatformEntity>;
  meta: ResponseCollectionMeta;
};

export type PlatformFiltersInput = {
  and: InputMaybe<Array<InputMaybe<PlatformFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<PlatformFiltersInput>;
  or: InputMaybe<Array<InputMaybe<PlatformFiltersInput>>>;
  products: InputMaybe<ProductFiltersInput>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  slug: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type PlatformInput = {
  name: InputMaybe<Scalars['String']['input']>;
  products: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};

export type PlatformRelationResponseCollection = {
  __typename?: 'PlatformRelationResponseCollection';
  data: Array<PlatformEntity>;
};

export type Product = {
  __typename?: 'Product';
  categories: Maybe<CategoryRelationResponseCollection>;
  cover: UploadFileEntityResponse;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  developers: Maybe<DeveloperRelationResponseCollection>;
  gallery: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  platforms: Maybe<PlatformRelationResponseCollection>;
  price: Scalars['Float']['output'];
  promotional_price: Maybe<Scalars['Float']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  publisher: Maybe<PublisherEntityResponse>;
  rating: Maybe<Enum_Product_Rating>;
  release_date: Maybe<Scalars['Date']['output']>;
  ribbon_label: Maybe<Scalars['String']['output']>;
  short_description: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type ProductCategoriesArgs = {
  filters: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductDevelopersArgs = {
  filters: InputMaybe<DeveloperFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductGalleryArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductPlatformsArgs = {
  filters: InputMaybe<PlatformFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  attributes: Maybe<Product>;
  id: Maybe<Scalars['ID']['output']>;
};

export type ProductEntityResponse = {
  __typename?: 'ProductEntityResponse';
  data: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  categories: InputMaybe<CategoryFiltersInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  description: InputMaybe<StringFilterInput>;
  developers: InputMaybe<DeveloperFiltersInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<ProductFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  platforms: InputMaybe<PlatformFiltersInput>;
  price: InputMaybe<FloatFilterInput>;
  promotional_price: InputMaybe<FloatFilterInput>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  publisher: InputMaybe<PublisherFiltersInput>;
  rating: InputMaybe<StringFilterInput>;
  release_date: InputMaybe<DateFilterInput>;
  ribbon_label: InputMaybe<StringFilterInput>;
  short_description: InputMaybe<StringFilterInput>;
  slug: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  categories: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cover: InputMaybe<Scalars['ID']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  developers: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  gallery: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name: InputMaybe<Scalars['String']['input']>;
  platforms: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  price: InputMaybe<Scalars['Float']['input']>;
  promotional_price: InputMaybe<Scalars['Float']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  publisher: InputMaybe<Scalars['ID']['input']>;
  rating: InputMaybe<Enum_Product_Rating>;
  release_date: InputMaybe<Scalars['Date']['input']>;
  ribbon_label: InputMaybe<Scalars['String']['input']>;
  short_description: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};

export type ProductRelationResponseCollection = {
  __typename?: 'ProductRelationResponseCollection';
  data: Array<ProductEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Publisher = {
  __typename?: 'Publisher';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  products: Maybe<ProductRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type PublisherProductsArgs = {
  filters: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PublisherEntity = {
  __typename?: 'PublisherEntity';
  attributes: Maybe<Publisher>;
  id: Maybe<Scalars['ID']['output']>;
};

export type PublisherEntityResponse = {
  __typename?: 'PublisherEntityResponse';
  data: Maybe<PublisherEntity>;
};

export type PublisherEntityResponseCollection = {
  __typename?: 'PublisherEntityResponseCollection';
  data: Array<PublisherEntity>;
  meta: ResponseCollectionMeta;
};

export type PublisherFiltersInput = {
  and: InputMaybe<Array<InputMaybe<PublisherFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<PublisherFiltersInput>;
  or: InputMaybe<Array<InputMaybe<PublisherFiltersInput>>>;
  products: InputMaybe<ProductFiltersInput>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  slug: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type PublisherInput = {
  name: InputMaybe<Scalars['String']['input']>;
  products: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  banner: Maybe<BannerEntityResponse>;
  banners: Maybe<BannerEntityResponseCollection>;
  categories: Maybe<CategoryEntityResponseCollection>;
  category: Maybe<CategoryEntityResponse>;
  company: Maybe<CompanyEntityResponse>;
  developer: Maybe<DeveloperEntityResponse>;
  developers: Maybe<DeveloperEntityResponseCollection>;
  home: Maybe<HomeEntityResponse>;
  i18NLocale: Maybe<I18NLocaleEntityResponse>;
  i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  me: Maybe<UsersPermissionsMe>;
  order: Maybe<OrderEntityResponse>;
  orders: Maybe<OrderEntityResponseCollection>;
  platform: Maybe<PlatformEntityResponse>;
  platforms: Maybe<PlatformEntityResponseCollection>;
  product: Maybe<ProductEntityResponse>;
  products: Maybe<ProductEntityResponseCollection>;
  publisher: Maybe<PublisherEntityResponse>;
  publishers: Maybe<PublisherEntityResponseCollection>;
  recommended: Maybe<RecommendedEntityResponse>;
  uploadFile: Maybe<UploadFileEntityResponse>;
  uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder: Maybe<UploadFolderEntityResponse>;
  uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
  wishlist: Maybe<WishlistEntityResponse>;
  wishlists: Maybe<WishlistEntityResponseCollection>;
};


export type QueryBannerArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBannersArgs = {
  filters: InputMaybe<BannerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoriesArgs = {
  filters: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDeveloperArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDevelopersArgs = {
  filters: InputMaybe<DeveloperFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomeArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrderArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrdersArgs = {
  filters: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPlatformArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPlatformsArgs = {
  filters: InputMaybe<PlatformFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductsArgs = {
  filters: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPublisherArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPublishersArgs = {
  filters: InputMaybe<PublisherFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRecommendedArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWishlistArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWishlistsArgs = {
  filters: InputMaybe<WishlistFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Recommended = {
  __typename?: 'Recommended';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  highlight: Maybe<ComponentPageHighlight>;
  products: Maybe<ProductRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type RecommendedProductsArgs = {
  filters: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RecommendedEntity = {
  __typename?: 'RecommendedEntity';
  attributes: Maybe<Recommended>;
  id: Maybe<Scalars['ID']['output']>;
};

export type RecommendedEntityResponse = {
  __typename?: 'RecommendedEntityResponse';
  data: Maybe<RecommendedEntity>;
};

export type RecommendedInput = {
  highlight: InputMaybe<ComponentPageHighlightInput>;
  products: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  containsi: InputMaybe<Scalars['String']['input']>;
  endsWith: InputMaybe<Scalars['String']['input']>;
  eq: InputMaybe<Scalars['String']['input']>;
  eqi: InputMaybe<Scalars['String']['input']>;
  gt: InputMaybe<Scalars['String']['input']>;
  gte: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt: InputMaybe<Scalars['String']['input']>;
  lte: InputMaybe<Scalars['String']['input']>;
  ne: InputMaybe<Scalars['String']['input']>;
  not: InputMaybe<StringFilterInput>;
  notContains: InputMaybe<Scalars['String']['input']>;
  notContainsi: InputMaybe<Scalars['String']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText: Maybe<Scalars['String']['output']>;
  caption: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  ext: Maybe<Scalars['String']['output']>;
  formats: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata: Maybe<Scalars['JSON']['output']>;
  related: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes: Maybe<UploadFile>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption: InputMaybe<StringFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  ext: InputMaybe<StringFilterInput>;
  folder: InputMaybe<UploadFolderFiltersInput>;
  folderPath: InputMaybe<StringFilterInput>;
  formats: InputMaybe<JsonFilterInput>;
  hash: InputMaybe<StringFilterInput>;
  height: InputMaybe<IntFilterInput>;
  id: InputMaybe<IdFilterInput>;
  mime: InputMaybe<StringFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UploadFileFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl: InputMaybe<StringFilterInput>;
  provider: InputMaybe<StringFilterInput>;
  provider_metadata: InputMaybe<JsonFilterInput>;
  size: InputMaybe<FloatFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  url: InputMaybe<StringFilterInput>;
  width: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText: InputMaybe<Scalars['String']['input']>;
  caption: InputMaybe<Scalars['String']['input']>;
  ext: InputMaybe<Scalars['String']['input']>;
  folder: InputMaybe<Scalars['ID']['input']>;
  folderPath: InputMaybe<Scalars['String']['input']>;
  formats: InputMaybe<Scalars['JSON']['input']>;
  hash: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  mime: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  previewUrl: InputMaybe<Scalars['String']['input']>;
  provider: InputMaybe<Scalars['String']['input']>;
  provider_metadata: InputMaybe<Scalars['JSON']['input']>;
  size: InputMaybe<Scalars['Float']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children: Maybe<UploadFolderRelationResponseCollection>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  files: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes: Maybe<UploadFolder>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children: InputMaybe<UploadFolderFiltersInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  files: InputMaybe<UploadFileFiltersInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UploadFolderFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent: InputMaybe<UploadFolderFiltersInput>;
  path: InputMaybe<StringFilterInput>;
  pathId: InputMaybe<IntFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name: InputMaybe<Scalars['String']['input']>;
  parent: InputMaybe<Scalars['ID']['input']>;
  path: InputMaybe<Scalars['String']['input']>;
  pathId: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked: Maybe<Scalars['Boolean']['output']>;
  confirmed: Maybe<Scalars['Boolean']['output']>;
  email: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes: Maybe<UsersPermissionsPermission>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes: Maybe<UsersPermissionsRole>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  description: InputMaybe<StringFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  permissions: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type: InputMaybe<Scalars['String']['input']>;
  users: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked: Maybe<Scalars['Boolean']['output']>;
  confirmed: Maybe<Scalars['Boolean']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider: Maybe<Scalars['String']['output']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes: Maybe<UsersPermissionsUser>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked: InputMaybe<BooleanFilterInput>;
  confirmationToken: InputMaybe<StringFilterInput>;
  confirmed: InputMaybe<BooleanFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  email: InputMaybe<StringFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<UsersPermissionsUserFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password: InputMaybe<StringFilterInput>;
  provider: InputMaybe<StringFilterInput>;
  resetPasswordToken: InputMaybe<StringFilterInput>;
  role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken: InputMaybe<Scalars['String']['input']>;
  confirmed: InputMaybe<Scalars['Boolean']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
  provider: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  role: InputMaybe<Scalars['ID']['input']>;
  username: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Wishlist = {
  __typename?: 'Wishlist';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  products: Maybe<ProductRelationResponseCollection>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  user: Maybe<UsersPermissionsUserEntityResponse>;
};


export type WishlistProductsArgs = {
  filters: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WishlistEntity = {
  __typename?: 'WishlistEntity';
  attributes: Maybe<Wishlist>;
  id: Maybe<Scalars['ID']['output']>;
};

export type WishlistEntityResponse = {
  __typename?: 'WishlistEntityResponse';
  data: Maybe<WishlistEntity>;
};

export type WishlistEntityResponseCollection = {
  __typename?: 'WishlistEntityResponseCollection';
  data: Array<WishlistEntity>;
  meta: ResponseCollectionMeta;
};

export type WishlistFiltersInput = {
  and: InputMaybe<Array<InputMaybe<WishlistFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<WishlistFiltersInput>;
  or: InputMaybe<Array<InputMaybe<WishlistFiltersInput>>>;
  products: InputMaybe<ProductFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  user: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type WishlistInput = {
  products: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  user: InputMaybe<Scalars['ID']['input']>;
};

export type BannerFragment = { __typename?: 'BannerEntityResponseCollection', data: Array<{ __typename?: 'BannerEntity', id: string, attributes: { __typename?: 'Banner', title: string, description: string, img: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, button: { __typename?: 'ComponentPageButton', label: string, url: string }, ribbon: { __typename?: 'ComponentPageRibbon', label: string, color: Enum_Componentpageribbon_Color, size: Enum_Componentpageribbon_Size } } }> };

export type HighlightFragment = { __typename?: 'ComponentPageHighlight', title: string, description: string, buttonLabel: string, buttonUrl: string, alignment: Enum_Componentpagehighlight_Alignment, background: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, floatImg: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } } };

export type PopularProductsFragment = { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id: string, attributes: { __typename?: 'Product', name: string, slug: string, price: number, developers: { __typename?: 'DeveloperRelationResponseCollection', data: Array<{ __typename?: 'DeveloperEntity', attributes: { __typename?: 'Developer', name: string } }> }, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } } } }> };

export type ProductEntityFragment = { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id: string, attributes: { __typename?: 'Product', name: string, price: number, slug: string, promotional_price: number, ribbon_label: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, developers: { __typename?: 'DeveloperRelationResponseCollection', data: Array<{ __typename?: 'DeveloperEntity', attributes: { __typename?: 'Developer', name: string } }> } } }> };

export type ProductRelationFragment = { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id: string, attributes: { __typename?: 'Product', slug: string, name: string, price: number, promotional_price: number, ribbon_label: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, developers: { __typename?: 'DeveloperRelationResponseCollection', data: Array<{ __typename?: 'DeveloperEntity', attributes: { __typename?: 'Developer', name: string } }> } } }> };

export type CreateWishlistMutationVariables = Exact<{
  data: WishlistInput;
}>;


export type CreateWishlistMutation = { __typename?: 'Mutation', createWishlist: { __typename?: 'WishlistEntityResponse', data: { __typename?: 'WishlistEntity', id: string, attributes: { __typename?: 'Wishlist', products: { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id: string, attributes: { __typename?: 'Product', slug: string, name: string, price: number, promotional_price: number, ribbon_label: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, developers: { __typename?: 'DeveloperRelationResponseCollection', data: Array<{ __typename?: 'DeveloperEntity', attributes: { __typename?: 'Developer', name: string } }> } } }> } } } } };

export type RegisterUserMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', register: { __typename?: 'UsersPermissionsLoginPayload', jwt: string } };

export type UpdateWishlishMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: WishlistInput;
}>;


export type UpdateWishlishMutation = { __typename?: 'Mutation', updateWishlist: { __typename?: 'WishlistEntityResponse', data: { __typename?: 'WishlistEntity', id: string, attributes: { __typename?: 'Wishlist', user: { __typename?: 'UsersPermissionsUserEntityResponse', data: { __typename?: 'UsersPermissionsUserEntity', id: string, attributes: { __typename?: 'UsersPermissionsUser', username: string } } }, products: { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id: string, attributes: { __typename?: 'Product', slug: string, name: string, price: number, promotional_price: number, ribbon_label: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, developers: { __typename?: 'DeveloperRelationResponseCollection', data: Array<{ __typename?: 'DeveloperEntity', attributes: { __typename?: 'Developer', name: string } }> } } }> } } } } };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes: { __typename?: 'Category', name: string, slug: string } }> } };

export type ComingSoonQueryVariables = Exact<{
  currentDate: Scalars['Date']['input'];
}>;


export type ComingSoonQuery = { __typename?: 'Query', comingSoonProducts: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id: string, attributes: { __typename?: 'Product', name: string, price: number, slug: string, promotional_price: number, ribbon_label: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, developers: { __typename?: 'DeveloperRelationResponseCollection', data: Array<{ __typename?: 'DeveloperEntity', attributes: { __typename?: 'Developer', name: string } }> } } }> }, showcase: { __typename?: 'HomeEntityResponse', data: { __typename?: 'HomeEntity', attributes: { __typename?: 'Home', comingSoonProducts: { __typename?: 'ComponentPageSection', title: string, highlight: { __typename?: 'ComponentPageHighlight', title: string, description: string, buttonLabel: string, buttonUrl: string, alignment: Enum_Componentpagehighlight_Alignment, background: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, floatImg: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } } } } } } } };

export type CompanyQueryVariables = Exact<{ [key: string]: never; }>;


export type CompanyQuery = { __typename?: 'Query', company: { __typename?: 'CompanyEntityResponse', data: { __typename?: 'CompanyEntity', attributes: { __typename?: 'Company', name: string, email: string, phone: string, street: string, number: string, neighborhood: string, city: string, zipcode: string, state: string, country: string, complement: string, logoLight: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, width: number, height: number, formats: any } } }, logoDark: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, width: number, height: number } } }, logoIcon: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, width: number, height: number } } }, socialLinks: Array<{ __typename?: 'ComponentPageSocialLink', name: string, url: string }> } } } };

export type OrdersQueryVariables = Exact<{
  identifier: InputMaybe<Scalars['ID']['input']>;
}>;


export type OrdersQuery = { __typename?: 'Query', orders: { __typename?: 'OrderEntityResponseCollection', data: Array<{ __typename?: 'OrderEntity', id: string, attributes: { __typename?: 'Order', card_brand: string, card_last4: string, createdAt: any, products: { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id: string, attributes: { __typename?: 'Product', name: string, price: number, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', formats: any } } } } }> } } }> } };

export type PageHomeQueryVariables = Exact<{
  currentDate: Scalars['Date']['input'];
  pastDate: Scalars['Date']['input'];
  limit: Scalars['Int']['input'];
}>;


export type PageHomeQuery = { __typename?: 'Query', banners: { __typename?: 'BannerEntityResponseCollection', data: Array<{ __typename?: 'BannerEntity', id: string, attributes: { __typename?: 'Banner', title: string, description: string, img: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, button: { __typename?: 'ComponentPageButton', label: string, url: string }, ribbon: { __typename?: 'ComponentPageRibbon', label: string, color: Enum_Componentpageribbon_Color, size: Enum_Componentpageribbon_Size } } }> }, newProducts: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id: string, attributes: { __typename?: 'Product', name: string, price: number, slug: string, promotional_price: number, ribbon_label: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, developers: { __typename?: 'DeveloperRelationResponseCollection', data: Array<{ __typename?: 'DeveloperEntity', attributes: { __typename?: 'Developer', name: string } }> } } }> }, comingSoonProducts: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id: string, attributes: { __typename?: 'Product', name: string, price: number, slug: string, promotional_price: number, ribbon_label: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, developers: { __typename?: 'DeveloperRelationResponseCollection', data: Array<{ __typename?: 'DeveloperEntity', attributes: { __typename?: 'Developer', name: string } }> } } }> }, freeProducts: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id: string, attributes: { __typename?: 'Product', name: string, price: number, slug: string, promotional_price: number, ribbon_label: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, developers: { __typename?: 'DeveloperRelationResponseCollection', data: Array<{ __typename?: 'DeveloperEntity', attributes: { __typename?: 'Developer', name: string } }> } } }> }, showcases: { __typename?: 'HomeEntityResponse', data: { __typename?: 'HomeEntity', attributes: { __typename?: 'Home', newProducts: { __typename?: 'ComponentPageSection', title: string, highlight: { __typename?: 'ComponentPageHighlight', title: string, description: string, buttonLabel: string, buttonUrl: string, alignment: Enum_Componentpagehighlight_Alignment, background: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, floatImg: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } } } }, popularProducts: { __typename?: 'ComponentPagePopularProducts', title: string, highlight: { __typename?: 'ComponentPageHighlight', title: string, description: string, buttonLabel: string, buttonUrl: string, alignment: Enum_Componentpagehighlight_Alignment, background: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, floatImg: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } } }, products: { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id: string, attributes: { __typename?: 'Product', name: string, slug: string, price: number, promotional_price: number, ribbon_label: string, developers: { __typename?: 'DeveloperRelationResponseCollection', data: Array<{ __typename?: 'DeveloperEntity', attributes: { __typename?: 'Developer', name: string } }> }, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } } } }> } }, comingSoonProducts: { __typename?: 'ComponentPageSection', title: string, highlight: { __typename?: 'ComponentPageHighlight', title: string, description: string, buttonLabel: string, buttonUrl: string, alignment: Enum_Componentpagehighlight_Alignment, background: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, floatImg: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } } } }, freeProducts: { __typename?: 'ComponentPageSection', title: string, highlight: { __typename?: 'ComponentPageHighlight', title: string, description: string, buttonLabel: string, buttonUrl: string, alignment: Enum_Componentpagehighlight_Alignment, background: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, floatImg: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } } } } } } } };

export type PlatformsQueryVariables = Exact<{ [key: string]: never; }>;


export type PlatformsQuery = { __typename?: 'Query', platforms: { __typename?: 'PlatformEntityResponseCollection', data: Array<{ __typename?: 'PlatformEntity', attributes: { __typename?: 'Platform', name: string, slug: string } }> } };

export type ProductBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductBySlugQuery = { __typename?: 'Query', products: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id: string, attributes: { __typename?: 'Product', name: string, short_description: string, description: string, price: number, release_date: any, rating: Enum_Product_Rating, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, gallery: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } }> }, developers: { __typename?: 'DeveloperRelationResponseCollection', data: Array<{ __typename?: 'DeveloperEntity', attributes: { __typename?: 'Developer', name: string } }> }, platforms: { __typename?: 'PlatformRelationResponseCollection', data: Array<{ __typename?: 'PlatformEntity', attributes: { __typename?: 'Platform', name: string } }> }, publisher: { __typename?: 'PublisherEntityResponse', data: { __typename?: 'PublisherEntity', attributes: { __typename?: 'Publisher', name: string } } }, categories: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes: { __typename?: 'Category', name: string } }> } } }> } };

export type ProductsQueryVariables = Exact<{
  limit: InputMaybe<Scalars['Int']['input']>;
  start: InputMaybe<Scalars['Int']['input']>;
  filters: InputMaybe<ProductFiltersInput>;
  sort: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id: string, attributes: { __typename?: 'Product', name: string, price: number, slug: string, promotional_price: number, ribbon_label: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, developers: { __typename?: 'DeveloperRelationResponseCollection', data: Array<{ __typename?: 'DeveloperEntity', attributes: { __typename?: 'Developer', name: string } }> } } }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } };

export type ProfileQueryVariables = Exact<{
  identifier: InputMaybe<Scalars['ID']['input']>;
}>;


export type ProfileQuery = { __typename?: 'Query', usersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data: { __typename?: 'UsersPermissionsUserEntity', attributes: { __typename?: 'UsersPermissionsUser', username: string, email: string } } } };

export type RecommendedProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type RecommendedProductsQuery = { __typename?: 'Query', recommended: { __typename?: 'RecommendedEntityResponse', data: { __typename?: 'RecommendedEntity', attributes: { __typename?: 'Recommended', title: string, highlight: { __typename?: 'ComponentPageHighlight', title: string, description: string, buttonLabel: string, buttonUrl: string, alignment: Enum_Componentpagehighlight_Alignment, background: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, floatImg: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } } }, products: { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id: string, attributes: { __typename?: 'Product', slug: string, name: string, price: number, promotional_price: number, ribbon_label: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, developers: { __typename?: 'DeveloperRelationResponseCollection', data: Array<{ __typename?: 'DeveloperEntity', attributes: { __typename?: 'Developer', name: string } }> } } }> } } } } };

export type WishlistQueryVariables = Exact<{
  userEmail: InputMaybe<StringFilterInput>;
}>;


export type WishlistQuery = { __typename?: 'Query', wishlists: { __typename?: 'WishlistEntityResponseCollection', data: Array<{ __typename?: 'WishlistEntity', id: string, attributes: { __typename?: 'Wishlist', products: { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id: string, attributes: { __typename?: 'Product', slug: string, name: string, price: number, promotional_price: number, ribbon_label: string, cover: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string, alternativeText: string } } }, developers: { __typename?: 'DeveloperRelationResponseCollection', data: Array<{ __typename?: 'DeveloperEntity', attributes: { __typename?: 'Developer', name: string } }> } } }> } } }> } };

export const BannerFragmentDoc = gql`
    fragment banner on BannerEntityResponseCollection {
  data {
    id
    attributes {
      img {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }
      title
      description
      button {
        label
        url
      }
      ribbon {
        label
        color
        size
      }
    }
  }
}
    `;
export const HighlightFragmentDoc = gql`
    fragment highlight on ComponentPageHighlight {
  title
  description
  buttonLabel
  buttonUrl
  alignment
  background {
    data {
      attributes {
        url
        alternativeText
      }
    }
  }
  floatImg {
    data {
      attributes {
        url
        alternativeText
      }
    }
  }
}
    `;
export const PopularProductsFragmentDoc = gql`
    fragment popularProducts on ProductRelationResponseCollection {
  data {
    id
    attributes {
      name
      slug
      price
      developers {
        data {
          attributes {
            name
          }
        }
      }
      cover {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }
    }
  }
}
    `;
export const ProductEntityFragmentDoc = gql`
    fragment productEntity on ProductEntityResponseCollection {
  data {
    id
    attributes {
      cover {
        data {
          attributes {
            url
            alternativeText
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
      promotional_price
      ribbon_label
    }
  }
}
    `;
export const ProductRelationFragmentDoc = gql`
    fragment productRelation on ProductRelationResponseCollection {
  data {
    id
    attributes {
      slug
      cover {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }
      name
      developers {
        data {
          attributes {
            name
          }
        }
      }
      price
      promotional_price
      ribbon_label
    }
  }
}
    `;
export const CreateWishlistDocument = gql`
    mutation CreateWishlist($data: WishlistInput!) {
  createWishlist(data: $data) {
    data {
      id
      attributes {
        products {
          data {
            id
            attributes {
              slug
              cover {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              name
              developers {
                data {
                  attributes {
                    name
                  }
                }
              }
              price
              promotional_price
              ribbon_label
            }
          }
        }
      }
    }
  }
}
    `;
export type CreateWishlistMutationFn = Apollo.MutationFunction<CreateWishlistMutation, CreateWishlistMutationVariables>;
export type CreateWishlistMutationResult = Apollo.MutationResult<CreateWishlistMutation>;
export type CreateWishlistMutationOptions = Apollo.BaseMutationOptions<CreateWishlistMutation, CreateWishlistMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
    jwt
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const UpdateWishlishDocument = gql`
    mutation UpdateWishlish($id: ID!, $data: WishlistInput!) {
  updateWishlist(id: $id, data: $data) {
    data {
      id
      attributes {
        user {
          data {
            id
            attributes {
              username
            }
          }
        }
        products {
          ...productRelation
        }
      }
    }
  }
}
    ${ProductRelationFragmentDoc}`;
export type UpdateWishlishMutationFn = Apollo.MutationFunction<UpdateWishlishMutation, UpdateWishlishMutationVariables>;
export type UpdateWishlishMutationResult = Apollo.MutationResult<UpdateWishlishMutation>;
export type UpdateWishlishMutationOptions = Apollo.BaseMutationOptions<UpdateWishlishMutation, UpdateWishlishMutationVariables>;
export const CategoriesDocument = gql`
    query Categories {
  categories(sort: "name:asc", pagination: {start: 0, limit: 100}) {
    data {
      attributes {
        name
        slug
      }
    }
  }
}
    `;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const ComingSoonDocument = gql`
    query ComingSoon($currentDate: Date!) {
  comingSoonProducts: products(
    filters: {release_date: {gt: $currentDate}}
    sort: "release_date:asc"
    pagination: {start: 0, limit: 8}
  ) {
    ...productEntity
  }
  showcase: home {
    data {
      attributes {
        comingSoonProducts {
          title
          highlight {
            ...highlight
          }
        }
      }
    }
  }
}
    ${ProductEntityFragmentDoc}
${HighlightFragmentDoc}`;
export type ComingSoonQueryResult = Apollo.QueryResult<ComingSoonQuery, ComingSoonQueryVariables>;
export const CompanyDocument = gql`
    query Company {
  company {
    data {
      attributes {
        name
        email
        phone
        street
        number
        neighborhood
        city
        zipcode
        state
        country
        complement
        logoLight {
          data {
            attributes {
              url
              width
              height
              formats
            }
          }
        }
        logoDark {
          data {
            attributes {
              url
              width
              height
            }
          }
        }
        logoIcon {
          data {
            attributes {
              url
              width
              height
            }
          }
        }
        socialLinks {
          name
          url
        }
      }
    }
  }
}
    `;
export type CompanyQueryResult = Apollo.QueryResult<CompanyQuery, CompanyQueryVariables>;
export const OrdersDocument = gql`
    query Orders($identifier: ID) {
  orders(filters: {users_permissions_user: {id: {eq: $identifier}}}) {
    data {
      id
      attributes {
        card_brand
        card_last4
        createdAt
        products {
          data {
            id
            attributes {
              name
              price
              cover {
                data {
                  attributes {
                    formats
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;
export type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>;
export const PageHomeDocument = gql`
    query PageHome($currentDate: Date!, $pastDate: Date!, $limit: Int!) {
  banners {
    ...banner
  }
  newProducts: products(
    filters: {release_date: {gte: $pastDate, lte: $currentDate}}
    sort: "release_date:desc"
    pagination: {start: 0, limit: $limit}
  ) {
    ...productEntity
  }
  comingSoonProducts: products(
    filters: {release_date: {gt: $currentDate}}
    sort: "release_date:asc"
    pagination: {start: 0, limit: $limit}
  ) {
    ...productEntity
  }
  freeProducts: products(
    filters: {price: {eq: 0}}
    sort: "release_date:desc"
    pagination: {start: 0, limit: $limit}
  ) {
    ...productEntity
  }
  showcases: home {
    data {
      attributes {
        newProducts {
          title
          highlight {
            ...highlight
          }
        }
        popularProducts {
          title
          highlight {
            ...highlight
          }
          products {
            data {
              id
              attributes {
                name
                slug
                price
                promotional_price
                ribbon_label
                developers {
                  data {
                    attributes {
                      name
                    }
                  }
                }
                cover {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
          }
        }
        comingSoonProducts {
          title
          highlight {
            ...highlight
          }
        }
        freeProducts {
          title
          highlight {
            ...highlight
          }
        }
      }
    }
  }
}
    ${BannerFragmentDoc}
${ProductEntityFragmentDoc}
${HighlightFragmentDoc}`;
export type PageHomeQueryResult = Apollo.QueryResult<PageHomeQuery, PageHomeQueryVariables>;
export const PlatformsDocument = gql`
    query Platforms {
  platforms(sort: "name:asc", pagination: {start: 0, limit: 50}) {
    data {
      attributes {
        name
        slug
      }
    }
  }
}
    `;
export type PlatformsQueryResult = Apollo.QueryResult<PlatformsQuery, PlatformsQueryVariables>;
export const ProductBySlugDocument = gql`
    query ProductBySlug($slug: String!) {
  products(filters: {slug: {eq: $slug}}) {
    data {
      id
      attributes {
        cover {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        name
        short_description
        description
        price
        gallery {
          data {
            attributes {
              url
              alternativeText
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
        release_date
        platforms {
          data {
            attributes {
              name
            }
          }
        }
        publisher {
          data {
            attributes {
              name
            }
          }
        }
        rating
        categories {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
    `;
export type ProductBySlugQueryResult = Apollo.QueryResult<ProductBySlugQuery, ProductBySlugQueryVariables>;
export const ProductsDocument = gql`
    query Products($limit: Int, $start: Int, $filters: ProductFiltersInput, $sort: [String]) {
  products(
    pagination: {start: $start, limit: $limit}
    filters: $filters
    sort: $sort
  ) {
    data {
      id
      attributes {
        cover {
          data {
            attributes {
              url
              alternativeText
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
        promotional_price
        ribbon_label
      }
    }
    meta {
      pagination {
        total
      }
    }
  }
}
    `;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ProfileDocument = gql`
    query Profile($identifier: ID) {
  usersPermissionsUser(id: $identifier) {
    data {
      attributes {
        username
        email
      }
    }
  }
}
    `;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const RecommendedProductsDocument = gql`
    query RecommendedProducts {
  recommended {
    data {
      attributes {
        title
        highlight {
          ...highlight
        }
        products {
          ...productRelation
        }
      }
    }
  }
}
    ${HighlightFragmentDoc}
${ProductRelationFragmentDoc}`;
export type RecommendedProductsQueryResult = Apollo.QueryResult<RecommendedProductsQuery, RecommendedProductsQueryVariables>;
export const WishlistDocument = gql`
    query Wishlist($userEmail: StringFilterInput) {
  wishlists(filters: {user: {email: $userEmail}}) {
    data {
      id
      attributes {
        products {
          ...productRelation
        }
      }
    }
  }
}
    ${ProductRelationFragmentDoc}`;
export type WishlistQueryResult = Apollo.QueryResult<WishlistQuery, WishlistQueryVariables>;