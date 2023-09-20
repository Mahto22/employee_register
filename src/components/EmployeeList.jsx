import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

function EmployeeList() {
  const [getTableData,setTableData] = useState([]);

  useEffect(()=>{
    fetch('https://sweede.app/DeliveryBoy/Get-Employee/').then((response)=>{
      return response.json()
    }).then(
      (data) => {
         setTableData(data);
         console.log(data);
      }
    )
  },[]);
  
  // date formate
  const formatDate = (date) => {
    return date.split('-').reverse().map((i) => parseInt(i)).join('-')  
  }

  //edit form
 
//delete table
const handleDelete = (id) => {
  fetch(`https://sweede.app/DeliveryBoy/delete-Employee/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      // Update the getTableData state after successfully deleting the employee.
      setTableData((prevData) => prevData.filter((employee) => employee.id !== id));
      console.log('Employee deleted:', data);
      toast.success('Successfully Deleted!', {
        position: 'top-right',
        autoClose: 3000, // Close the notification after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    })
    .catch((error) => {
      console.error('Error deleting employee:', error);
    });
};
  return (
    <div>EmployeeList

    
<Table responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Descriptin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            getTableData.map((emp,i)=>{
              
              return(
                <tr key={i.id}>
                <td>{emp.id}</td>
                  <td>{emp.FirstName}</td>
                  <td>{emp.LastName}</td>
                  <td>{formatDate(emp.DOB)}</td>
                  <td>{formatDate(emp.StartDate)}</td>
                  <td>{formatDate(emp.EndDate)}</td>
                  <td>{emp.Description}</td>
                  <td>
                    <FontAwesomeIcon icon={faEdit} />&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faTrash}  onClick={() => handleDelete(emp.id)} />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default EmployeeList