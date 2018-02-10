import React from 'react'
import MyDeck from './MyDeck'
import FullDeck from './FullDeck'
import Filter from './Filter'

class DeckContainer extends React.Component {
  constructor(props){
    super(props)

    this.state={
      myDeck: [],
      fullDeck: [],
      filteredDeck: []
    }
  }

  componentDidMount() {

    fetch("https://arkhamdb.com/api/public/cards/")
    .then(response => response.json())
    .then(json => this.setState({
      fullDeck: json,
      filteredDeck: json
    }))
  }

  handleAddCard = (card, value) => {

    const totalCount = this.state.myDeck.filter((c) => c.url === card.url).length
    const currentDeck = this.state.myDeck

    if (totalCount > 1) {
      alert("You already added 2 of this one - try selecting another!")
    } else if (totalCount === 1) {
      if (value===1) {
        this.setState({
          myDeck: [...currentDeck, card]
        })
      } else {
        alert("Your stack has one of these already - you can only add 1 more.")
      }
    } else {
      if (value===1) {
        this.setState({
          myDeck: [...currentDeck, card]
        })
      } else {
        if (value===2) {
          this.setState({
            myDeck: [...currentDeck, card, card]
          })
        }
      }
    }
  }

  handleFilterName = (event) => {
    event.preventDefault()
    const allCards = this.state.filteredDeck
    const filteredDeck = allCards.filter((c) => {
      return c.real_name.includes(event.target.value)
    })
    if (event.target.value === "") {
      this.setState({
        fullDeck: allCards
      })
    } else {
      this.setState({
        fullDeck: filteredDeck
      })
    }
  }

  filterTypes = () => {
    let allTypes = this.state.fullDeck.map((card) => card.type_name)
    let uniqTypes = []
    allTypes.forEach((type) => {
      if (!uniqTypes.includes(type)) {
        uniqTypes.push(type)
      }
    })
    return uniqTypes
  }

  handleFilterTypeSelection = (event) => {
    event.preventDefault()

  }

  render() {
    return(
      <div>
      <p>test dc</p>
      <MyDeck myDeck={this.state.myDeck} />
      <Filter handleFilterName={this.handleFilterName} filterTypes={this.filterTypes} handleFilterTypeSelection={this.handleFilterTypeSelection}/>
      <FullDeck fullDeck={this.state.fullDeck} filterTypes={this.filterTypes()}/>
      </div>
    )
  }
}

export default DeckContainer
