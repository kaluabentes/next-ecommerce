import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import Product from "@/models/Product"
import markdownToHtml from "@/utilities/markdown/markdownToHtml"

const postsDirectory = join(process.cwd(), "content", "products")

export function getProductSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
}

export async function getProductBySlug(
  slug: string,
  fields: string[] | "*" = []
): Promise<Product> {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  const htmlContent = await markdownToHtml(content)

  if (fields === "*") {
    return {
      ...data,
      content: htmlContent,
    }
  }

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = htmlContent
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllProducts(fields: string[] | "*" = []): Product[] {
  const slugs = getProductSlugs()
  const products = slugs
    .map((slug) => getProductBySlug(slug, fields))
    .sort((product1, product2) => (product2.name! > product1.name! ? -1 : 1))

  return products
}
