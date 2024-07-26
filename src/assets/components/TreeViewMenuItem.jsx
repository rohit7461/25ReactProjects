import { useState } from "react"
import TreeViewMenuList from "./TreeViewMenuList"
import { FaPlus, FaMinus } from "react-icons/fa6"
import PropTypes from "prop-types"

function TreeViewMenuItem({ item }) {

    const [showItem, setShowItem] = useState({})

    const toggleMenuItem = () => {
        setShowItem({ ...showItem, [item.label]: !showItem[item.label] })
    }

    return (
        <div >
            <div className="menu-item">
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length
                        ? <span onClick={toggleMenuItem}>
                            {showItem[item.label] ? <FaMinus /> : <FaPlus />}
                        </span>
                        : ""
                }
            </div>
            {
                item && item.children && item.children.length && showItem[item.label] ? <TreeViewMenuList list={item.children} /> : null
            }
        </div>
    )
}

TreeViewMenuItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default TreeViewMenuItem