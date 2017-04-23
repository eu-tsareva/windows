import React from 'react';

import Review from './review.jsx';

class ReviewBox extends React.Component {
  constructor() {
    super();

    this.state = {
      "reviewList": []
    }
  }

  render() {
    return (
      <div>
        <ul className="list-unstyled">
          { this.state.reviewList.map(review => this._generateReview(review)) }
        </ul>
        <a href="#" className="btn btn-primary">Оставить отзыв</a>
      </div>

    );
  }

  componentWillMount() {
    const reviews = this._fetchData();
    this.setState({reviewList: reviews});
  }

  _fetchData() {
    return [
      { "id": "0",
        "author": "Алена",
        "doc": "09.10.33512.13",
        "date": "13 декабря 2013 года",
        "rating": "5",
        "text": "Поставили нам окна во всей квартире.Все очень понравилось)))компания на 5+.Все очень любезные,гибкая система скидок!!!буду советовать всем!!!Сервис был на высоте,во-первых с поставкой получилось быстрее,во-вторых два раза приезжал замерщик Алексей,ему большое спасибо..."
      }
    ];
  }

  _generateReview(review) {
    return (
      <li key={ review.id }>
        <Review
          author = { review.author }
          doc = { review. doc }
          date = { review.date }
          rating = { review.rating }
          text = { review.text }
        />
      </li>)
  }
}

export default ReviewBox;
