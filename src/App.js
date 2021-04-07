import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import TransportationForm from "./TransportationForm"
import Search from "./Search"
import StudentsContainer from "./StudentsContainer"
import "./App.css";

function App() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/students")
    .then(r => r.json())
    .then(studentsArray => {
        setStudents(studentsArray)
    })
},[]);


  return (
    <div className="App">
      <header className="App-header">
      <h1> Dismissal Made Easy</h1>
      <NavBar />
      <StudentsContainer students={students} />
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
