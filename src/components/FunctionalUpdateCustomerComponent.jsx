import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function FunctionalUpdateCustomerComponent() {

    const idParam = useParams();
    const CUSTOMER_API_BASE_URL= "http://localhost:8080/api/v1/customers";
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({
                id: idParam.id,
                name: '',
                contact: '',
                address: '',
                bill_ammount: '',
                bill_date: ''
    });

    function changeHandler(event){
        const newcustomer = {...customer}
        newcustomer[event.target.id] = event.target.value
        setCustomer(newcustomer)
        console.log(newcustomer);
    }

    function updateCustomer(){
        
        axios.put(CUSTOMER_API_BASE_URL + '/' + idParam.id,{
            name: customer.name,
            contact: customer.contact,
            address: customer.address,
            bill_ammount: customer.bill_ammount,
            bill_date: customer.bill_date
        }).then(res=>{
            window.alert('Success')
            navigate('/customers')
        })
        
    }

    return (
        <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Update Customer</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group' name= 'contact-form'>
                                        <lable>Name: </lable>
                                        <input placeholder='Name' id='name' className='form-control'
                                          value={customer.name}   onChange={(e)=>{changeHandler(e)}}/>
                                    </div>
                                    
                                    <div className='form-group'>    
                                        <lable>Contact: </lable>
                                        <input placeholder='Contact' id='contact' className='form-control'
                                          value={customer.contact}   onChange={(e)=>{changeHandler(e)}}/>
                                    </div>
                                    <div className='form-group'>
                                        <lable>Address: </lable>
                                        <input placeholder='Address' id='address' className='form-control'
                                          value={customer.address}   onChange={(e)=>{changeHandler(e)}}/>
                                    </div>
                                    <div className='form-group'>
                                        <lable>Bill Ammount: </lable>
                                        <input placeholder='Ammount' id='bill_ammount' className='form-control'
                                          value={customer.bill_ammount}   onChange={(e)=>{changeHandler(e)}}/>
                                    </div>
                                    <div className='form-group'>
                                        <lable>Bill Date: </lable>
                                        <input placeholder='yyyy-mm-dd' id='bill_date' className='form-control'
                                          value={customer.bill_date}  onChange={(e)=>{changeHandler(e)}}/>
                                    </div>
                                    <button className='btn btn-success'  onClick={updateCustomer} style={{marginRight: '10px',marginTop: '5px'}}>Update</button>
                                    <button className='btn btn-danger'   onClick={()=>{navigate('/customers')}} style={{marginTop: '5px'}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default FunctionalUpdateCustomerComponent;