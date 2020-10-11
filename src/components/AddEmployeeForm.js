// react form to add employee info
// firstName, lastName, email, phoneNumber, position(select from dropdown), department (select from drop down)
// Submit button to use fs to write to employees.json

import React from 'react';
import FormAlertMessage from "./FormAlertMessage";

const validEmail = email => {
    const emailRegex = /^[a-zA-Z\d\-_.]+@[a-zA-Z\d]+\.[a-zA-Z\d]{2,}$/i;
    return (emailRegex.test(email));
}

const validPhoneNumber = phone => {
    const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return (phoneRegex.test(phone));
}

const styles = {
    invalid: {
        color: "red"
    }
}

class AddEmployeeForm extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        // department: "",
        position: "---",
        hasFormError: false,
        invalidEmail: false,
        invalidPhone: false,
        invalidPosition: false
    };

    handleInputChange = event => {
        // console.log(event.target.name);
        const value = event.target.value;
        const name = event.target.name;
    
        this.setState({
          [name]: value
        });

        //format phone numbers
        if(this.state.phoneNumber.length === 3) {
            this.setState( {
                phoneNumber: this.state.phoneNumber + "-"
            })
        }
        if(this.state.phoneNumber.length === 7) {
            this.setState( {
                phoneNumber: this.state.phoneNumber + "-"
            })
        }
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // reset states to false
        this.setState( {
            hasFormError: false,
            invalidEmail: false,
            invalidPhone: false,
            invalidPosition: false
        })

        if(!validEmail(this.state.email)) {
            this.setState( {
                hasFormError: true,
                invalidEmail: true
            });
        };
        if(!validPhoneNumber(this.state.phoneNumber)) {
            this.setState( {
                hasFormError: true,
                invalidPhone: true
            });
        };
        if(this.state.position === '---') {
            this.setState( {
                hasFormError: true,
                invalidPosition: true
            })
        }

    }

    render() {
        return(
            <div>
                <FormAlertMessage hasError={this.state.hasFormError}></FormAlertMessage>
                <form className="container" onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" required
                            name="firstName" 
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" required
                            name="lastName" 
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email <span style={styles.invalid}>{this.state.invalidEmail && "Invalid Email Entry"}</span></label>
                        <input type="email" className="form-control" id="email" required
                            name="email" 
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <small id="emailHelpBlock" className="form-text text-muted">Format: name@domain.com</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number <span style={styles.invalid}>{this.state.invalidPhone && "Invalid Phone Number Entry"}</span></label>
                        <input type="tel" className="form-control" id="phoneNumber" maxLength="12" required
                            name="phoneNumber" 
                            value={this.state.phoneNumber}
                            onChange={this.handleInputChange}
                        />
                        <small id="phoneHelpBlock" className="form-text text-muted">Format: 123-456-7890</small>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <select className="form-control" id="department" 
                            name="department" 
                            onChange={this.handleInputChange}>
                                <option value="---">---</option>
                                <option value="administrative">Administrative</option>
                                <option value="design">Design</option>
                                <option value="engineering">Engineering</option>
                                <option value="human resources">Human Resources</option>
                        </select>
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="position">Position <span style={styles.invalid}>{this.state.invalidPosition && "Select a Valid Position"}</span></label>
                        <select className="form-control" id="position" 
                            name="position"
                            onChange={this.handleInputChange}>
                                <option value="---">---</option>
                                <option value="Engineer">Engineer</option>
                                <option value="Senior Engineer">Senior Engineer</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="Project Director">Project Director</option>
                                <option value="CEO">CEO</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
};

export default AddEmployeeForm;
