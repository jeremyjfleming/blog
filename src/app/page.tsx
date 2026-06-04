import Link from "next/link"
import Layout from "@/components/layout"
import { getPostList } from "@/lib/posts"

export const revalidate = 60

export default async function HomePage() {
  const posts = await getPostList()

  return (
    <Layout>
      <section className="mt-16">
        <h2 className="text-[0.75rem] font-mono uppercase tracking-[0.1em] text-[#666] mb-5">
          Writing
        </h2>
        <ul className="list-none p-0 m-0">
          {posts.map(post => (
            <li
              key={post.slug}
              className="py-5 border-b border-[#ddd] grid grid-cols-[1fr_auto] gap-4 items-baseline first:border-t first:border-[#ddd]"
            >
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-base no-underline"
                >
                  {post.title}
                </Link>
                {post.description && (
                  <p className="text-[0.9rem] text-[#666] mt-[0.2rem]">
                    {post.description}
                  </p>
                )}
              </div>
              <span className="font-mono text-[0.75rem] text-[#666] whitespace-nowrap">
                {post.date}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
