import { useRouter } from "next/router"

const ProductDetail = () => {
  const router = useRouter()
  const productId = router.query.productId

  return (
    <div>
      <h1>{`Product ke ${productId}`}</h1>
    </div>
  )
}

export default ProductDetail
