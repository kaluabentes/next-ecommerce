export default interface ShopifyProduct {
  id: string
  title: string
  handle: string
  descriptionHtml: string
  featuredImage: {
    id: string
    url: string
  }
  images: {
    edges: {
      node: {
        id: string
        url: string
      }
    }[]
  }
  variants: {
    edges: {
      node: {
        sku: string
        title: string
        compareAtPrice: string
        price: string
      }
    }[]
  }
}
