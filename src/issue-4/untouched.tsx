import React, { useEffect, useState } from "react"
import {
  getAllProductsForTag,
  isErrorResponse,
  Product,
  useProductTag,
  ViewStuff
} from "../unimportant"

type State = {
  error?: string
  loading: boolean
  products?: Product[]
}

const ProductsList = (props: {}) => {
  const tag = useProductTag(),
    [state, setState] = useState<State>({
      loading: true
    })

  useEffect(() => {
    getAllProductsForTag(tag).then(dataOrError =>
      isErrorResponse(dataOrError)
        ? setState(state => ({ ...state, error: dataOrError.message }))
        : setState(state => ({ ...state, products: dataOrError }))
    )
  }, [tag])

  return <ViewStuff />
}

export default ProductsList
