import { notFound } from "next/navigation"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import Layout from "@/components/layout"
import { getPostList, getPostContent } from "@/lib/posts"

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await getPostList()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostContent(slug)
  if (!post) return {}
  return { title: `${post.meta.title} — Jeremy Fleming` }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostContent(slug)
  if (!post) notFound()

  return (
    <Layout>
      <article className="mt-16">
        <header className="mb-10 pb-8 border-b border-[#ddd]">
          <h1 className="text-[2rem] font-normal tracking-[-0.01em] leading-tight">
            {post.meta.title}
          </h1>
          <time className="mt-2 block font-mono text-[0.85rem] text-[#666]">
            {post.meta.date}
          </time>
        </header>
        <div className="[&_p]:mb-5 [&_h2]:text-[0.75rem] [&_h2]:font-mono [&_h2]:uppercase [&_h2]:tracking-[0.1em] [&_h2]:text-[#666] [&_h2]:mt-10 [&_h2]:mb-5 [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-5 [&_li]:mb-1 [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:bg-[#f5f5f5] [&_code]:px-1 [&_code]:rounded [&_pre]:font-mono [&_pre]:text-[0.85em] [&_pre]:bg-[#f5f5f5] [&_pre]:p-4 [&_pre]:rounded [&_pre]:overflow-x-auto [&_pre]:mb-5 [&_blockquote]:border-l-2 [&_blockquote]:border-[#ddd] [&_blockquote]:pl-4 [&_blockquote]:text-[#666] [&_blockquote]:mb-5">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex],
              },
            }}
          />
        </div>
      </article>
      <div className="mt-10 pt-6 border-t border-[#ddd]">
        <Link
          href="/"
          className="font-mono text-[0.85rem] text-[#666] no-underline hover:text-[#1a1a1a] hover:opacity-100"
        >
          ← All Posts
        </Link>
      </div>
    </Layout>
  )
}
