import React, { useEffect, useState } from "react"
import {
  ViewStuff,
  PRODUCT_TAGS,
  useProductTag,
  Product,
  HotInfluencersBanner
} from "../unimportant"

type BackendError = {
  status: number
  message: string
}

const getAllProductsForTag = async (
  filter: PRODUCT_TAGS
): Promise<Product[] | BackendError> => {
  return Promise.resolve([
    // ...products
  ])
}

const ProductsList = (props: {}) => {
  const tag = useProductTag(),
    [products, setProducts] = useState<Product[]>([]),
    [error, setError] = useState<string | undefined>()

  useEffect(() => {
    getAllProductsForTag(tag).then(dataOrError =>
      "status" in dataOrError
        ? setError(dataOrError.message)
        : setProducts(dataOrError)
    )
  }, [tag])

  return (
    <div>
      <HotInfluencersBanner />
      <ViewStuff />
    </div>
  )
}

export default ProductsList
