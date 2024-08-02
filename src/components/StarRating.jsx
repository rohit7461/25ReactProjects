import { useState } from "react"
import { FaStar, FaRegStar } from "react-icons/fa6"

function StarRating() {

  const [rating, setRating] = useState(1)

  const handleRating = (rating) => {
    setRating(++rating)
  }

  return (
    <section>
      <div className="rating-box">
        {
          Array.from({ length: 10 }, (_, i) => {
            return (
              i < rating
                ? <FaStar key={i} onClick={() => { handleRating(i) }} />
                : <FaRegStar key={i} onClick={() => { handleRating(i) }} />
            )
          })
        }
        <p className="rating-text">Selected Rating : {rating}</p>
      </div>
    </section>
  )
}

export default StarRating