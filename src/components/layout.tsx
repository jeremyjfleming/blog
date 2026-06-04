import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen px-6">
      <header className="max-w-[750px] mx-auto mt-16 pb-8 border-b border-[#ddd]">
        <Link href="/" className="no-underline">
          <h1 className="text-[2rem] font-normal tracking-[-0.01em]">Jeremy Fleming</h1>
        </Link>
        <p className="mt-[0.4rem] text-[#666] text-[0.95rem] font-mono">
          I blog about tech, theology, politics, and anything else that catches my attention. Hope you find something interesting!
        </p>
      </header>
      <nav className="max-w-[750px] mx-auto mt-5 font-mono text-[0.85rem]">
        <Link
          href="/"
          className="mr-6 no-underline text-[#666] hover:text-[#1a1a1a] hover:opacity-100"
        >
          All Posts
        </Link>
      </nav>
      <main className="max-w-[750px] mx-auto">
        {children}
      </main>
      <footer className="max-w-[750px] mx-auto mt-20 mb-12 pt-8 border-t border-[#ddd] font-mono text-[0.75rem] text-[#666] flex justify-between">
        <span>Jeremy Fleming</span>
        <span>jeremyflem.ing</span>
      </footer>
    </div>
  )
}
