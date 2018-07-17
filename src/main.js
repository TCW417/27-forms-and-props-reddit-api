import React from 'react';
import ReactDOM from 'react-dom';
import RedditSearch from './components/reddit-search/reddit-search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResultsList: [],
      searchDetailItem: {},
      loading: false,
    };
  }

  redditSearch = (search) => {
    console.log('searching for', search);
  }

  searchResultsList = ['item 1', 'item 2'];

  render() {
    return (
      <React.Fragment>
        <h1>Lab 27: Reddit Search</h1>
        <RedditSearch
          searchResults={this.searchResultsList}
          searchCallback={this.redditSearch}
        />
        {/* <RedditResults
        /> */}
      </React.Fragment>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
