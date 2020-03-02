import { Image } from "mdx-deck"
import React from "react"

const CustomImage = props => (
	<div
		style={{
			width: "100%",
			height: "100%",
			padding: 16,
		}}
	>
		<Image {...props} style={{ backgroundSize: "contain" }} />
	</div>
)

export default CustomImage
