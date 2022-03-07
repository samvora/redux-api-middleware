import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as DataActions from "./actions";

import logo from "./logo.svg";
import "./App.css";

const App = ({ getAllData }) => {
  useEffect(() => {
    const fetchData = async () => {
      console.log("start");
      try {
        const response = await getAllData();
        console.log(response, "response");
      } catch (error) {
        console.log(error, "error");
      }
      console.log("end");
    };
    fetchData();
  }, [getAllData]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
const { getAllData } = DataActions;
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllData,
    },
    dispatch
  );
};
const app = connect(undefined, mapDispatchToProps);
export default app(App);
