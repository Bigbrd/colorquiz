// entry point of the application
// demo of Reach and ReactDOM here
import React from 'react';
import ReactDOM from 'react-dom';
import TrainingApp from './TrainingApp';
import InfiniteGrid from 'react-infinite-grid';

// load the stylesheet
require('../styles/main.scss');
let items = [];
for (let i = 0; i <= 4; i++) {
  items.push(<TrainingApp />);
}

ReactDOM.render(
  <InfiniteGrid entries={items} />, document.getElementById('main')
    // <TrainingApp />, document.getElementById('main')
);

// function randomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// generate random red, green and blue intensity
// function randomColor() {
//   return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
// }
// $('.colorSquare').each(randomColor());
// const x = document.getElementsByClassName('colorSquare');
// [].forEach.call(x, el => el.style.backgroundColor = randomColor());

// const element = document.getElementById('box');

// const r = getRandomInt(0, 255);
// const g = getRandomInt(0, 255);
// const b = getRandomInt(0, 255);
// element.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// document.getElementById('colorSwap').innerHTML = r + ' ' + g + ' ' + b;
