import React, { useEffect } from "react"
import {
  Fake,
  pass,
  Product,
  ProductId,
  StripeError,
  StripeSuccess,
  useRemoteState,
  ViewStuff
} from "../unimportant"
import { Influencer, Viewer, fold } from "./viewer"

const buyProduct = (
  product: ProductId,
  viewer: Influencer
): Promise<StripeError | StripeSuccess> => {
  return Promise.resolve(Fake<StripeSuccess>({}))
}

const ProductSingle = (props: { productId: ProductId; viewer: Viewer }) => {
  const [state, setState] = useRemoteState<Product>()

  const handleBuyProduct = () => {
    fold({
      onRegularJoe: pass,
      onInfluencer: viewer => {
        buyProduct(props.productId, viewer).then(res => {})
      }
    })
  }

  useEffect(() => {
    // get product details
  }, [props.productId])

  return (
    <div>
      {fold({
        onRegularJoe: () => <p>Loosers can't buy exclusive products</p>,
        onInfluencer: () => <button onClick={handleBuyProduct}>Buy me</button>
      })(props.viewer)}
      <ViewStuff />
    </div>
  )
}

export default ProductSingle
