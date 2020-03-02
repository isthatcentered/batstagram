import opaque from "@isthatcentered/opaque"

interface ProductId {
  readonly PRODUCT_ID: unique symbol
}

// We need something that has a separate identity in the type system
// While keeping the exact same runtime representation (aka productId here is still a string at runtime)
// Two things are isomorphic if you can go losslessly from one another
const isomorphism = opaque<ProductId, string>()

const toString = isomorphism.unwrap

const fromString = isomorphism.wrap
