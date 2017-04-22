import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './nav.jsx';
import ReviewBox from './reviewBox.jsx';
import ChoiceBox from './choiceBox.jsx';

var navs = document.getElementsByClassName('page-nav');
for (var i = 0; i < navs.length; i ++) {
  ReactDOM.render(<Navigation />, navs[i]);
}

ReactDOM.render(<ReviewBox />, document.getElementById('reviews'));
ReactDOM.render(<ChoiceBox />, document.getElementById('choice'));
