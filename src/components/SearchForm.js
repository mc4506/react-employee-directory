import React from 'react';

const styles = {
    span: {
        color: "red"
    }
}

class SearchForm extends React.Component {

    state = {
        searchField: "---",
        searchTerm: "",
        invalidSearchField: false,
        invalidSearchTerm: false
    }

    handleInputChange = event => {
        // console.log(event.target.name);
        const value = event.target.value;
        const name = event.target.name;
    
        this.setState({
          [name]: value
        });
    };

    handleFilter = (event) => {
        // reset states
        this.setState({
            invalidSearchField: false,
            invalidSearchTerm: false
        });
        event.preventDefault();
        if (this.state.searchField === '---') {
            this.setState({ invalidSearchField: true })
        } else if (this.state.searchTerm === '') {
            this.setState({ invalidSearchTerm: true })
        } else {
            this.props.filterRecords(this.state.searchField, this.state.searchTerm);
        }
    }

    handleShowAll = (event) => {
        event.preventDefault();
        // reset drop down
        const searchFieldEl = document.getElementById("searchField");
        searchFieldEl.selectedIndex = 0;

         // reset all states
         this.setState({
            searchTerm: "",
            invalidSearchField: false,
            invalidSearchTerm: false
        });
        this.props.showAll();
    }
    
    render() {
        return (
            <form className="container p-4 bg-light">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="searchField">Select Field 
                            <span style={styles.span}>
                                {this.state.invalidSearchField === true && ' Select a Search Field'}
                            </span></label>
                        <select className="form-control" id="searchField" 
                            name="searchField"
                            onChange={this.handleInputChange}>
                                <option value="---">---</option>
                                <option value="id">Employee Id</option>
                                <option value="firstName">First Name</option>
                                <option value="lastName">Last Name</option>
                                <option value="title">Title</option>
                        </select>
                    </div>
                    <div className="form-group col-md-8">
                        <label htmlFor="searchTerm">Enter Search Term
                            <span style={styles.span}>
                                {this.state.invalidSearchTerm === true && ' Please enter search term'}
                            </span>
                        </label>
                        <input type="text" className="form-control" id="searchTerm"
                            name="searchTerm" 
                            value={this.state.searchTerm}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-primary mx-4" onClick={this.handleFilter}>Search</button>
                    <button type="submit" className="btn btn-secondary" onClick={this.handleShowAll}>Clear Search</button>
                </div>
            </form>
        )
    }
};

export default SearchForm;