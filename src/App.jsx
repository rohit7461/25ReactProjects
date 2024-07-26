import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./assets/utilities/Navbar"
import Accordion from "./assets/components/Accordion"
import RandomColor from "./assets/components/RandomColor"
import StarRating from "./assets/components/StarRating"
import Homepage from "./assets/components/Homepage"
import ImageSlider from "./assets/components/ImageSlider"
import LoadMoreButton from "./assets/components/LoadMoreButton"
import TreeViewMenu from "./assets/components/TreeViewMenu"
import QrCodeGenerator from "./assets/components/QrCodeGenerator"
import LightDarkMode from "./assets/components/LightDarkMode"
import ScrollIndicator from "./assets/components/ScrollIndicator"
import menuData from "./menuData"

function App() {

  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/randomColor" element={<RandomColor />} />
          <Route path="/starRating" element={<StarRating />} />
          <Route path="/imageSlider" element={<ImageSlider />} />
          <Route path="/loadMoreButton" element={<LoadMoreButton />} />
          <Route path="/treeViewMenu" element={<TreeViewMenu menus={menuData} />} />
          <Route path="/qrCodeGenerator" element={<QrCodeGenerator />} />
          <Route path="/lightDarkMode" element={<LightDarkMode />} />
          <Route path="/scrollIndicator" element={<ScrollIndicator />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
