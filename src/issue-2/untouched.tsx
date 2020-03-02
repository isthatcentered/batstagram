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

const ProductsList = (props: {}) => {
  const tag = useQueryParam("tag") as undefined | PRODUCT_TAGS,
    [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getAllProductsForTag(tag || PRODUCT_TAGS.ALL).then(setProducts)
  }, [tag])

  return <ViewStuff />
}

export default ProductsList
