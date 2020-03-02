import React, { useEffect } from "react"
import {
  Fake,
  Product,
  ProductId,
  StripeError,
  StripeSuccess,
  useRemoteState,
  ViewerId,
  ViewStuff
} from "../unimportant"

type Viewer = {
  id: ViewerId
  email: string
  isInfluencer: boolean
  streetCred: number
}

const buyProduct = (
  product: ProductId,
  viewer: Viewer
): Promise<StripeError | StripeSuccess> => {
  if (viewer.isInfluencer && viewer.streetCred > 300) {
    return Promise.resolve(Fake<StripeSuccess>({}))
  }

  return Promise.resolve(Fake<StripeError>({}))
}

const ProductSingle = (props: { productId: ProductId; viewer: Viewer }) => {
  const [state, setState] = useRemoteState<Product>()
  const canBuyProduct =
    props.viewer.isInfluencer && props.viewer.streetCred > 300

  const handleBuyProduct = () => {
    buyProduct(props.productId, props.viewer).then(res => {
      // handle res
    })
  }

  useEffect(() => {
    // get product details
  }, [props.productId])

  return (
    <div>
      {canBuyProduct ? (
        <button onClick={handleBuyProduct}>Buy me</button>
      ) : (
        <p>Loosers can't buy exclusive products</p>
      )}
      <ViewStuff />
    </div>
  )
}

export default ProductSingle
