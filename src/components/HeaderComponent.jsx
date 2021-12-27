import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className= "navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="http://localhost:3000/" className="navbar-brand">Customer Management System</a>
                        </div>
                        <div>
                            <a href="http://localhost:3000/enquirycustomers" className="navbar-brand text-primary">Enquiry-Customers</a>
                        </div>
                        <div>
                            <a href="http://localhost:3000/customers" className="navbar-brand text-primary">Customers</a>
                        </div>
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;