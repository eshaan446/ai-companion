import React from 'react'




const OptionSelection = ({ arrayItems, selectOption }) => {
  return (
    <>
      <div className='options'>
        <h1 className='heading'>Your AI Companion<span className='auto-type'></span></h1>
        <div className='grid-main'>
          {arrayItems.map((item, key) => {
            return <>

              <div className='grid-child' onClick={() => { selectOption(item.option) }}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
            </>
          })}
        </div>
      </div>
    </>
  )
}

export default OptionSelection