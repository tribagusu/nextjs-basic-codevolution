import { use } from "react"
import Link from "next/link"

async function getPosts() {
  let posts = await fetch("https://dummyjson.com/posts?limit=3")
  return posts.json()
}

const Layout = ({ children }) => {
  let { posts } = use(getPosts())

  return (
    <div>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>

      <div>{children}</div>
    </div>
  )
}

export default Layout
