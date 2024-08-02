import TreeViewMenuList from "./TreeViewMenuList"
import PropTypes from "prop-types"

function TreeViewMenu({ menus = [] }) {
    return (
        <section>
            <div className="menu">
                <TreeViewMenuList list={menus} />
            </div>
        </section>
    )
}

TreeViewMenu.propTypes = {
    menus: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TreeViewMenu