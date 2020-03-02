import React, { useEffect, useState } from "react"
import {
  HotInfluencersBanner,
  Product,
  PRODUCT_TAGS,
  useProductTag,
  ViewStuff
} from "../unimportant"

const getAllProductsForTag = async (
  filter: PRODUCT_TAGS
): Promise<Product[]> => {
  return Promise.resolve([
    // ...products
  ])
}

const ProductsList = (props: {}) => {
  const tag = useProductTag(),
    [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getAllProductsForTag(tag).then(setProducts)
  }, [tag])

  return (
    <div>
      <HotInfluencersBanner />
      <ViewStuff />
    </div>
  )
}

export default ProductsList
