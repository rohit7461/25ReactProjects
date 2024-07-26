import { useState, useEffect } from "react"

function LightDarkMode() {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const handleToggleTheme = () => {

        const newTheme = theme === "light" ? "dark" : "light";

        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    useEffect(() => {
        document.body.className = `${theme}`
    }, [theme])

    return (
        <section className="light-dark-mode">
            <h1>Hello user. You can change the Theme!</h1>
            <button onClick={handleToggleTheme}>Change Theme</button>
        </section>
    )
}
export default LightDarkMode