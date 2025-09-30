import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetail from "./components/EmployeeDetail";
import './EmployeeForm.css'; 

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees)); // auto-save
  };

  const saveData = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  const clearData = () => {
    if (window.confirm("Are you sure you want to clear all employees?")) {
      setEmployees([]);
      localStorage.removeItem("employees");
    }
  };

  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="card">
                  <EmployeeForm onSubmit={addEmployee} />
                </div>
                <div className="card">
                  <EmployeeList employees={employees} />
                </div>
                <div className="button-container">
                  <button onClick={clearData} className="btn">Clear All Employees</button>
                </div>
              </>
            }
          />
          <Route
            path="/employees/:id"
            element={
              <div className="card">
                <EmployeeDetail employees={employees} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
