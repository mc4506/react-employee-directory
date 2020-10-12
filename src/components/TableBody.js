import React from 'react';
import EmployeeRow from './EmployeeRow';
import employees from "../employees.json";

class TableBody extends React.Component {
    state = {
        employees: employees
    }
    render() {
        return(
            <tbody>
                {employees.map( employee => 
                    <EmployeeRow 
                        employeeId={employee.id}
                        firstName={employee.firstName}
                        lastName={employee.lastName}
                        title={employee.title}
                        email={employee.email}
                        phoneNumber={employee.phoneNumber}
                    />
                )}
            </tbody>
        )
    }

}

export default TableBody;