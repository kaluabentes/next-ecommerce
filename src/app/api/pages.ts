import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import Page from "@/models/Page"
import markdownToHtml from "@/utilities/markdown/markdownToHtml"

const postsDirectory = join(process.cwd(), "content", "pages")

export function getPageSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
}

export async function getPageBySlug(
  slug: string,
  fields: string[] | "*" = "*"
): Promise<Page> {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  const htmlContent = await markdownToHtml(content)

  if (fields === "*") {
    return {
      title: data.title,
      slug: data.slug,
      description: data.description,
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

export async function getAllPages(
  fields: string[] | "*" = "*"
): Promise<Page[]> {
  const slugs = getPageSlugs()
  const products = slugs.map(async (slug) => await getPageBySlug(slug, fields))
  const resolvedProducts = await Promise.all(products)

  resolvedProducts.sort((product1: Product, product2: Product) =>
    product2.name! > product1.name! ? -1 : 1
  )

  return resolvedProducts
}
