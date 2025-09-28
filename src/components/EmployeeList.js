import React from "react";
import { Link } from 'react-router-dom';
import '../EmployeeForm.css'; 

function EmployeeList(props) { 
  return ( 
    <div className="employee-list"> 
      <h2>Employee List</h2> 
      <ul> 
        {props.employees.map((employee) => ( 
          <li key={employee.EmployeeId}> 
            {/* Create a link to the employee detail page */} 
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