import React from 'react';
import PropTypes from 'prop-types';
import './reddit-search.scss';

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

  handleSliderChange = (event) => {
    const resultsLength = event.target.value;
    console.log('event.target.value', resultsLength);
    this.setState({ resultsLength });
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.searchCallback(this.state.search, this.state.resultsLength);
  }

  render() {
    const searchClasses = this.props.searchResultsList ? 'search-list' : 'search-list search-error';
    console.log('searchClasses', searchClasses);
    return (
      <div className={searchClasses}>
        <form onSubmit={this.handleSearchSubmit}>
          <input 
            type="text"
            onChange={this.handleSearchBoxChange}
            placeholder="Search..."
          />
          <input
            type="range" 
            min="1" 
            max="100" 
            value={this.resultsLength} 
            className="slider"
            onChange={this.handleSliderChange}
          />
          <span className="slider-value">{this.state.resultsLength}</span>
          <div className="results">
            { this.props.searchResultsList 
              ? this.props.searchResultsList.map((r, i) => {
                return (
                    <div key={i}>
                      <div
                        className="search-item"
                        id={i}
                        onClick={ this.props.detailLoader }
                      > 
                        <b>UPS:</b> {r.data.ups} <b>TITLE:</b> {r.data.title}
                      </div>
                    </div>
                );
              })
              : null
            }
          </div>
        </form>
      </div>
    );
  }
}

RedditSearch.propTypes = {
  searchCallback: PropTypes.func,
  searchResultsList: PropTypes.array,
  detailLoader: PropTypes.func,
};
