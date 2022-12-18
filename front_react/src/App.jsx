import React, { Fragment } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import styles from './App.module.scss';
import RenderProps from './components/exmaples/RenderProps';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    // this.footerRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: document.title,
      });
    }, 1000);
  }

  render() {
    return (
      <div className={styles.root}>
        <Header />
        <Content />
        <Footer />
        <RenderProps />
        {/* <input
          ref={props.inputRef}
          type="text"
          value={this.state.name}
          onChange={(e) => {
            const plain = e.target.value;
            if (isNaN(plain)) {
              return;
            }
            this.setState({
              name: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            console.log(this, this.state.name);
          }}
        >
          Check
        </button> */}
      </div>
    );
  }
}

export default App;
