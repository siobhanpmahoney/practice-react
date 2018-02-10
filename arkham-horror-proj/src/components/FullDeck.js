import React from 'react'
import Card from './Card'

const FullDeck = ({fullDeck, handleAddCard}) => {

  return(
      <div className="myDeckClear">
        <h2>Checkout the Full Deck</h2>
        <table className="allCards" align="center">
          <thead>
            <tr>
          <th className="quantity"><h6>Quantity</h6></th>
          <th className="cardName"><h6>Name</h6></th>
          <th className="cardType"><h6>Type</h6></th>
          <th className="cardClass"><h6>Class</h6></th>
          </tr>
          </thead>
          <tbody>


        {fullDeck.map((c) => {
          return <Card card={c} key={c.url} handleAddCard={handleAddCard}/>
        })}
        </tbody>
        </table>
      </div>
  )
}

export default FullDeck
