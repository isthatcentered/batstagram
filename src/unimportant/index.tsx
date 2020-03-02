import React, { useState } from "react"

export enum PRODUCT_TAGS {
  ALL = "all",
  ON_SALE = "onsale",
  FAVOURITES = "favourites",
  KANYE = "kanye"
}

export const isValidTag = (tag: string): tag is PRODUCT_TAGS =>
  Object.values(PRODUCT_TAGS).includes(tag as any)

export const useQueryParam = (key: string): string | undefined => {
  return "some-query-param-value"
}

export const useProductTag = (): PRODUCT_TAGS => {
  const tag = useQueryParam("tag")

  if (!tag) return PRODUCT_TAGS.ALL

  if (!isValidTag(tag)) return PRODUCT_TAGS.ALL

  return tag
}

export const ViewStuff = () => <div>Pretend there is something there</div>

export default ViewStuff

export type Product = {
  tags: PRODUCT_TAGS
  name: string
  id: string
}

export const HotInfluencersBanner = () => <ViewStuff />

export type ServerError = {
  status: 500
  message: string
}

export type InvalidTagError = {
  status: 422
  message: string
}

export type BackendErrors = ServerError

export type GetAllProductsForTagsError = BackendErrors | InvalidTagError

export const isErrorResponse = (
  res: Product[] | GetAllProductsForTagsError
): res is GetAllProductsForTagsError => {
  return "status" in res
}

export const isBackendError = <T extends any>(
  res: T | BackendErrors
): res is BackendErrors => {
  return "status" in res
}
export const getAllProductsForTag = async (
  filter: PRODUCT_TAGS
): Promise<Product[] | GetAllProductsForTagsError> => {
  return Promise.resolve([
    // ...products
  ])
}

export const Fake = <T extends any>(nameOrData: string | Partial<T>) =>
  (nameOrData as any) as T

export type RemoteState<T> =
  | {
      type: "error"
      error: string
    }
  | {
      type: "loading"
    }
  | {
      type: "data"
      data: T
    }

export const useRemoteState = <T extends any>() =>
  useState<RemoteState<T>>({ type: "loading" })

type StripValidationError = { status: 400; errors: string[] }
type StripeForbiddenError = { status: 403; message: string }
type StripUnauthorizedErrror = {
  status: 401
  message: string
}

export type StripeError =
  | StripUnauthorizedErrror
  | StripeForbiddenError
  | StripValidationError

export type StripeSuccess = { status: 200; message: string; basket: string[] }

export interface ViewerId {
  readonly VIEWER_ID: unique symbol
}

export interface ProductId {
  readonly PRODUCT_ID: unique symbol
}

export const pass = (): any => null
