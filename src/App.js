import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import AddEmployeeForm from './components/AddEmployeeForm';

// write to employee.json file using async fs 

function App() {
  return (
    <Router>
      <Header></Header>
      <Route exact path="/add-employee" component={AddEmployeeForm} />
    </Router>
  );
}

export default App;
