import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ViewCustomerComponent(props) {

    const CUSTOMER_API_BASE_URL= "http://localhost:8080/api/v1/customers";
    const idParam = useParams();

    const [customer, setCustomer] = useState({
                id: '',
                name: '',
                phone_number: '',
                address: '',
                bill_ammount: '',
                bill_date: ''
    })
    
    useEffect(() =>{
        let isMounted = true;
        axios.get(CUSTOMER_API_BASE_URL + '/' + idParam.id)
        .then(res =>{
           if(isMounted) setCustomer(res.data)
        })
        return () => { isMounted = false };
    })
    return (
        <div>
            <div className='card col-md-6 offset-md-3'>
                <h3>View Customer Details</h3>
                <div className='card-body'>
                    <div className='row'>
                        <label>Customer Name: {customer.name}</label>
                    </div>

                    <div className='row'>
                        <label>Customer Contact: {customer.phone_number}</label>
                    </div>

                    <div className='row'>
                        <label>Customer Address: {customer.address}</label>
                    </div>

                    <div className='row'>
                        <label>Customer Bill Ammount: {customer.bill_ammount}</label>
                    </div>

                    <div className='row'>
                        <label>Customer Bill Date: {customer.bill_date}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewCustomerComponent;