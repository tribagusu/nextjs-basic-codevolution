import Link from "next/link"

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Go to Blog</Link>
      <br />
      <Link href="/product">Go to Products</Link>
    </div>
  )
}

export default Home
