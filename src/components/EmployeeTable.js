// Employee table
import React from 'react';
import TableHeadings from './TableHeadings';
import TableBody from './TableBody';

function EmployeeTable () {
    return (
        <table className="container table">
            <TableHeadings></TableHeadings>
            <TableBody></TableBody>
        </table>
    )
};

export default EmployeeTable;