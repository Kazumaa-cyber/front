import React from 'react';
import styles from './App.module.scss';
import Toggle from './components/Toggle';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

const element = <h1>Hello, {formatName(user)}!</h1>;

function Welcome(props) {
  console.log('props', props);
  return <h1>Hello, {props.name}</h1>;
}

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number}</li>);
  return <ul>{listItems}</ul>;
}

class App extends React.Component {
  render() {
    const myInfo = { name: 'superfree' };
    const Cahal = 'hello';

    return (
      <div className={styles.container}>
        {/* <h1>React App Hello</h1>
        <div>Project build by @youxian/cli</div>
        <div className="red">{element}</div>
        <Welcome name={'Sara'} info={myInfo} />
        <Welcome name="Cahal" other={Cahal} />
        <Welcome name="Edite" /> */}
        <Clock />
        <Toggle />
        <NumberList numbers={[1, 2, 3, 4, 5]} />
      </div>
    );
  }
}

export default App;

// Command K + Command <number>
// Command K + Command J
