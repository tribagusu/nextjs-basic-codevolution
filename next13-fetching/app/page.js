import { Suspense } from "react"
import Companies from "./Companies"
import Users from "./users"

const Page = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Suspense fallback={<div>Loading..</div>}>
          <Users />
        </Suspense>
        <Suspense fallback={<div>Loading..</div>}>
          <Companies />
        </Suspense>
      </div>
    </div>
  )
}

export default Page
