import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <h3 className="logo"><Link to="/">Home</Link> </h3>
    </nav>
  )
}
export default Navbar