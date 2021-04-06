import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import TransportationForm from "./TransportationForm"
import "./App.css";

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <h1> Dismissal Made Easy</h1>
      <NavBar />
      </header>
      <Switch>
        <Route exact path="/transportationform">
          <TransportationForm />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
