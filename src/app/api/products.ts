import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import Product from "@/models/Product"

const postsDirectory = join(process.cwd(), "content", "products")

export function getProductSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
}

export function getProductBySlug(
  slug: string,
  fields: string[] | "*" = []
): Product {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  if (fields === "*") {
    return {
      ...data,
      content,
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
      items[field] = content
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
