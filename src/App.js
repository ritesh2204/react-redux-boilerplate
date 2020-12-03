import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { myAction } from "./actionCreator/myAction";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h1>My name is {props.myName}</h1>
      <button onClick={() => props.changeName()}>Change It </button>
    </div>
  );
}

const mapStateToProps = ({ name, wishes }) => {
  return {
    myName: name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => {
      dispatch(myAction());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
