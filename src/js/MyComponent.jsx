// sample React component
import React, { Component } from 'react';

function render() {
  return <div className="title"> This title comes from a React Component! </div>;
}
export default class Train extends Component {
//   constructor(props) {
//     super(props);
//   }
  render() {
    return render();
  }
}
