import Link from "next/link"
import { useRouter } from "next/router"

function Home() {
  const router = useRouter()

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Go to Blog</Link>
      <br />
      <Link href="/product">Go to Products</Link>
      <br />
      <br />
      <button onClick={() => router.push("/product")}>Place Order</button>
    </div>
  )
}

export default Home
