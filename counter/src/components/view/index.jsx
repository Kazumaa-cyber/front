import React from "react";
import { connect } from "react-redux";
import changeNumAction from "../store/changeActionCreator";

const View =(counter,changeNum)=>{
    
    return(
        <div>
             <h2>Home</h2>
        <h2>当前计数: {counter} </h2>
        <button onClick={() => changeNum(1)}>+1</button>
        <button onClick={() => changeNum(-1)}>-1</button>
        </div>
    )

}

const mapStateToProps = (state) => ({
    counter: state.counter
  })

const mapDispatchToProps = (dispatch) => ({
    // 表示映射到组件props的方法
    changeNum:(num)=>{
        dispatch(changeNumAction(num))
    }
  })

export default connect(mapStateToProps,mapDispatchToProps)(View);