// Employee table
import React from 'react';
import TableHeadings from './TableHeadings';
import TableBody from './TableBody';
import EmployeeRow from './EmployeeRow';
import employees from "../employees.json";


class EmployeeTable extends React.Component {
    state = {
        employees: employees
    }

    sortAsc = (key) => {
        this.setState({
            employees: employees.sort( (a, b) => {
                if(a[key] > b[key]) return 1;
                if(a[key] < b[key]) return -1;
                return 0;
            })
        })
    }
    sortDesc = (key) => {
        this.setState({
            employees: employees.sort( (a, b) => {
                if(b[key] > a[key]) return 1;
                if(b[key] < a[key]) return -1;
                return 0;
            })
        })
    }

    render() {
        return (
            <table className="container table">
                <TableHeadings sortAsc={this.sortAsc} sortDesc={this.sortDesc}></TableHeadings>
                <TableBody>
                {this.state.employees.map( employee => 
                    <EmployeeRow 
                        employeeId={employee.id}
                        firstName={employee.firstName}
                        lastName={employee.lastName}
                        title={employee.title}
                        email={employee.email}
                        phoneNumber={employee.phoneNumber}
                        key={`key${employee.id}`}
                    />
                )}
                </TableBody>
            </table>
        )
    }
};

export default EmployeeTable;