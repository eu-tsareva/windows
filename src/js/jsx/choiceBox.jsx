import React from 'react';

class ChoiceBox extends React.Component {
  constructor() {
    super();

    this.state = {
      "materialList": [],
      "current": 0
    }
  }

  render() {
    return (
      <div className="choice">
        <div className="">Создайте выразительный интерьер с цветными окнами REHAU</div>
        <figure>
          <img src={ this._getCurrent().img } alt={ this._getCurrent().name } />
          <figcaption>{ this._getCurrent().name }</figcaption>
        </figure>
        <ul className="features">
          <li key="1">Точная визуализация натурального дерева.</li>
          <li key="2">Яркие нестандартные цвета в тон или в дополнение интерьера.</li>
          <li key="3">Разные фактуры для Ваших пластиковых окон.</li>
        </ul>
        Подберите цвет для своих окон:
        <ul>
          { this.state.materialList.map(material =>
            <li key= { material.id }><a onClick={ this._setCurrent.bind(this, material.id) }><img src={ material.thumbnail } alt={ material.name } /></a></li>) }
        </ul>
        <p>Больше 50 вариантов  цветов и фактур спрашивайте у наших замерщиков</p>
        <ul>
          <li>цена<br /><a>от { this._getCurrent().price } р/м<sup>2</sup></a></li>
          <li>скидка<br /><a>-70%</a></li>
          <li>действует<a> с 15 по 20</a> февраля</li>
        </ul>
        <button>Рассчитать со скидкой 70%</button>
        <a href="#">или отправить заявку и получить консультацию</a>
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
}

export default ChoiceBox;
