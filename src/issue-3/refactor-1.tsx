import React from "react"
import { Product, PRODUCT_TAGS, ViewStuff } from "../unimportant"

type ServerError = {
  status: 500
  message: string
}
type InvalidTagError = {
  status: 422
  message: string
}

type GetAllProductsForTagsError = ServerError | InvalidTagError

const getAllProductsForTag = async (
  filter: PRODUCT_TAGS
): Promise<Product[] | GetAllProductsForTagsError> => {
  return Promise.resolve([
    // ...products
  ])
}

const ProductsList = (props: {}) => {
  // ...suff

  return <ViewStuff />
}

export default ProductsList
