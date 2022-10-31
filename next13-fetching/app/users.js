import { use } from "react"

async function getUsers() {
  let data = await fetch("https://dummyjson.com/posts?limit=3")
  return data.json()
}

const Users = () => {
  let { posts } = use(getUsers())

  return (
    <div style={{ padding: "0 50px 0 0" }}>
      <h2>Users</h2>
      <ul style={{ padding: "0", listStyleType: "none" }}>
        {posts.map((obj) => {
          return <li key={obj.id}>{obj.title}</li>
        })}
      </ul>
    </div>
  )
}

export default Users
