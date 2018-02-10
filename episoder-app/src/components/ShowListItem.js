import React from 'react'

class ShowListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      detailsDiv: false
    }
  }


  render() {
    return(
      <div>
        <span className="showListTitle">
          <h4>{this.props.show.name}</h4>
          <div className="topLevelInfo">
            <span>{this.props.show.rating.average}</span>
            {this.props.show.genres.join(" | ")}
          </div>
          <button onClick={this.showDetailsToggle()}>Learn More!</button></span>
          <div id={this.props.key}>
            {this.props.show.summary}
          </div>
      </div>
    )
  }
}

export default ShowListItem
