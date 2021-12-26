import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function ListCustomerComponent(){
    
    const CUSTOMER_API_BASE_URL= "http://localhost:8080/api/v1/customers";
    let idParam = useParams();
    const navigate = useNavigate();
    const [customers, setCustomer] = useState([])

    useEffect(() =>{
        let isMounted = true;
        axios.get(CUSTOMER_API_BASE_URL)
        .then(res =>{
           if(isMounted) setCustomer(res.data)
        })
        return () => { isMounted = false };
    })

    function goToEditCustomer(id){
        navigate(`/update-customer/${id}`);
    }

    function deleteCustomer(id){
        axios.delete(CUSTOMER_API_BASE_URL+ '/' + id);
    }

    function viewCustomer(id){
        navigate(`/view-customer/${id}`);
    }
    return (
        <div>
            <h2 className='text-center'>Customers List</h2>
            <button className="btn btn-primary" onClick={() => {
            navigate('/add-customer')}}
            >Add Customer</button>
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
                            customers.map(
                                customer => 
                                <tr key = {customer.id}>
                                    <td>{customer.name}</td>
                                    <td>{customer.phone_number}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.bill_ammount}</td>
                                    <td>{customer.bill_date}</td>
                                    <td><button className="btn btn-info" onClick={()=>{
                                        goToEditCustomer(customer.id)
                                    }}>Update</button>
                                    <button className="btn btn-danger" style={{marginLeft: '10px'}} onClick={()=>{
                                        deleteCustomer(customer.id) 
                                    }}>Delete</button>
                                    <button className="btn btn-info" style={{marginLeft: '10px'}} onClick={()=>{
                                        viewCustomer(customer.id) 
                                    }}>View</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        )
}

export default ListCustomerComponent;