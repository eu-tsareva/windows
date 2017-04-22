import React from 'react';

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      listItems: [
        { name: "О компании", link: "/" },
        { name: "Цены", link: "#" },
        { name: "Услуги и продукты", link: "#" },
        { name: "Акции", link: "#" },
        { name: "Контакты", link: "#" }
      ],
      isSelected: 1
    };
  }


  render() {
    return (
      <ul className = "nav navbar-nav">
        {this.state.listItems.map((item, index)=>
          <li key={index}>
            <a href={item.link} onClick={this._selectItem.bind(this,index)} className={this._isSelected(index)}>{item.name}</a>
          </li>)}
      </ul>
    );
  }

  _isSelected(index) {
    if (index == this.state.isSelected) {
      return "active";
    }
  }

  _selectItem(index) {
    this.setState({isSelected: index});
  }

  _currentPage() {
    // const name = location.pathname.split('/').pop();
    // return this.state.listItems.find(item => item.name == name);
  }
}

export default Navigation;
