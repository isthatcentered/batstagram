import React, { useEffect, useState } from "react"
import {
  BackendErrors,
  Fake,
  isBackendError,
  Product,
  RemoteState,
  useRemoteState,
  ViewStuff
} from "../unimportant"

interface ViewerId {
  readonly VIEWER_ID: unique symbol
}

interface ProductId {
  readonly PRODUCT_ID: unique symbol
}

type Viewer = {
  id: ViewerId
  email: string
  isInfluencer: boolean
}

const getProductDetails = (
  productId: ProductId,
  viewerId: ViewerId
): Promise<Product | BackendErrors> => Promise.resolve(Fake<Product>({}))

const ProductSingle = (props: { productId: ProductId; viewer: Viewer }) => {
  const [state, setState] = useRemoteState<Product>()

  useEffect(() => {
    getProductDetails(props.productId, props.viewer.id).then(dataOrError =>
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
