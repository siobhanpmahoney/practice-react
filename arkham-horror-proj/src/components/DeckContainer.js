import React from 'react'
import MyDeck from './MyDeck'
import DisplayDeck from './DisplayDeck'
import Filter from './Filter'

class DeckContainer extends React.Component {
  constructor(props){
    super(props)

    this.state={
      myDeck: [],
      fullDeck: [],
      displayDeck: [],
      typesChecked: []
    }
  }

  componentDidMount() {
    fetch("https://arkhamdb.com/api/public/cards/")
    .then(response => response.json())
    .then(json => this.setState({
      fullDeck: json,
      displayDeck: json
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
    const allCards = this.state.fullDeck.slice()
    const filterDeck = allCards.filter((c) => {
      return c.real_name.includes(event.target.value)
    })
    if (event.target.value === "") {
      this.setState({
        displayDeck: allCards
      })
    } else {
      this.setState({
        displayDeck: filterDeck
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

  handleCheckBoxChange = (event) => {
    let currentFilters = this.state.typesChecked.slice()
    if (event.target.checked) {
      currentFilters.push(event.target.value)
    } else {
      currentFilters.splice(currentFilters.indexOf(event.target.value), 1)
    }
    this.setState({
      typesChecked: currentFilters
    });
  }

  displayFilteredByType = () => {
    let cardsToDisplay = []

    this.state.fullDeck.forEach((card) => {
      if (this.state.typesChecked.length > 0) {
        if (this.state.typesChecked.includes(card.type_name)) {
          cardsToDisplay.push(card)
        }
      }
      else {
        cardsToDisplay = this.state.displayDeck
      }
    })
    return cardsToDisplay
  }

  render() {
    return(
      <div>
      <p>test dc</p>
      <MyDeck myDeck={this.state.myDeck} />
      <Filter handleFilterName={this.handleFilterName} filterTypes={this.filterTypes()}  handleCheckBoxChange={this.handleCheckBoxChange}/>
      <DisplayDeck displayDeck={this.displayFilteredByType()} filterTypes={this.filterTypes()} />
      </div>
    )
  }
}

export default DeckContainer
