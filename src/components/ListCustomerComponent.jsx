
import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';

class ListCustomersComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            customers: []
        }
    }
    
    componentDidMount(){
        CustomerService.getCustomers().then((res) => {
            this.setState({ customers: res.data});
        });
    }

    render() {
        
        return (
            <div>
                <h2 className='text-center'>Customers List</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Customer Contact</th>
                                <th>Customer Address</th>
                                <th>Bill Amount</th>
                                <th>Bill Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customers.map(
                                    customer => 
                                    <tr key = {customer.id}>
                                        <td>{customer.name}</td>
                                        <td>{customer.phone_number}</td>
                                        <td>{customer.address}</td>
                                        <td>{customer.bill_ammount}</td>
                                        <td>{customer.bill_date}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default ListCustomersComponent;
