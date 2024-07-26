import data from "../../data.json"
import { useState } from "react"

function Accordion() {

  const [selected, setSelected] = useState(null)
  const [multipleSelected, setMultipleSelected] = useState([])
  const [multipleSelection, setMultipleSelection] = useState(false)

  const getIcon = (id) => {
    return isSelected(id) ? "⮛" : "⮙"
  }


  const handleMultipleSelection = () => {
    setMultipleSelection(!multipleSelection)

    setSelected(null)
    setMultipleSelected([])
  }

  const handleSingleSelected = (query) => {
    setSelected(selected === query.id ? null : query.id)
  }

  const handleMultipleSelected = (query) => {
    setMultipleSelected(multipleSelected.includes(query.id)
      ? setMultipleSelected(multipleSelected.filter((item) => item !== query.id))
      : setMultipleSelected([...multipleSelected, query.id])
    )
  }

  const isSelected = (id) => {
    return multipleSelection ? multipleSelected.includes(id) : selected === id
  }

  return (
    <section>
        <div className="faq">
          <h2 style={{ textAlign: "center" }}>FAQ&apos;s</h2>
          <label htmlFor="">
            Enable multiple selection
            <input type="checkbox"
              name="multipleSelection"
              id="multipleSelection"
              onClick={handleMultipleSelection}
              value={multipleSelection} />
          </label>
          {data && data.length > 0
            ? <ul>
              {
                data.map((query) => {
                  return <li key={query.id} className="faquery">
                    <h3 className="question"
                      onClick={
                        multipleSelection
                          ? () => handleMultipleSelected(query)
                          : () => handleSingleSelected(query)
                      }
                    >
                      {query.question}
                      <span className="plus">
                        {getIcon(query.id)}
                      </span>
                    </h3>
                    {
                      isSelected(query.id)
                        ? <p className="answer">{query.answer}</p>
                        : ""
                    }
                  </li>
                })
              }
            </ul>
            : "There is no data available."}
        </div>
    </section>
  )
}
export default Accordion
