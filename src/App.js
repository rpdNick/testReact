import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import Nav from './nav/Nav';

class App extends React.Component {
  render() {
    let nav = this.props.nav;
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <Nav nav={nav}/>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
