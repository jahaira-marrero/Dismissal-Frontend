import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import TransportationForm from "./TransportationForm"
import Search from "./Search"
import StudentsContainer from "./StudentsContainer"
import TransportationContainer from "./TransportationContainer"
import "./App.css";

function App() {
  const [students, setStudents] = useState([])
  const [transportations, setTransportations] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/students")
    .then(r => r.json())
    .then(studentsArray => {
        setStudents(studentsArray)
    })
},[]);

  useEffect(() => {
    fetch("http://localhost:3000/transportations")
     .then(r => r.json())
     .then(transportationsArray => {
        setTransportations(transportationsArray)
  })
},[]);


  return (
    <div className="App">
      <header className="App-header">
      <h1> Dismissal Made Easy</h1>
      <NavBar />
      <StudentsContainer students={students} />
      <TransportationContainer transportations={transportations} />
      </header>
      <Switch>
        <Route exact path="/transportationform">
          <TransportationForm />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/studentscontainer">
          <StudentsContainer />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
