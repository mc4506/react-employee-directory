// Employee table headings
import React from 'react';

const styles = {
    span: {
        cursor: "pointer"
    }
}

class TableHeading extends React.Component {
    state ={
        sortOrder: ""
    }

    handleSortAsc = () => {
        this.props.sortAsc("id");
    }
    handleSortDesc = () => {
        this.props.sortDesc("id");
    }


    render() {
        return (
            <thead>
                <tr>
                    <th scope="col">Employee Id 
                        <span style={styles.span} onClick={this.handleSortAsc}>&#9650;</span>
                        <span style={styles.span} onClick={this.handleSortDesc}>&#9660;</span></th>
                    <th scope="col">First Name 
                        <span style={styles.span} onClick={this.handleSortAsc}>&#9650;</span>
                        <span style={styles.span} onClick={this.handleSortDesc}>&#9660;</span></th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Title</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                </tr>
            </thead>
        )
    }
}

export default TableHeading;