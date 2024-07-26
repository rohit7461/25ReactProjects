import { useState } from "react"

function RandomColor() {

    const [colorType, setColorType] = useState("hex")
    const [color, setColor] = useState("#aaaaaa")

    const hexCode =
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

    const randomUtility = (limit) => {
        return Math.floor(Math.random() * limit)
    }

    const generateHexColor = () => {
        let hexColor = "#"

        for (let i = 0; i < 6; i++) {
            hexColor += hexCode[randomUtility(hexCode.length)]
        }

        setColor(hexColor);
    }

    const generateRGBColor = () => {

        let rgbColor = `rgb(${randomUtility(255)}, ${randomUtility(255)}, ${randomUtility(255)})`

        setColor(rgbColor);
    }

    const handleChange = (e) => {
        setColorType(e.target.value)
    }

    return (
        <section>
            <div className="color-box"
                style={{ backgroundColor: color }}
            >
                {color}
            </div>
            <label htmlFor="colorType">Hex Color
                <input type="radio"
                    name="colorType"
                    id="colorTypeHex"
                    value="hex"
                    checked={colorType === "hex"}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="colorTypeRGB">RGB Color
                <input type="radio"
                    name="colorType"
                    id="colorTypeRGB"
                    value="rgb"
                    checked={colorType === "rgb"}
                    onChange={handleChange}
                />
            </label>
            <button onClick={() => colorType === "hex"
                ? generateHexColor()
                : generateRGBColor()}
            >Change Color</button>
        </section>
    )
}

export default RandomColor