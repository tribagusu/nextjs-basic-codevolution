import { useRouter } from "next/router"

const ProductDetail = () => {
  const router = useRouter()
  const id = router.query.id

  return (
    <div>
      <h1>{`Product ke ${id}`}</h1>
    </div>
  )
}

export default ProductDetail
