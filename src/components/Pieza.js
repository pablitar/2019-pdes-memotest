import React from 'react';
import './Pieza.css';

export class Pieza extends React.Component {

  containerRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {shown: false}
  }

  toggle(ev) {
    this.setState({...this.state, shown: !this.state.shown})
    this.containerRef.current.style = this.shown?"transform: rotateY(0deg);":"";
  }

  render() {
    const className = this.state.shown?"pieza":"pieza escondida";

    return <div ref={this.containerRef} className={className} onClick={this.toggle.bind(this)}>
      {this.state.shown?this.props.contenido:""}
      </div>
  }
}