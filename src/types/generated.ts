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
};

export type Banner = {
  __typename?: 'Banner';
  button?: Maybe<ComponentPageButton>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  img: UploadFile;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  ribbon?: Maybe<ComponentPageRibbon>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BannerEntityResponseCollection = {
  __typename?: 'BannerEntityResponseCollection';
  nodes: Array<Banner>;
  pageInfo: Pagination;
};

export type BannerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BannerFiltersInput>>>;
  button?: InputMaybe<ComponentPageButtonFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<BannerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BannerFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  ribbon?: InputMaybe<ComponentPageRibbonFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BannerInput = {
  button?: InputMaybe<ComponentPageButtonInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  img?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  ribbon?: InputMaybe<ComponentPageRibbonInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Maybe<Product>>;
  products_connection?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryProducts_ConnectionArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  nodes: Array<Category>;
  pageInfo: Pagination;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  nodes: Array<Category>;
};

export type Company = {
  __typename?: 'Company';
  city: Scalars['String']['output'];
  complement?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  logoDark: UploadFile;
  logoIcon: UploadFile;
  logoLight: UploadFile;
  name: Scalars['String']['output'];
  neighborhood: Scalars['String']['output'];
  number: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  socialLinks?: Maybe<Array<Maybe<ComponentPageSocialLink>>>;
  state: Scalars['String']['output'];
  street: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  zipcode: Scalars['String']['output'];
};


export type CompanySocialLinksArgs = {
  filters?: InputMaybe<ComponentPageSocialLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CompanyInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  complement?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  logoDark?: InputMaybe<Scalars['ID']['input']>;
  logoIcon?: InputMaybe<Scalars['ID']['input']>;
  logoLight?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  socialLinks?: InputMaybe<Array<InputMaybe<ComponentPageSocialLinkInput>>>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPageButton = {
  __typename?: 'ComponentPageButton';
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type ComponentPageButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPageButtonFiltersInput>>>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPageButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPageButtonFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentPageButtonInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPageHighlight = {
  __typename?: 'ComponentPageHighlight';
  alignment?: Maybe<Enum_Componentpagehighlight_Alignment>;
  background: UploadFile;
  buttonLabel: Scalars['String']['output'];
  buttonUrl: Scalars['String']['output'];
  description: Scalars['String']['output'];
  floatImg?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ComponentPageHighlightInput = {
  alignment?: InputMaybe<Enum_Componentpagehighlight_Alignment>;
  background?: InputMaybe<Scalars['ID']['input']>;
  buttonLabel?: InputMaybe<Scalars['String']['input']>;
  buttonUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  floatImg?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPagePopularProducts = {
  __typename?: 'ComponentPagePopularProducts';
  highlight: ComponentPageHighlight;
  id: Scalars['ID']['output'];
  products: Array<Maybe<Product>>;
  products_connection?: Maybe<ProductRelationResponseCollection>;
  title: Scalars['String']['output'];
};


export type ComponentPagePopularProductsProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentPagePopularProductsProducts_ConnectionArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPagePopularProductsInput = {
  highlight?: InputMaybe<ComponentPageHighlightInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPageRibbon = {
  __typename?: 'ComponentPageRibbon';
  color: Enum_Componentpageribbon_Color;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  size: Enum_Componentpageribbon_Size;
};

export type ComponentPageRibbonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPageRibbonFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPageRibbonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPageRibbonFiltersInput>>>;
  size?: InputMaybe<StringFilterInput>;
};

export type ComponentPageRibbonInput = {
  color?: InputMaybe<Enum_Componentpageribbon_Color>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Enum_Componentpageribbon_Size>;
};

export type ComponentPageSection = {
  __typename?: 'ComponentPageSection';
  highlight?: Maybe<ComponentPageHighlight>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ComponentPageSectionInput = {
  highlight?: InputMaybe<ComponentPageHighlightInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPageSocialLink = {
  __typename?: 'ComponentPageSocialLink';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ComponentPageSocialLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPageSocialLinkFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPageSocialLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPageSocialLinkFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentPageSocialLinkInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export type Developer = {
  __typename?: 'Developer';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Maybe<Product>>;
  products_connection?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type DeveloperProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type DeveloperProducts_ConnectionArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DeveloperEntityResponseCollection = {
  __typename?: 'DeveloperEntityResponseCollection';
  nodes: Array<Developer>;
  pageInfo: Pagination;
};

export type DeveloperFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DeveloperFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DeveloperFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DeveloperFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DeveloperInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type DeveloperRelationResponseCollection = {
  __typename?: 'DeveloperRelationResponseCollection';
  nodes: Array<Developer>;
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
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Banner | Category | Company | ComponentPageButton | ComponentPageHighlight | ComponentPagePopularProducts | ComponentPageRibbon | ComponentPageSection | ComponentPageSocialLink | Developer | Home | I18NLocale | Order | Platform | Product | Publisher | Recommended | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Wishlist;

export type Home = {
  __typename?: 'Home';
  comingSoonProducts?: Maybe<ComponentPageSection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  freeProducts?: Maybe<ComponentPageSection>;
  newProducts?: Maybe<ComponentPageSection>;
  popularProducts?: Maybe<ComponentPagePopularProducts>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HomeInput = {
  comingSoonProducts?: InputMaybe<ComponentPageSectionInput>;
  freeProducts?: InputMaybe<ComponentPageSectionInput>;
  newProducts?: InputMaybe<ComponentPageSectionInput>;
  popularProducts?: InputMaybe<ComponentPagePopularProductsInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<I18NLocale>;
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  contains?: InputMaybe<Scalars['Long']['input']>;
  containsi?: InputMaybe<Scalars['Long']['input']>;
  endsWith?: InputMaybe<Scalars['Long']['input']>;
  eq?: InputMaybe<Scalars['Long']['input']>;
  eqi?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  ne?: InputMaybe<Scalars['Long']['input']>;
  nei?: InputMaybe<Scalars['Long']['input']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']['input']>;
  notContainsi?: InputMaybe<Scalars['Long']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  startsWith?: InputMaybe<Scalars['Long']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createBanner?: Maybe<Banner>;
  createCategory?: Maybe<Category>;
  createDeveloper?: Maybe<Developer>;
  createOrder?: Maybe<Order>;
  createPlatform?: Maybe<Platform>;
  createProduct?: Maybe<Product>;
  createPublisher?: Maybe<Publisher>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWishlist?: Maybe<Wishlist>;
  deleteBanner?: Maybe<DeleteMutationResponse>;
  deleteCategory?: Maybe<DeleteMutationResponse>;
  deleteCompany?: Maybe<DeleteMutationResponse>;
  deleteDeveloper?: Maybe<DeleteMutationResponse>;
  deleteHome?: Maybe<DeleteMutationResponse>;
  deleteOrder?: Maybe<DeleteMutationResponse>;
  deletePlatform?: Maybe<DeleteMutationResponse>;
  deleteProduct?: Maybe<DeleteMutationResponse>;
  deletePublisher?: Maybe<DeleteMutationResponse>;
  deleteRecommended?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWishlist?: Maybe<DeleteMutationResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBanner?: Maybe<Banner>;
  updateCategory?: Maybe<Category>;
  updateCompany?: Maybe<Company>;
  updateDeveloper?: Maybe<Developer>;
  updateHome?: Maybe<Home>;
  updateOrder?: Maybe<Order>;
  updatePlatform?: Maybe<Platform>;
  updateProduct?: Maybe<Product>;
  updatePublisher?: Maybe<Publisher>;
  updateRecommended?: Maybe<Recommended>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateUploadFile: UploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWishlist?: Maybe<Wishlist>;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateBannerArgs = {
  data: BannerInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateDeveloperArgs = {
  data: DeveloperInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateOrderArgs = {
  data: OrderInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePlatformArgs = {
  data: PlatformInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePublisherArgs = {
  data: PublisherInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWishlistArgs = {
  data: WishlistInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationDeleteBannerArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteCategoryArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteDeveloperArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteOrderArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePlatformArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePublisherArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWishlistArgs = {
  documentId: Scalars['ID']['input'];
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


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateBannerArgs = {
  data: BannerInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCompanyArgs = {
  data: CompanyInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateDeveloperArgs = {
  data: DeveloperInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateHomeArgs = {
  data: HomeInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateOrderArgs = {
  data: OrderInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePlatformArgs = {
  data: PlatformInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePublisherArgs = {
  data: PublisherInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateRecommendedArgs = {
  data: RecommendedInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
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
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type Order = {
  __typename?: 'Order';
  card_brand?: Maybe<Scalars['String']['output']>;
  card_last4?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  payment_intent_id?: Maybe<Scalars['String']['output']>;
  products: Array<Maybe<Product>>;
  products_connection?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  total_in_cents: Scalars['Long']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users_permissions_user?: Maybe<UsersPermissionsUser>;
};


export type OrderProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type OrderProducts_ConnectionArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OrderEntityResponseCollection = {
  __typename?: 'OrderEntityResponseCollection';
  nodes: Array<Order>;
  pageInfo: Pagination;
};

export type OrderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  card_brand?: InputMaybe<StringFilterInput>;
  card_last4?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<OrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  payment_intent_id?: InputMaybe<StringFilterInput>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  total_in_cents?: InputMaybe<LongFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type OrderInput = {
  card_brand?: InputMaybe<Scalars['String']['input']>;
  card_last4?: InputMaybe<Scalars['String']['input']>;
  payment_intent_id?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  total_in_cents?: InputMaybe<Scalars['Long']['input']>;
  users_permissions_user?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Platform = {
  __typename?: 'Platform';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Maybe<Product>>;
  products_connection?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PlatformProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PlatformProducts_ConnectionArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PlatformEntityResponseCollection = {
  __typename?: 'PlatformEntityResponseCollection';
  nodes: Array<Platform>;
  pageInfo: Pagination;
};

export type PlatformFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PlatformFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PlatformFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PlatformFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PlatformInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PlatformRelationResponseCollection = {
  __typename?: 'PlatformRelationResponseCollection';
  nodes: Array<Platform>;
};

export type Product = {
  __typename?: 'Product';
  categories: Array<Maybe<Category>>;
  categories_connection?: Maybe<CategoryRelationResponseCollection>;
  cover: UploadFile;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  developers: Array<Maybe<Developer>>;
  developers_connection?: Maybe<DeveloperRelationResponseCollection>;
  documentId: Scalars['ID']['output'];
  gallery: Array<Maybe<UploadFile>>;
  gallery_connection?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  platforms: Array<Maybe<Platform>>;
  platforms_connection?: Maybe<PlatformRelationResponseCollection>;
  price?: Maybe<Scalars['Float']['output']>;
  promotional_price?: Maybe<Scalars['Float']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishers: Array<Maybe<Publisher>>;
  publishers_connection?: Maybe<PublisherRelationResponseCollection>;
  rating?: Maybe<Enum_Product_Rating>;
  release_date?: Maybe<Scalars['Date']['output']>;
  ribbon_label?: Maybe<Scalars['String']['output']>;
  short_description: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductDevelopersArgs = {
  filters?: InputMaybe<DeveloperFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductDevelopers_ConnectionArgs = {
  filters?: InputMaybe<DeveloperFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductGallery_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductPlatformsArgs = {
  filters?: InputMaybe<PlatformFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductPlatforms_ConnectionArgs = {
  filters?: InputMaybe<PlatformFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductPublishersArgs = {
  filters?: InputMaybe<PublisherFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductPublishers_ConnectionArgs = {
  filters?: InputMaybe<PublisherFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  nodes: Array<Product>;
  pageInfo: Pagination;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  developers?: InputMaybe<DeveloperFiltersInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  platforms?: InputMaybe<PlatformFiltersInput>;
  price?: InputMaybe<FloatFilterInput>;
  promotional_price?: InputMaybe<FloatFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  publishers?: InputMaybe<PublisherFiltersInput>;
  rating?: InputMaybe<StringFilterInput>;
  release_date?: InputMaybe<DateFilterInput>;
  ribbon_label?: InputMaybe<StringFilterInput>;
  short_description?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cover?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  developers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  platforms?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  promotional_price?: InputMaybe<Scalars['Float']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  rating?: InputMaybe<Enum_Product_Rating>;
  release_date?: InputMaybe<Scalars['Date']['input']>;
  ribbon_label?: InputMaybe<Scalars['String']['input']>;
  short_description?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProductRelationResponseCollection = {
  __typename?: 'ProductRelationResponseCollection';
  nodes: Array<Product>;
};

export enum PublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Publisher = {
  __typename?: 'Publisher';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Maybe<Product>>;
  products_connection?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PublisherProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PublisherProducts_ConnectionArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PublisherEntityResponseCollection = {
  __typename?: 'PublisherEntityResponseCollection';
  nodes: Array<Publisher>;
  pageInfo: Pagination;
};

export type PublisherFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PublisherFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PublisherFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PublisherFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PublisherInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PublisherRelationResponseCollection = {
  __typename?: 'PublisherRelationResponseCollection';
  nodes: Array<Publisher>;
};

export type Query = {
  __typename?: 'Query';
  banner?: Maybe<Banner>;
  banners: Array<Maybe<Banner>>;
  banners_connection?: Maybe<BannerEntityResponseCollection>;
  categories: Array<Maybe<Category>>;
  categories_connection?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<Category>;
  company?: Maybe<Company>;
  developer?: Maybe<Developer>;
  developers: Array<Maybe<Developer>>;
  developers_connection?: Maybe<DeveloperEntityResponseCollection>;
  home?: Maybe<Home>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Array<Maybe<I18NLocale>>;
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  order?: Maybe<Order>;
  orders: Array<Maybe<Order>>;
  orders_connection?: Maybe<OrderEntityResponseCollection>;
  platform?: Maybe<Platform>;
  platforms: Array<Maybe<Platform>>;
  platforms_connection?: Maybe<PlatformEntityResponseCollection>;
  product?: Maybe<Product>;
  products: Array<Maybe<Product>>;
  products_connection?: Maybe<ProductEntityResponseCollection>;
  publisher?: Maybe<Publisher>;
  publishers: Array<Maybe<Publisher>>;
  publishers_connection?: Maybe<PublisherEntityResponseCollection>;
  recommended?: Maybe<Recommended>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Array<Maybe<UploadFile>>;
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  wishlist?: Maybe<Wishlist>;
  wishlists: Array<Maybe<Wishlist>>;
  wishlists_connection?: Maybe<WishlistEntityResponseCollection>;
};


export type QueryBannerArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBannersArgs = {
  filters?: InputMaybe<BannerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBanners_ConnectionArgs = {
  filters?: InputMaybe<BannerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategoryArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCompanyArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryDeveloperArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryDevelopersArgs = {
  filters?: InputMaybe<DeveloperFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryDevelopers_ConnectionArgs = {
  filters?: InputMaybe<DeveloperFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryHomeArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOrderArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOrders_ConnectionArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPlatformArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPlatformsArgs = {
  filters?: InputMaybe<PlatformFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPlatforms_ConnectionArgs = {
  filters?: InputMaybe<PlatformFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProducts_ConnectionArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPublisherArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPublishersArgs = {
  filters?: InputMaybe<PublisherFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPublishers_ConnectionArgs = {
  filters?: InputMaybe<PublisherFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryRecommendedArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryWishlistArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryWishlistsArgs = {
  filters?: InputMaybe<WishlistFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryWishlists_ConnectionArgs = {
  filters?: InputMaybe<WishlistFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type Recommended = {
  __typename?: 'Recommended';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  highlight?: Maybe<ComponentPageHighlight>;
  products: Array<Maybe<Product>>;
  products_connection?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type RecommendedProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type RecommendedProducts_ConnectionArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RecommendedInput = {
  highlight?: InputMaybe<ComponentPageHighlightInput>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflow>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<UploadFile>;
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  nodes: Array<UploadFile>;
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
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<UsersPermissionsPermission>>;
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<UsersPermissionsUser>>;
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<UsersPermissionsRole>;
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<UsersPermissionsUser>;
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<UsersPermissionsUser>;
};

export type Wishlist = {
  __typename?: 'Wishlist';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  products: Array<Maybe<Product>>;
  products_connection?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUser>;
};


export type WishlistProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WishlistProducts_ConnectionArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WishlistEntityResponseCollection = {
  __typename?: 'WishlistEntityResponseCollection';
  nodes: Array<Wishlist>;
  pageInfo: Pagination;
};

export type WishlistFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WishlistFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<WishlistFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WishlistFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type WishlistInput = {
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};

export type BannerFragment = { __typename?: 'Banner', documentId: string, title?: string, description?: string, img: { __typename?: 'UploadFile', url: string, alternativeText?: string }, button?: { __typename?: 'ComponentPageButton', label?: string, url: string }, ribbon?: { __typename?: 'ComponentPageRibbon', label: string, color: Enum_Componentpageribbon_Color, size: Enum_Componentpageribbon_Size } };

export type HighlightFragment = { __typename?: 'ComponentPageHighlight', title: string, description: string, buttonLabel: string, buttonUrl: string, alignment?: Enum_Componentpagehighlight_Alignment, background: { __typename?: 'UploadFile', url: string, alternativeText?: string }, floatImg?: { __typename?: 'UploadFile', url: string, alternativeText?: string } };

export type PopularProductsFragment = { __typename?: 'Product', documentId: string, name: string, slug: string, price?: number, developers: Array<{ __typename?: 'Developer', name: string }>, cover: { __typename?: 'UploadFile', url: string, alternativeText?: string } };

export type ProductEntityFragment = { __typename?: 'Product', documentId: string, name: string, price?: number, slug: string, promotional_price?: number, ribbon_label?: string, cover: { __typename?: 'UploadFile', url: string, alternativeText?: string }, developers: Array<{ __typename?: 'Developer', name: string }> };

export type ProductRelationFragment = { __typename?: 'Product', documentId: string, slug: string, name: string, price?: number, promotional_price?: number, ribbon_label?: string, cover: { __typename?: 'UploadFile', url: string, alternativeText?: string }, developers: Array<{ __typename?: 'Developer', name: string }> };

export type CreateWishlistMutationVariables = Exact<{
  data: WishlistInput;
}>;


export type CreateWishlistMutation = { __typename?: 'Mutation', createWishlist?: { __typename?: 'Wishlist', documentId: string, products: Array<{ __typename?: 'Product', documentId: string, slug: string, name: string, price?: number, promotional_price?: number, ribbon_label?: string, cover: { __typename?: 'UploadFile', url: string, alternativeText?: string }, developers: Array<{ __typename?: 'Developer', name: string }> }> } };

export type RegisterUserMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', register: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string } };

export type UpdateWishlishMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: WishlistInput;
}>;


export type UpdateWishlishMutation = { __typename?: 'Mutation', updateWishlist?: { __typename?: 'Wishlist', documentId: string, user?: { __typename?: 'UsersPermissionsUser', documentId: string, username: string }, products: Array<{ __typename?: 'Product', documentId: string, slug: string, name: string, price?: number, promotional_price?: number, ribbon_label?: string, cover: { __typename?: 'UploadFile', url: string, alternativeText?: string }, developers: Array<{ __typename?: 'Developer', name: string }> }> } };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', name: string, slug: string }> };

export type ComingSoonQueryVariables = Exact<{
  currentDate: Scalars['Date']['input'];
}>;


export type ComingSoonQuery = { __typename?: 'Query', comingSoonProducts: Array<{ __typename?: 'Product', documentId: string, name: string, price?: number, slug: string, promotional_price?: number, ribbon_label?: string, cover: { __typename?: 'UploadFile', url: string, alternativeText?: string }, developers: Array<{ __typename?: 'Developer', name: string }> }>, showcase?: { __typename?: 'Home', comingSoonProducts?: { __typename?: 'ComponentPageSection', title: string, highlight?: { __typename?: 'ComponentPageHighlight', title: string, description: string, buttonLabel: string, buttonUrl: string, alignment?: Enum_Componentpagehighlight_Alignment, background: { __typename?: 'UploadFile', url: string, alternativeText?: string }, floatImg?: { __typename?: 'UploadFile', url: string, alternativeText?: string } } } } };

export type CompanyQueryVariables = Exact<{ [key: string]: never; }>;


export type CompanyQuery = { __typename?: 'Query', company?: { __typename?: 'Company', name: string, email: string, phone: string, street: string, number: string, neighborhood: string, city: string, zipcode: string, state: string, country: string, complement?: string, logoLight: { __typename?: 'UploadFile', url: string, width?: number, height?: number, formats?: any }, logoDark: { __typename?: 'UploadFile', url: string, width?: number, height?: number }, logoIcon: { __typename?: 'UploadFile', url: string, width?: number, height?: number }, socialLinks?: Array<{ __typename?: 'ComponentPageSocialLink', name: string, url: string }> } };

export type OrdersQueryVariables = Exact<{
  userEmail?: InputMaybe<Scalars['String']['input']>;
}>;


export type OrdersQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', documentId: string, card_brand?: string, card_last4?: string, createdAt?: any, products: Array<{ __typename?: 'Product', documentId: string, name: string, price?: number, cover: { __typename?: 'UploadFile', formats?: any } }> }> };

export type PageHomeQueryVariables = Exact<{
  currentDate: Scalars['Date']['input'];
  pastDate: Scalars['Date']['input'];
  limit: Scalars['Int']['input'];
}>;


export type PageHomeQuery = { __typename?: 'Query', banners: Array<{ __typename?: 'Banner', documentId: string, title?: string, description?: string, img: { __typename?: 'UploadFile', url: string, alternativeText?: string }, button?: { __typename?: 'ComponentPageButton', label?: string, url: string }, ribbon?: { __typename?: 'ComponentPageRibbon', label: string, color: Enum_Componentpageribbon_Color, size: Enum_Componentpageribbon_Size } }>, newProducts: Array<{ __typename?: 'Product', documentId: string, name: string, price?: number, slug: string, promotional_price?: number, ribbon_label?: string, cover: { __typename?: 'UploadFile', url: string, alternativeText?: string }, developers: Array<{ __typename?: 'Developer', name: string }> }>, comingSoonProducts: Array<{ __typename?: 'Product', documentId: string, name: string, price?: number, slug: string, promotional_price?: number, ribbon_label?: string, cover: { __typename?: 'UploadFile', url: string, alternativeText?: string }, developers: Array<{ __typename?: 'Developer', name: string }> }>, freeProducts: Array<{ __typename?: 'Product', documentId: string, name: string, price?: number, slug: string, promotional_price?: number, ribbon_label?: string, cover: { __typename?: 'UploadFile', url: string, alternativeText?: string }, developers: Array<{ __typename?: 'Developer', name: string }> }>, showcases?: { __typename?: 'Home', newProducts?: { __typename?: 'ComponentPageSection', title: string, highlight?: { __typename?: 'ComponentPageHighlight', title: string, description: string, buttonLabel: string, buttonUrl: string, alignment?: Enum_Componentpagehighlight_Alignment, background: { __typename?: 'UploadFile', url: string, alternativeText?: string }, floatImg?: { __typename?: 'UploadFile', url: string, alternativeText?: string } } }, popularProducts?: { __typename?: 'ComponentPagePopularProducts', title: string, highlight: { __typename?: 'ComponentPageHighlight', title: string, description: string, buttonLabel: string, buttonUrl: string, alignment?: Enum_Componentpagehighlight_Alignment, background: { __typename?: 'UploadFile', url: string, alternativeText?: string }, floatImg?: { __typename?: 'UploadFile', url: string, alternativeText?: string } }, products: Array<{ __typename?: 'Product', documentId: string, name: string, slug: string, price?: number, promotional_price?: number, ribbon_label?: string, developers: Array<{ __typename?: 'Developer', name: string }>, cover: { __typename?: 'UploadFile', url: string, alternativeText?: string } }> }, comingSoonProducts?: { __typename?: 'ComponentPageSection', title: string, highlight?: { __typename?: 'ComponentPageHighlight', title: string, description: string, buttonLabel: string, buttonUrl: string, alignment?: Enum_Componentpagehighlight_Alignment, background: { __typename?: 'UploadFile', url: string, alternativeText?: string }, floatImg?: { __typename?: 'UploadFile', url: string, alternativeText?: string } } }, freeProducts?: { __typename?: 'ComponentPageSection', title: string, highlight?: { __typename?: 'ComponentPageHighlight', title: string, description: string, buttonLabel: string, buttonUrl: string, alignment?: Enum_Componentpagehighlight_Alignment, background: { __typename?: 'UploadFile', url: string, alternativeText?: string }, floatImg?: { __typename?: 'UploadFile', url: string, alternativeText?: string } } } } };

export type PlatformsQueryVariables = Exact<{ [key: string]: never; }>;


export type PlatformsQuery = { __typename?: 'Query', platforms: Array<{ __typename?: 'Platform', name: string, slug: string }> };

export type ProductBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductBySlugQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', documentId: string, name: string, short_description: string, description: string, price?: number, promotional_price?: number, release_date?: any, rating?: Enum_Product_Rating, cover: { __typename?: 'UploadFile', url: string, alternativeText?: string }, gallery: Array<{ __typename?: 'UploadFile', url: string, alternativeText?: string }>, developers: Array<{ __typename?: 'Developer', name: string }>, platforms: Array<{ __typename?: 'Platform', name: string }>, publishers: Array<{ __typename?: 'Publisher', name: string }>, categories: Array<{ __typename?: 'Category', name: string }> }> };

export type ProductsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  filters?: InputMaybe<ProductFiltersInput>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', documentId: string, name: string, price?: number, slug: string, promotional_price?: number, ribbon_label?: string, cover: { __typename?: 'UploadFile', url: string, alternativeText?: string }, developers: Array<{ __typename?: 'Developer', name: string }> }>, products_connection?: { __typename?: 'ProductEntityResponseCollection', pageInfo: { __typename?: 'Pagination', total: number } } };

export type ProfileQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProfileQuery = { __typename?: 'Query', usersPermissionsUsers: Array<{ __typename?: 'UsersPermissionsUser', email: string, username: string }> };

export type RecommendedProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type RecommendedProductsQuery = { __typename?: 'Query', recommended?: { __typename?: 'Recommended', title: string, highlight?: { __typename?: 'ComponentPageHighlight', title: string, description: string, buttonLabel: string, buttonUrl: string, alignment?: Enum_Componentpagehighlight_Alignment, background: { __typename?: 'UploadFile', url: string, alternativeText?: string }, floatImg?: { __typename?: 'UploadFile', url: string, alternativeText?: string } }, products: Array<{ __typename?: 'Product', documentId: string, slug: string, name: string, price?: number, promotional_price?: number, ribbon_label?: string, cover: { __typename?: 'UploadFile', url: string, alternativeText?: string }, developers: Array<{ __typename?: 'Developer', name: string }> }> } };

export type WishlistQueryVariables = Exact<{
  userEmail?: InputMaybe<StringFilterInput>;
}>;


export type WishlistQuery = { __typename?: 'Query', wishlists: Array<{ __typename?: 'Wishlist', documentId: string, products: Array<{ __typename?: 'Product', documentId: string, slug: string, name: string, price?: number, promotional_price?: number, ribbon_label?: string, cover: { __typename?: 'UploadFile', url: string, alternativeText?: string }, developers: Array<{ __typename?: 'Developer', name: string }> }> }> };

export const BannerFragmentDoc = gql`
    fragment banner on Banner {
  documentId
  img {
    url
    alternativeText
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
    `;
export const HighlightFragmentDoc = gql`
    fragment highlight on ComponentPageHighlight {
  title
  description
  buttonLabel
  buttonUrl
  alignment
  background {
    url
    alternativeText
  }
  floatImg {
    url
    alternativeText
  }
}
    `;
export const PopularProductsFragmentDoc = gql`
    fragment popularProducts on Product {
  documentId
  name
  slug
  price
  developers {
    name
  }
  cover {
    url
    alternativeText
  }
}
    `;
export const ProductEntityFragmentDoc = gql`
    fragment productEntity on Product {
  documentId
  cover {
    url
    alternativeText
  }
  developers {
    name
  }
  name
  price
  slug
  promotional_price
  ribbon_label
}
    `;
export const ProductRelationFragmentDoc = gql`
    fragment productRelation on Product {
  documentId
  slug
  cover {
    url
    alternativeText
  }
  name
  developers {
    name
  }
  price
  promotional_price
  ribbon_label
}
    `;
export const CreateWishlistDocument = gql`
    mutation CreateWishlist($data: WishlistInput!) {
  createWishlist(data: $data) {
    documentId
    products(filters: {publishedAt: {ne: null}}) {
      documentId
      slug
      cover {
        url
        alternativeText
      }
      name
      developers {
        name
      }
      price
      promotional_price
      ribbon_label
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
  updateWishlist(documentId: $id, data: $data) {
    documentId
    user {
      documentId
      username
    }
    products(filters: {publishedAt: {ne: null}}) {
      documentId
      slug
      cover {
        url
        alternativeText
      }
      name
      developers {
        name
      }
      price
      promotional_price
      ribbon_label
    }
  }
}
    `;
export type UpdateWishlishMutationFn = Apollo.MutationFunction<UpdateWishlishMutation, UpdateWishlishMutationVariables>;
export type UpdateWishlishMutationResult = Apollo.MutationResult<UpdateWishlishMutation>;
export type UpdateWishlishMutationOptions = Apollo.BaseMutationOptions<UpdateWishlishMutation, UpdateWishlishMutationVariables>;
export const CategoriesDocument = gql`
    query Categories {
  categories(sort: "name:asc", pagination: {start: 0, limit: 100}) {
    name
    slug
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
    comingSoonProducts {
      title
      highlight {
        ...highlight
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
      url
      width
      height
      formats
    }
    logoDark {
      url
      width
      height
    }
    logoIcon {
      url
      width
      height
    }
    socialLinks {
      name
      url
    }
  }
}
    `;
export type CompanyQueryResult = Apollo.QueryResult<CompanyQuery, CompanyQueryVariables>;
export const OrdersDocument = gql`
    query Orders($userEmail: String) {
  orders(
    filters: {users_permissions_user: {email: {eq: $userEmail}}}
    sort: "createdAt:desc"
  ) {
    documentId
    card_brand
    card_last4
    createdAt
    products(filters: {publishedAt: {ne: null}}) {
      documentId
      name
      price
      cover {
        formats
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
    sort: "createdAt:desc"
    pagination: {start: 0, limit: $limit}
  ) {
    ...productEntity
  }
  showcases: home {
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
        documentId
        name
        slug
        price
        promotional_price
        ribbon_label
        developers {
          name
        }
        cover {
          url
          alternativeText
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
    ${BannerFragmentDoc}
${ProductEntityFragmentDoc}
${HighlightFragmentDoc}`;
export type PageHomeQueryResult = Apollo.QueryResult<PageHomeQuery, PageHomeQueryVariables>;
export const PlatformsDocument = gql`
    query Platforms {
  platforms(sort: "name:asc", pagination: {start: 0, limit: 50}) {
    name
    slug
  }
}
    `;
export type PlatformsQueryResult = Apollo.QueryResult<PlatformsQuery, PlatformsQueryVariables>;
export const ProductBySlugDocument = gql`
    query ProductBySlug($slug: String!) {
  products(filters: {slug: {eq: $slug}}) {
    documentId
    cover {
      url
      alternativeText
    }
    name
    short_description
    description
    price
    promotional_price
    gallery {
      url
      alternativeText
    }
    developers {
      name
    }
    release_date
    platforms {
      name
    }
    publishers {
      name
    }
    rating
    categories {
      name
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
    documentId
    cover {
      url
      alternativeText
    }
    developers {
      name
    }
    name
    price
    slug
    promotional_price
    ribbon_label
  }
  products_connection(filters: $filters) {
    pageInfo {
      total
    }
  }
}
    `;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ProfileDocument = gql`
    query Profile($email: String) {
  usersPermissionsUsers(filters: {email: {eq: $email}}) {
    email
    username
  }
}
    `;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const RecommendedProductsDocument = gql`
    query RecommendedProducts {
  recommended {
    title
    highlight {
      ...highlight
    }
    products {
      ...productRelation
    }
  }
}
    ${HighlightFragmentDoc}
${ProductRelationFragmentDoc}`;
export type RecommendedProductsQueryResult = Apollo.QueryResult<RecommendedProductsQuery, RecommendedProductsQueryVariables>;
export const WishlistDocument = gql`
    query Wishlist($userEmail: StringFilterInput) {
  wishlists(filters: {user: {email: $userEmail}, publishedAt: {ne: null}}) {
    documentId
    products(filters: {publishedAt: {ne: null}}) {
      documentId
      slug
      cover {
        url
        alternativeText
      }
      name
      developers {
        name
      }
      price
      promotional_price
      ribbon_label
    }
  }
}
    `;
export type WishlistQueryResult = Apollo.QueryResult<WishlistQuery, WishlistQueryVariables>;