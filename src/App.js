import React, { Component } from 'react';
import './App.css';
import { Tablero } from './components/Tablero';
import { Pieza } from './components/Pieza';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Memotest - PDeS
        </header>
        <section className='content'>
           <Tablero columns={4} rows={3} />
        </section>
      </div>
    );
  }
}

export default App;
