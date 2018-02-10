import React from 'react'
import Filter from './Filter.js'
import Sort from './Sort.js'
import ShowList from './ShowList'

class ShowContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showList: [],
      searchVal: "",
      currentFilter: "",
      favShows: []
    }
  }

  componentDidMount() {
    this.fetchShows()
    // fetch("http://api.tvmaze.com/shows")
    // .then(response => response.json())
    // .then(json => this.setState({ showList: json }));
  }

  fetchShows = () => {
    fetch("http://api.tvmaze.com/shows")
    .then(response => response.json())
    .then(
      (res) => {
        this.setState({
          showList: res
        })
      })
    }

    // handleShowSelect = (show) => {
    //   return (
    //     <div>
    //     </div>
    //   )
    // }


  render() {
    return(
      <div>
        <Filter />
        <Sort />
        <ShowList showList={this.state.showList}/>
      </div>
    )
  }
}

export default ShowContainer
