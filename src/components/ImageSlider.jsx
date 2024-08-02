import { useState } from "react"
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import image1 from "../assets/images/jack-bulmer-4_axlytIqFs-unsplash.jpg"
import image2 from "../assets/images/mathew-schwartz-IQY8hsnPpnA-unsplash.jpg"
import image3 from "../assets/images/robert-linder-P3giKAFGoyU-unsplash.jpg"
import image4 from "../assets/images/sammy-wong-96qgwuZuPJs-unsplash.jpg"

function ImageSlider() {

  let [slide, setSlide] = useState(0)
  const images = [image1, image2, image3, image4]

  const handleClick = (imgSlide) => {
    if (imgSlide === "prev") {
      setSlide(slide === 0 ? images.length - 1 : slide - 1)
    }
    else if (imgSlide === "next") {
      setSlide(slide !== images.length - 1 ? slide + 1 : 0)
    }
  }

  return (
    <section>
      <div className="slider">
        <FaCircleArrowLeft className="arrows left-arrow" onClick={() => handleClick("prev")} />
        <FaCircleArrowRight className="arrows right-arrow" onClick={() => handleClick("next")} />
        <div className="dots">
          {
            images.map((_,i) => {
              return <div className={`dot ${i === slide ? "active" : ""}`} key={i}></div>
            })
          }
        </div>
        <img src={images[slide]} alt="" />
      </div>
    </section>
  )
}
export default ImageSlider