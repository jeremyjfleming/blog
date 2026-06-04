import matter from "gray-matter"

const BASE_URL = "https://files.jeremyflem.ing/blog"

export type PostMeta = {
  slug: string
  title: string
  date: string
  description?: string
}

export async function getPostList(): Promise<PostMeta[]> {
  const res = await fetch(`${BASE_URL}/index.json`, {
    next: { revalidate: 60 },
  })
  if (!res.ok) return []
  return res.json()
}

export async function getPostContent(
  slug: string
): Promise<{ content: string; meta: PostMeta } | null> {
  const res = await fetch(`${BASE_URL}/${slug}.md`, {
    next: { revalidate: 60 },
  })
  if (!res.ok) return null
  const raw = await res.text()
  const { content, data } = matter(raw)
  return {
    content,
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description,
    },
  }
}
