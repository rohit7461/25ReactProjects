import { useState } from "react"

function Tabs() {

    const [currentTab, setCurrentTab] = useState(0)

    const RandomComponent = () => {
        return <h1>This is a random component!</h1>
    }

    const tabItems = [
        {
            title: 'Tab 1',
            content: 'This is the content for Tab 1',
        },
        {
            title: 'Tab 2',
            content: 'This is the content for Tab 2',
        },
        {
            title: 'Tab 3',
            content: <RandomComponent />,
        }
    ]

    const handleTabChange = (tabIndex) => {
        setCurrentTab(tabIndex);
    }

    return (
        <section>
            <div className="tab-container">
                <div className="tabs">
                    {
                        tabItems.map((tabItem, tabIndex) => {
                            return (
                                <div key={tabIndex}
                                    onClick={() => handleTabChange(tabIndex)}
                                    className={`tab ${tabIndex === currentTab ? 'active' : ""}`}>
                                    {tabItem.title}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="tab-contents">
                    {
                        tabItems[currentTab] && tabItems[currentTab].content
                    }
                </div>
            </div>
        </section>
    )
}
export default Tabs