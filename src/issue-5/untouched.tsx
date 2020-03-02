import React, { useEffect, useState } from "react"
import {
  BackendErrors,
  Fake,
  isBackendError,
  Product,
  RemoteState,
  ViewStuff
} from "../unimportant"

type Viewer = {
  id: string
  email: string
  isInfluencer: boolean
}

const getProductDetails = (
  productId: string,
  viewerId: string
): Promise<Product | BackendErrors> => Promise.resolve(Fake<Product>({}))

type State = RemoteState<Product>

const ProductSingle = (props: { productId: string; viewer: Viewer }) => {
  const [state, setState] = useState<State>({
    type: "loading"
  })

  useEffect(() => {
    getProductDetails(props.viewer.id, props.productId).then(dataOrError =>
      isBackendError(dataOrError)
        ? setState({
            type: "error",
            error: dataOrError.message
          })
        : setState({
            type: "data",
            data: dataOrError
          })
    )
  }, [props.productId])

  return <ViewStuff />
}

export default ProductSingle
