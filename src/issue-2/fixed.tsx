import React, { useEffect, useState } from "react"
import { ViewStuff, useQueryParam } from "../unimportant"

enum PRODUCT_TAGS {
  ALL = "all",
  ON_SALE = "onsale",
  FAVOURITES = "favourites",
  KANYE = "kanye"
}

type Product = {
  tags: PRODUCT_TAGS
  name: string
  id: string
}

const getAllProductsForTag = async (
  filter: PRODUCT_TAGS
): Promise<Product[]> => {
  return Promise.resolve([
    // ...products
  ])
}

const isValidTag = (tag: string): tag is PRODUCT_TAGS =>
  Object.values(PRODUCT_TAGS).includes(tag as any)

const useProductTag = (): PRODUCT_TAGS => {
  const tag = useQueryParam("tag")

  if (!tag) return PRODUCT_TAGS.ALL

  if (!isValidTag(tag)) return PRODUCT_TAGS.ALL
  return tag
}

const ProductsList = (props: {}) => {
  const tag = useProductTag(),
    [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getAllProductsForTag(tag).then(setProducts)
  }, [tag])

  return <ViewStuff />
}

export default ProductsList
