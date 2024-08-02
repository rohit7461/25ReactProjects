import { QRCodeSVG } from "qrcode.react"
import { useState } from "react"
// import { FaCross } from "react-icons/fa6"

function QrCodeGenerator() {

    const [textCode, setTextCode] = useState("")
    const [showQR, setShowQR] = useState(false)

    const handleTextCodeChange = (e) => {
        setTextCode(e.target.value)
        setShowQR(false)
    }

    const handleGenerateQRCode = (e) => {
        e.preventDefault();
        textCode != "" && textCode.trim().length > 0
            ? setShowQR(true)
            : setShowQR(false)
    }

    return (
        <section>
            <div className="qrCode">
                <form onSubmit={handleGenerateQRCode}>
                    <input type="text"
                        name="textCode"
                        id="textCode"
                        value={textCode}
                        onChange={handleTextCodeChange}
                        placeholder="Enter text here..."
                    />
                    <button type="submit">Generate QR</button>
                </form>
                {showQR
                    ? <QRCodeSVG value={textCode} />
                    : "Enter some text to generate the QR Code."
                }
            </div>
        </section>
    )
}

export default QrCodeGenerator