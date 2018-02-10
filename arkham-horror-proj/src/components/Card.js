import React from 'react'

class Card extends React.Component {

  addOneCard = () => {
    this.props.handleAddCard(this.props.card, 1)
  }

  addTwoCards = () => {
    this.props.handleAddCard(this.props.card, 2)
  }



  render() {


    return (
    <tr>
    <td>
      <button onClick={this.addOneCard}>1</button>
      <button onClick={this.addTwoCards}>2</button></td>
    <td>{this.props.card.name}</td>
    <td>{this.props.card.type_name}</td>
    <td>{this.props.card.faction_name}</td>
    </tr>

  )}
}

export default Card
