import React, { useEffect, useState } from "react"
import { ViewStuff, useQueryParam } from "../unimportant"

type Product = {
  tags: string
  name: string
  id: string
}

const getAllProductsForTag = async (filter: string): Promise<Product[]> => {
  return Promise.resolve([
    // ...products
  ])
}

const ProductsList = (props: {}) => {
  const tag = useQueryParam("tag"),
    [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getAllProductsForTag(tag || "all").then(setProducts)
  }, [tag])

  return <ViewStuff />
}

export default ProductsList
