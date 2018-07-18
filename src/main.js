import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';

import RedditSearch from './components/reddit-search/reddit-search';
import RedditDetail from './components/reddit-detail/reddit-detail';
import './style/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResultsList: [],
      // searchResultsLimit: 10,
      selectedItem: {},
      loading: false,
    };
  }

  loadData = (search, limit) => {
    this.setState({ loading: true });
    return superagent.get(`http://www.reddit.com/r/${search}.json?limit=${limit}`)
      .then((data) => {
        this.setState({ loading: false });
        return data.body.data.children;
      })
      .catch(console.error);
  }

  redditSearch = (search, limit) => {
    return this.loadData(search, limit)
      .then((searchResultsList) => {
        this.setState({ searchResultsList });
      })
      .catch(console.error);
  }

  renderDetail = (event) => {
    event.preventDefault();
    console.log('item', event.target.id, 'clicked');
    const selectedItem = this.state.searchResultsList[event.target.id];
    this.setState({ selectedItem });
  }

  render() {
    return (
      <div className="root">
      <h1>Lab 27: Reddit Search</h1>   
      <div className="container">
        <RedditSearch
          searchResultsList={this.state.searchResultsList}
          searchCallback={this.redditSearch}
          detailLoader={this.renderDetail}
        />
        <RedditDetail
          detail={this.state.selectedItem}
        />
      </div>
      </div>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
