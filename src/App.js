import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  return (
    <div>
      <h1>Employee Manager</h1>
      <EmployeeForm addEmployee={addEmployee} />

      <h2>Employee List</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.name} - {emp.email} - {emp.title} - {emp.department}
          </li>
        ))}
      </ul>


    </div>
  );
}

export default App;
