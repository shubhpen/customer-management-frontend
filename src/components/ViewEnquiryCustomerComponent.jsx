import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ViewEnquirycustomerComponent(props) {

    const ENQUIRY_CUSTOMER_API_BASE_URL= "http://localhost:8080/api/v1/enquirycustomers";
    const idParam = useParams();

    const [enquirycustomer, setEnquirycustomer] = useState({
                id: '',
                name: '',
                phone_number: '',
    })
    
    useEffect(() =>{
        let isMounted = true;
        axios.get(ENQUIRY_CUSTOMER_API_BASE_URL + '/' + idParam.id)
        .then(res =>{
           if(isMounted) setEnquirycustomer(res.data)
        })
        return () => { isMounted = false };
    })
    return (
        <div>
            <div className='card col-md-6 offset-md-3'>
                <h3>View Enquirycustomer Details</h3>
                <div className='card-body'>
                    <div className='row'>
                        <label>Customer Name: {enquirycustomer.name}</label>
                    </div>

                    <div className='row'>
                        <label>Customer Contact: {enquirycustomer.phone_number}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewEnquirycustomerComponent;