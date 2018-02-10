import React from 'react'

const MyDeck = ({myDeck}) => {
  return(
    <div className="myDeckClear" id="myDeckContainer">
      {myDeck.map((c) => {
        return <div className="myDeck">

          <div className="cardName">{c.real_name}</div>
          <span className="faction">{c.faction}</span>
          {c.imagesrc &&
            <img src={"https://arkhamdb.com"+c.imagesrc} alt="" height="100px"/>
          }


        </div>
      })}
    </div>
  )
}

export default MyDeck
