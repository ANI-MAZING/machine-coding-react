import React, { useState } from 'react'

function Accordion({items}) {

    const [openIndex, setOpenIndex] = useState(null)

    function handleOpen(index) {
        setOpenIndex(openIndex === index ? null : index)
    }

  return (
    <div className='accordion-container'>
      {items.map((item, index) => {
        return(
            <div key={index} className='accordion-item'>
                <button className="header" onClick={() => {handleOpen(index)}}>
                    <h1 className='item-title'>{item.title}</h1>
                    <img className={`${openIndex === index ? "rotate" : ""}`} src="../public/drop-down.svg" alt="" />
                </button>
                {openIndex === index &&                
                 <div>
                    <p className='item-content'>{item.content}</p>
                </div>}
            </div>
        )
      })}
    </div>
  )
}

export default Accordion
