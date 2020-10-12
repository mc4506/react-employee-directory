import React from 'react';

class SearchForm extends React.Component {
    
    render() {
        return (
            <form className="container p-4 bg-light">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="search">Select Field</label>
                        <select className="form-control" id="search" 
                            name="search"
                            // onChange={this.handleInputChange}
                            >
                                <option value="---">---</option>
                                <option value="id">Employee Id</option>
                                <option value="firstName">First Name</option>
                                <option value="lastName">Last Name</option>
                                <option value="title">Title</option>
                        </select>
                    </div>
                    <div className="form-group col-md-8">
                        <label htmlFor="query">Enter Search Term</label>
                        <input type="text" className="form-control" id="query"
                            name="query" 
                            // value={this.state.firstName}
                            // onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-primary mx-4">Search</button>
                    <button type="submit" className="btn btn-secondary">Clear Search</button>
                </div>
            </form>
        )
    }
};

export default SearchForm;