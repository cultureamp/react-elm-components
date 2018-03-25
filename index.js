import React, { Component } from 'react';

export default class ElmComponent extends Component {
  constructor(props) {
    super(props);
    this.initialize = this.initialize.bind(this);
  }

  initialize(el) {
    const { src, flags, ports } = this.props;
    const app = src.embed(el, flags);
    if(typeof ports === 'function') {
      ports(app.ports);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (<div ref={this.initialize}/>);
  }
}
