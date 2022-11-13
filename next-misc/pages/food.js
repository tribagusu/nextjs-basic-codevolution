import Image from "next/image"
import img from "../public/1.jpg"

const FoodPage = () => {
  return (
    <div>
      <Image
        src={img}
        placeholder="blur"
        // blurDataURL=""
        alt="food"
        width="1000"
        height="1000"
      />
      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="food" width="1000" height="1000" />
          </div>
        )
      })}
    </div>
  )
}

export default FoodPage
