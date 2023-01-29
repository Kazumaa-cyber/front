import React from 'react';
import { connect } from 'react-redux';
import { addAction } from '../store/reducers/counterReducer';

const View = ({ counter, counterVisible, changeNum }) => {
  return (
    <div>
      <h2>Home</h2>
      <h2>当前计数: {counterVisible ? counter : 'xxx'} </h2>
      <button onClick={() => changeNum(1)}>+1</button>
      <button onClick={() => changeNum(-1)}>-1</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('state', state);

  return {
    counter: state.counter.counter,
    counterVisible: state.counter.visible,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // 表示映射到组件props的方法
  changeNum: (adder) => {
    dispatch(addAction(adder));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
export { View as RawView };
