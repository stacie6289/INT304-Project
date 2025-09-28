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
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <EmployeeForm onSubmit={addEmployee} />
            <EmployeeList employees={employees} />
            <button onClick={saveData}>Save Data</button>
          </>
        } />
        <Route path="/employees/:id" element={<EmployeeDetail employees={employees} />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
