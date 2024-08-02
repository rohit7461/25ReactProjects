import TreeViewMenuItem from "./TreeViewMenuItem"
import PropTypes from "prop-types"

function TreeViewMenuList({ list }) {

    return (
        <div className="menu-list">
            {
                list && list.length > 0
                    ? list.map((item, i) => <TreeViewMenuItem item={item} key={i} />)
                    : null
            }
        </div>
    )
}

TreeViewMenuList.propTypes = {
    list: PropTypes.array,
}

export default TreeViewMenuList