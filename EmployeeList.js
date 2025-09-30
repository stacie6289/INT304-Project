import React from "react";
import { Link } from 'react-router-dom';
import '../EmployeeForm.css'; 

function EmployeeList(props) {
  const employees = props.employees || []; // default to empty array

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.EmployeeId}>
            <Link to={`/employees/${employee.EmployeeId}`}>
              {employee.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default EmployeeList;