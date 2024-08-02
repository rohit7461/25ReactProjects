import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./utilities/Navbar"
import Accordion from "./components/Accordion"
import RandomColor from "./components/RandomColor"
import StarRating from "./components/StarRating"
import Homepage from "./pages/Homepage"
import ImageSlider from "./components/ImageSlider"
import LoadMoreButton from "./components/LoadMoreButton"
import TreeViewMenu from "./components/TreeViewMenu/TreeViewMenu"
import QrCodeGenerator from "./components/QrCodeGenerator"
import LightDarkMode from "./components/LightDarkMode"
import ScrollIndicator from "./components/ScrollIndicator"
import Tabs from "./components/Tabs"
import Modal from "./components/Modal/Modal"
import menuData from "./data/menuData"

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
          <Route path="/customTabs" element={<Tabs />} />
          <Route path="/customModal" element={<Modal />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
