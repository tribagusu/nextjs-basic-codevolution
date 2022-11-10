import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>Next JS Pre-rendering</h1>
      <Link href="/users">Users</Link>
      <Link href="/posts">Posts</Link>
    </>
  )
}
