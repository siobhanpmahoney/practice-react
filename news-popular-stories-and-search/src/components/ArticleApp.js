import React from 'react';
import ArticleList from './ArticleList';
import Search from './Search'
import Filter from './Filter'
import Sort from './Sort'

const TOPSTORIESAPIURL = `https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=e7d46b3683014c88ade24365a40b3b93`

// searchApiUrl(searchValue) {
//   return `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e7d46b3683014c88ade24365a40b3b93&fq=${searchValue}`
// }
//
// filterApiUrl(filterSelection) {
//   return `https://api.nytimes.com/svc/topstories/v2/${filterSelection}.json?api-key=e7d46b3683014c88ade24365a40b3b93`
// }


class ArticleApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      articleList: [],
      searchValue: "",
      filterSelection: "",
      sortSelection: null,
      favoriteStories: []
    }
  }


  componentDidMount() {
    fetch(TOPSTORIESAPIURL)
    .then(results => results.json())
    .then(json => this.setState({
      articleList: json.results
    }))
  }

  handleSortSelection = (event) => {
    event.preventDefault()
    this.setState({
      sortSelection: event.target.value
    }, this.handleSortRender)
  }

  handleSortRender = () => {
    let sorted = ""
    if (this.state.sortSelection == "title") {
      sorted = this.state.articleList.sort((a,b) => a.title.localeCompare(b.title))
    } else if (this.state.sortSelection=="section") {
      sorted = this.state.articleList.sort((a, b) => a.section.localeCompare(b.section))
    } else {
      sorted = this.state.sortSelection
    }
    this.setState({
      sortSelection: sorted
    })
  }


  render() {
    console.log(this.state.articleList)
    return(
      <div>
        <ArticleList articleList = {this.state.articleList}/>
        <Search />
        <Sort handleSortSelection={this.handleSortSelection}/>
      </div>
    )
  }
}

export default ArticleApp
