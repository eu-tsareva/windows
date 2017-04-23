import React from 'react';

class ChoiceBox extends React.Component {
  constructor() {
    super();

    this.state = {
      "materialList": [],
      "current": 0,
      "discount": "70%"
    }
  }

  render() {
    return (
      <div className="choice">
        <h2>Создайте выразительный интерьер с цветными окнами REHAU</h2>
        <div className="row">
          <div className="col-md-4">
            <figure>
              <img src={ this._getCurrent().img } alt={ this._getCurrent().name } />
              <figcaption>{ this._getCurrent().name }</figcaption>
            </figure>
          </div>
          <div className="col-md-4">
            <ul className="features">
              <li key="1">Точная визуализация натурального дерева.</li>
              <li key="2">Яркие нестандартные цвета в тон или в дополнение интерьера.</li>
              <li key="3">Разные фактуры для Ваших пластиковых окон.</li>
            </ul>
            Подберите цвет для своих окон:
            <ul className="choice-color-list list-inline">
              { this.state.materialList.map(material =>
                <li key= { material.id }>
                  <a className={ this._isCurrent(material.id) } onClick={ this._setCurrent.bind(this, material.id) }>
                    <img src={ material.thumbnail } alt={ material.name } />
                  </a>
                </li>) }
            </ul>
            <p>Больше 50 вариантов  цветов и фактур спрашивайте у наших замерщиков</p>
            <ul className="list-inline">
              <li>цена<br /><a>от { this._getCurrent().price } р/м<sup>2</sup></a></li>
              <li>скидка<br /><a>-{ this.state.discount }%</a></li>
              <li>действует<a> с 15 по 20</a> февраля</li>
            </ul>
            <a href="#" className="btn btn-primary btn-show-calc">Рассчитать со скидкой { this.state.discount }</a>
            <p><a href="#">или отправить заявку и получить консультацию</a></p>
          </div>
        </div>
      </div>
    );
  }

  componentWillMount() {
    const materials = this._fetchData();
    this.setState({materialList: materials});
  }

  _fetchData() {
    return [
      { "id": "0",
        "name": "Ирландский дуб",
        "thumbnail": "../img/irish-oak.jpg",
        "img": "../img/irish-oak-big.png",
        "price": "4214"
      },
      { "id": "1",
        "name": "Second",
        "thumbnail": "../img/second.jpg",
        "img": "../img/irish-oak-big.png",
        "price": "5346"
      },
      { "id": "2",
        "name": "Third",
        "thumbnail": "../img/third.jpg",
        "img": "../img/irish-oak-big.png",
        "price": "3262"
      }
    ];
  }

  _getCurrent() {
    return this.state.materialList.find(item => item.id == this.state.current);
  }

  _setCurrent(index) {
    this.setState({ current: index});
  }

  _isCurrent(index) {
    return this.state.current == index ? "active" : "";
  }
}

export default ChoiceBox;
