import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import DismissalChangeForm from "./DismissalChangeForm"
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
  const [search, setSearch] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/students")
    .then(r => r.json())
    .then(studentsArray => {
        setStudents(studentsArray)
    })
},[modifications, transportations]);

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

const filteredStudents = students.filter(student => {
  return student.name.toString().toLowerCase().includes(search.toString().toLowerCase())
});


function handleSearch(newSearch) {
  setSearch(newSearch);
}

  return (
    <div className="App">
      <header className="App-header">
      <h1> Dismissal Made Easy</h1>
      <NavBar handleSearch={handleSearch}/>
      <DismissalChangesContainer modifications={modifications} />
      <DismissalChangeForm addDismissalChange={handleAddDismissalChange} students={students}/>
      <StudentsContainer students={students} filteredStudents={filteredStudents}/>
      <StudentUpdateForm handleStudentProfileUpdate={handleStudentProfileUpdate} students={students} transportations={transportations}/>
      <TransportationContainer transportations={transportations} />

      </header>
      <Switch>
      <Route exact path="/dismissalchanges">
          <DismissalChanges />
        </Route>
        <Route exact path="/dismissalchangeform">
          <DismissalChangeForm />
          </Route>
        <Route exact path="/studentcards">
          <StudentCards />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
