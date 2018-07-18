import React from 'react';
import PropTypes from 'prop-types';
import './reddit-detail.scss';

export default class RedditDetail extends React.Component {
  render() {
    console.log('RedditDetail', this.props.detail.data);
    return (
      <div className="detail">
        { this.props.detail.data
          ? <img src={this.props.detail.data.url} />
          : null
        }
        { this.props.detail.data
          ? <div>{this.props.detail.data.selftext}</div>
          : null
        }
      </div>
    );
  }
}

RedditDetail.propTypes = {
  detail: PropTypes.object,
};
