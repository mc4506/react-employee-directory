// Row of employee info
// include button to delete and edit employee
import React from 'react';

function EmployeeRow(props) {
    return (
        <tr>
            <th scope="row">{props.employeeId}</th>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.title}</td>
            <td>{props.email}</td>
            <td>{props.phoneNumber}</td>
        </tr>
    )
};

export default EmployeeRow;