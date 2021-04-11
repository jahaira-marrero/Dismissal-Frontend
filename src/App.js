import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import DismissalChangeForm from "./DismissalChangeForm"
import Search from "./Search";
import StudentsContainer from "./StudentsContainer";
import TransportationContainer from "./TransportationContainer";
import DismissalChangesContainer from "./DismissalChangesContainer";
import StudentCards from "./StudentCards";
import DismissalChanges from "./DismissalChanges";
import StudentUpdateForm from "./StudentUpdateForm"
import "./App.css";

function App() {
  const [students, setStudents] = useState([])
  const [transportations, setTransportations] = useState([])
  const [modifications, setModifications] = useState([])

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

useEffect(() => {
  fetch("http://localhost:3000/modifications")
   .then(r => r.json())
   .then(changesArray => {
      setModifications(changesArray)
})
},[]);

function handleAddDismissalChange(newDismissalChange) {
  const newDismissalChanges = [...modifications, newDismissalChange];
  setModifications(newDismissalChanges)
}

function handleStudentProfileUpdate(updatedStudentInfo) {
  const updatedStudentProfile = students.filter((student) => student.id !== updatedStudentInfo.id)
  const answer = [...updatedStudentProfile, updatedStudentInfo]
  setStudents(answer)

}

  return (
    <div className="App">
      <header className="App-header">
      <h1> Dismissal Made Easy</h1>
      <NavBar />
      <DismissalChangesContainer modifications={modifications} />
      <DismissalChangeForm addDismissalChange={handleAddDismissalChange} students={students}/>
      <StudentsContainer students={students} />
      <StudentUpdateForm handleStudentProfileUpdate={handleStudentProfileUpdate} students={students}/>
      <TransportationContainer transportations={transportations} />

      </header>
      <Switch>
      <Route exact path="/dismissalchanges">
          <DismissalChanges />
        </Route>
        <Route exact path="/dismissalchangeform">
          <DismissalChangeForm />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/studentcards">
          <StudentCards />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
