import { useRouter } from "next/router"

const ProductReview = () => {
  const router = useRouter()
  const { productId, reviewId } = router.query

  return (
    <div>
      <h2>
        Product ke {productId} review ke {reviewId}
      </h2>
    </div>
  )
}

export default ProductReview
