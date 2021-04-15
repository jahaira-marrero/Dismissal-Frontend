import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import DismissalChangeForm from "./DismissalChangeForm"
import StudentsContainer from "./StudentsContainer";
import TransportationContainer from "./TransportationContainer";
import DismissalChangesContainer from "./DismissalChangesContainer";
import StudentUpdateForm from "./StudentUpdateForm";
import Login from "./Login";
import MyProfile from "./MyProfile";
import "./App.css";

function App() {
  const [students, setStudents] = useState([])
  const [transportations, setTransportations] = useState([])
  const [modifications, setModifications] = useState([])
  const [search, setSearch] = useState([])
  const [signedIn, setSignedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState([])

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

function changeLogin(userInfo) {
  setSignedIn(!signedIn)
  setCurrentUser(userInfo)
}

function handleAddDismissalChange(newDismissalChange) {
  const newDismissalChanges = [...modifications, newDismissalChange];
  setModifications(newDismissalChanges)
}

function handleStudentUpdateForm(updatedStudentInfo) {
  const updatedStudentProfile = students.filter((student) => student.id !== updatedStudentInfo.id)
  const answer = [...updatedStudentProfile, updatedStudentInfo]
  const updatedTransportation = transportations.filter((transportation) => transportation.id !== updatedStudentInfo.transportation.id)
  const transAnswer = [...updatedTransportation, updatedStudentInfo.transportation]
  setStudents(answer)
  setTransportations(transAnswer)

}

const filteredStudents = students.filter(student => {
  return student.name.toString().toLowerCase().includes(search.toString().toLowerCase())
});

const filteredModifications = students.filter((student) => student.modifications.length >0)

function handleDeleteDismissalChange(id) {
  const deleteDismissalChange = modifications.filter(
    (modification) => modification.id !== id);
    setModifications(deleteDismissalChange)
}

function handleSearch(newSearch) {
  setSearch(newSearch);
}

  return (
    <div className="App">
      <header className="App-header">
      <h1> Dismissal Made Easy</h1>
      Welcome {currentUser.name}
      <NavBar handleSearch={handleSearch} signedIn={signedIn} changeLogin={changeLogin}/>
      </header>
      <Route exact path="/myprofile/:id">
          <MyProfile user={currentUser} setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/dismissalchangeform">
          <DismissalChangeForm currentUser={currentUser} addDismissalChange={handleAddDismissalChange} students={students}/>
      </Route>
        <DismissalChangesContainer filteredModifications={filteredModifications} handleDeleteDismissalChange={handleDeleteDismissalChange} />
      <Switch>
      
        <Route exact path="/studentupdateform">
          <StudentUpdateForm handleStudentUpdateForm={handleStudentUpdateForm} students={students} transportations={transportations}/>
        </Route>
        <Route exact path="/students">
          <StudentsContainer students={students} filteredStudents={filteredStudents} handleStudentUpdateForm={handleStudentUpdateForm} transportations={transportations} />
        </Route>
        <Route exact path="/transportations">
          <TransportationContainer transportations={transportations} />
        </Route>
        <Route exact path="/login">
          <Login changeLogin={changeLogin} />
        </Route>
       
      </Switch>
    </div>
  );
}

export default App;
