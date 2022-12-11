import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import styles from './App.module.scss';

class App extends React.Component {
  render() {
    return <div>
      <Header />
      <Footer />
      </div>
    ;
  }
}

export default App;
