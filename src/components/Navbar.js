// links to AddEmployee and EmployeeTable
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const [isNavCollapsed, setIsNavCollpased] = useState(true);

    function handleNavCollpase() {
        setIsNavCollpased(!isNavCollapsed)
    }

	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-primary">
			<Link to="/" className="navbar-brand">
				React Employee Directory App
			</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation"
                onClick={handleNavCollpase}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/add-employee" className={location.pathname==="/add-employee" ? "nav-link active" : "nav-link"}>
                        Add Employee
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className={location.pathname==="/" ? "nav-link active" : "nav-link"}>
                        Employee Directory
                    </Link>
                </li>
                </ul>
            </div>
		</nav>
	);
}

export default Navbar;
