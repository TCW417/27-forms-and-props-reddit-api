import React from 'react';
import PropTypes from 'prop-types';

export default class RedditSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      resultsLength: 10,
    };
  }

  handleSearchBoxChange = (event) => {
    const search = event.target.value;
    this.setState({ search });
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.searchCallback(this.state.search);
  }

  render() {
    return (
      <div className="search-list">
        <form onSubmit={this.handleSearchSubmit}>
          <input 
            type="text"
            onChange={this.handleSearchBoxChange}
            placeholder="Search..."
          />
          <ul>
            {
              this.props.searchResults.map((r, i) => <li key={i}>{r}</li>)
            }
          </ul>
        </form>
      </div>
    );
  }
}

RedditSearch.propTypes = {
  searchCallback: PropTypes.func,
  searchResults: PropTypes.array,
};
