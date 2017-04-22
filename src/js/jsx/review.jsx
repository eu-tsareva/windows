import React from 'react';

class Review extends React.Component {
  render() {
    return (
      <div className="review">
        <span className="review-author">{ this.props.author }</span>
        <span className="review-doc">{ this.props.doc }</span>
        <span className="review-date">{ this.props.date }</span>
        <span className="review-rating">{ this.props.rating }</span>
        <p className="review-text">{ this.props.text }</p>

        <a href="#">Прочитать полностью</a>
      </div>
    )
  }
}

export default Review;
