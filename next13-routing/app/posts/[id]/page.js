import { use } from "react"

async function getPost(id) {
  let post = await fetch(`https://dummyjson.com/posts/${id}`)
  return post.json()
}

const Page = ({ params }) => {
  let id = params.id
  let post = use(getPost(id))
  return (
    <div>
      <div>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default Page
