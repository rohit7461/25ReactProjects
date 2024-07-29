import { useState } from "react"
import ModalBox from "./ModalBox"

function Modal() {
    const [showModal, setShowModal] = useState(false)

    const toggleShowModal = () => {
        setShowModal(!showModal)
    }


    return (
        <section>
            {
                showModal && (
                    <ModalBox
                        onClose={toggleShowModal}
                        header={<h1>Modal Header</h1>}
                        body={<p>Modal Body</p>}
                        footer={<p>Modal Footer</p>}
                    />
                )
            }
            <button onClick={toggleShowModal}>Open Modal</button>
        </section>
    )
}
export default Modal