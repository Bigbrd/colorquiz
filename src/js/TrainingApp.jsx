import React, { Component } from 'react';

// function render() {
//   return (
//       <div>
//         <p>test</p>
//         <div className="colorSquare"></div>
//         <div id="colorSwap"></div>
//         <div className="colorSquare"></div>
//         <div className="title"> This title comes from a React Component!</div>
//         <div className="colorSquare"></div>
//         <form id="clickbait-generator">
//           <button className="baitMe" onClick={(e) => this.getBait(e)}>generate some clickbait</button>
//         </form>
//       </div>
//       );
// }
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

export default class TrainingApp extends Component {
  constructor() {
    super();
    this.state = {
      // all the properties that we could want to trigger or change like title/etc.
      color1: '',
      color2: '',
      color3: '',
    };
  }
  componentWillMount() {
    this.setState({
      color1: this.randomColor(),
      color2: this.randomColor(),
      color3: this.randomColor(),
    });
  }
  // setInterval() {
  //   const element = document.getElementById('box');
  //   // generate random red, green and blue intensity
  //   const r = getRandomInt(0, 255);
  //   const g = getRandomInt(0, 255);
  //   const b = getRandomInt(0, 255);
  //   element.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  //   document.getElementById('colorvalue').innerHTML = r + ' ' + g + ' ' + b;
  // }
  getColors(e) {
    if (e) e.preventDefault();
    this.setState({
      color1: this.randomColor(),
      color2: this.randomColor(),
      color3: this.randomColor(),
    });
  }
  randomColor() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  }
  render() {
    // const htmlText = render();
    // // this.setInterval();
    // return htmlText;
    return (
      <div>
        <p>test</p>
        <div className="colorSquare" style={{ backgroundColor: this.state.color1 }}></div>
        <div id="colorSwap"></div>
        <div className="colorSquare" style={{ backgroundColor: this.state.color2 }}></div>
        <div className="title"> This title comes from a React Component!</div>
        <div className="colorSquare" style={{ backgroundColor: this.state.color3 }}></div>
        <form>
          <button className="newColors" onClick={ (e) => this.getColors(e) }>generate new colors</button>
        </form>
      </div>
    );
  }
}

//
// next is to design! im thinking just a group of stuff and a
//  varying amount of divs of different colors
// would be great for me. have a couple of different layouts and picks from them
// i think it's just 4 buttons or N buttons.
