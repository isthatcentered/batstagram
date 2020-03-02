import React, { useEffect, useState } from "react"
import {
  getAllProductsForTag,
  isErrorResponse,
  Product,
  useProductTag,
  ViewStuff
} from "../unimportant"

type FailedRequest = {
  type: "error"
  error: string
}

type Loading = {
  type: "loading"
}

type FetchSuccess = {
  type: "data"
  products: Product[]
}

type State = FailedRequest | Loading | FetchSuccess

const ProductsList = (props: {}) => {
  const tag = useProductTag(),
    [state, setState] = useState<State>({
      type: "loading"
    })

  useEffect(() => {
    getAllProductsForTag(tag).then(dataOrError =>
      isErrorResponse(dataOrError)
        ? setState({
            type: "error",
            error: dataOrError.message
          })
        : setState({
            type: "data",
            products: dataOrError
          })
    )
  }, [tag])

  return <ViewStuff />
}

export default ProductsList
