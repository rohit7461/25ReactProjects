import { Link } from "react-router-dom"

function Homepage() {
    return (
        <section style={{ justifyContent: "start", alignItems: "start" }}>
            <h3>Here are some projects made using React.</h3>
            <ul className="links">
                <li><Link className="link" to="/accordion">Accordion</Link></li>
                <li><Link className="link" to="/randomColor">Random Color Generator</Link></li>
                <li><Link className="link" to="/starRating">Star Rating</Link></li>
                <li><Link className="link" to="/imageSlider">Image Slider</Link></li>
                <li><Link className="link" to="/loadmorebutton">Load More Button</Link></li>
                <li><Link className="link" to="/treeViewMenu">Tree View Menu</Link></li>
                <li><Link className="link" to="/qrCodeGenerator">QR Code Generator</Link></li>
                <li><Link className="link" to="/lightDarkMode">Light Dark Mode</Link></li>
                <li><Link className="link" to="/scrollIndicator">Scroll Indicator</Link></li>
            </ul>
        </section>
    )
}
export default Homepage