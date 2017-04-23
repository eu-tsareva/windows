import React from 'react';

class Review extends React.Component {
  render() {
    return (
      <div className="review">
        <p className="review-author">{ this.props.author }</p>
        <p className="review-doc">Договор { this.props.doc }</p>
        <p className="review-date">Дата размещения { this.props.date }</p>
        <p className="review-rating">{ this._showStars(this.props.rating) }</p>
        <p className="review-text">{ this.props.text }</p>

        <a href="#">Прочитать полностью</a>
      </div>
    )
  }

  _showStars(rating) {
    return rating;
  }
}

export default Review;
