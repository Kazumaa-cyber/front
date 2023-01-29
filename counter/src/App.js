import { createContext, useState } from 'react';
import './App.css';
import View, { RawView } from './components/view';
import store from './components/store';
import { Provider } from 'react-redux';

const SampleContext = createContext();

const customConnect =
  (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    return (
      <SampleContext.Consumer>
        {(value) => {
          return <WrappedComponent {...mapStateToProps(value)} />;
        }}
      </SampleContext.Consumer>
    );
  };

const Display = ({ value }) => {
  return <div>{JSON.stringify(value)}</div>;
};

const Counter = ({ count, setCount }) => {
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

console.log('store', store);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Provider store={store}>
        <View />
      </Provider>
      <RawView counter={count} changeNum={(adder) => setCount(count + adder)} />
      {/* <SampleContext.Provider value={{ count, setCount }}>
        <SampleContext.Consumer>
          {({ count, setCount }) => {
            return <div>count: {count}</div>;
          }}
        </SampleContext.Consumer>
        <SampleContext.Consumer>
          {({ count, setCount }) => {
            return <Display value={count} />;
          }}
        </SampleContext.Consumer>
        <SampleContext.Consumer>
          {({ count, setCount }) => {
            return <Counter count={count} setCount={setCount} />;
          }}
        </SampleContext.Consumer>
      </SampleContext.Provider>
      <Display value={{ test: 'simplae one' }} /> */}
    </div>
  );
}

export default App;
