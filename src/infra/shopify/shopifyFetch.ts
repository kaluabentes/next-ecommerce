const ENDPOINT = "https://kaluxshop92.myshopify.com/api/2023-04/graphql.json"
const KEY = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!

export default async function shopifyFetch({
  query,
  variables,
}: {
  query: string
  variables: any
}) {
  try {
    const result = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/graphql",
        "X-Shopify-Storefront-Access-Token": KEY,
      },
      body: { query, variables } && JSON.stringify({ query, variables }),
    })

    return {
      status: result.status,
      body: await result.json(),
    }
  } catch (error) {
    console.error("Error:", error)
    return {
      status: 500,
      error: "Error receiving data",
    }
  }
}
