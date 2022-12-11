import React, { Fragment } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import styles from './App.module.scss';

class App extends React.Component {
  render() {
    return (
      // <Fragment>
      // </Fragment>
      <div className={styles.root}>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
