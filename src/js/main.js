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

// DESIGN

// the correct order of things should be this main.js that has a container that holds the topbar and the mainGame
  // the topbar has progress info and acct and done button and anything else
  // mainGame either has a grid of all the sections of pages of games to play (initially just color and profile) on click go to the game
  // or mainGame has large padding of whitespace and info I for directions(that initially is open) and then in the center is a consistent sized gameGrid with varying amount of options
    // in gameGrid we have randomNum() of options and then the specific gameDivs (in this case colorDivs) which can be buttons that regen the random number and rerender
      // each colorDiv has randomColor() or randomAnswer() pulled from DB, etc.  