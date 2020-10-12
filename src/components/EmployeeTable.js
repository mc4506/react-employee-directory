// Employee table
import React from 'react';
import TableHeadings from './TableHeadings';
import TableBody from './TableBody';
import EmployeeRow from './EmployeeRow';
import SearchForm from './SearchForm';
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

    filterRecords = (key, value) => {
        this.setState({
            employees: this.state.employees.filter( employee => {
                return (employee[key] === value)
            })
        })
    }

    render() {
        return (
            <div>
                <SearchForm />
                <table className="container table table-striped">
                    <TableHeadings sortAsc={this.sortAsc} sortDesc={this.sortDesc} filterRecords={this.filterRecords}/>
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
            </div>
        )
    }
};

export default EmployeeTable;