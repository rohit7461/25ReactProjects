import PropTypes from "prop-types"

function ModalBox({ header, footer, body, onClose }) {

    return (
        <div className="modal-box">
            <div className="modal-header">{header || "This is a header."}</div>
            <hr />
            <div className="modal-body">{body || "This is a body. Please press the close button to close this modal."}</div>
            <hr />
            <div className="modal-footer">{footer || "This is a footer."}</div>
            <button onClick={onClose}>Close</button>
        </div>
    )
}

ModalBox.propTypes = {
    header: PropTypes.node,
    footer: PropTypes.node,
    body: PropTypes.node,
    onClose: PropTypes.func,

}

export default ModalBox