import React from 'react'

class ArticleListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: true
    }
  }

  changeVisStatus = () => {
    let vis = !this.state.visibility
    this.setState({
      visible: vis
    }, this.changeVisRender)
  }

  changeVisRender = () => {
    this.state.visible ? {display:'none'} : {}
  }

  render() {
    console.log(this.props.article)
    return(
      <div>
        <li style={this.changeVisRender}>{this.props.article.title}<span>
        <button onClick={this.changeVis}>hide me </button></span></li>
      </div>
    )
  }
}

export default ArticleListItem
