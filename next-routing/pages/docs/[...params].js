import { useRouter } from "next/router"

const Doc = () => {
  const router = useRouter()
  const { params = [] } = router.query

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for {params[0]} and {params[1]}
      </h1>
    )
  } else if (params.length === 1) {
    return <h1>Viewing docs number {params[0]}</h1>
  }

  return (
    <div>
      <h2>Docs Home Page</h2>
    </div>
  )
}

export default Doc
