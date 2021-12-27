import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateCustomerComponent() {

    const idParam = useParams();
    const CUSTOMER_API_BASE_URL= "http://localhost:8080/api/v1/customers";
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({
                id: idParam.id,
                name: '',
                phone_number: '',
                address: '',
                bill_ammount: '',
                bill_date: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    function changeHandler(event){
        const newcustomer = {...customer}
        newcustomer[event.target.id] = event.target.value
        setCustomer(newcustomer)
        console.log(newcustomer);
    }

    useEffect(() =>{
        console.log(formErrors);
        if (Object.keys(customer).length === 0 && isSubmit){
            console.log(customer)
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regext =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name){
            errors.name = "Name is Required!";
        }

        if (!values.phone_number){
            errors.phone_number = "Phone Number is Required!";
        } else if(values.phone_number.length !== 10){
            errors.phone_number = "Enter Valid Phone Number";
        }

        if(!values.address){
            errors.address = "Address is Required!";
        }

        if(!values.bill_ammount){
            errors.bill_ammount = "Bill Ammount is Required!";
            console.log(values.bill_ammount)
        } else if(values.bill_ammount == 0){
            errors.bill_ammount = "Bill Ammount Can't be Zero!";
        }

        if(!values.bill_date){
            errors.bill_date = "Bill Date is Required!";
        }
        return errors;
    }
    function updateCustomer(e){
        e.preventDefault();
        setFormErrors(validate(customer))
        setIsSubmit(true);

        if(Object.keys(formErrors).length === 0 && isSubmit) {
            axios.put(CUSTOMER_API_BASE_URL + '/' + idParam.id,{
                name: customer.name,
                phone_number: customer.phone_number,
                address: customer.address,
                bill_ammount: customer.bill_ammount,
                bill_date: customer.bill_date
            }).then(res=>{
                window.alert('Success')
                navigate('/customers')
            })
        }
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
                                        <p className='text-danger'>{formErrors.name}</p>
                                    </div>
                                    
                                    <div className='form-group'>    
                                        <lable>Contact: </lable>
                                        <input placeholder='Contact' id='phone_number' className='form-control'
                                          value={customer.phone_number}   onChange={(e)=>{changeHandler(e)}}/>
                                        <p className='text-danger'>{formErrors.phone_number}</p>
                                    </div>
                                    <div className='form-group'>
                                        <lable>Address: </lable>
                                        <input placeholder='Address' id='address' className='form-control'
                                          value={customer.address}   onChange={(e)=>{changeHandler(e)}}/>
                                        <p className='text-danger'>{formErrors.address}</p>
                                    </div>
                                    <div className='form-group'>
                                        <lable>Bill Ammount: </lable>
                                        <input placeholder='Ammount' id='bill_ammount' className='form-control'
                                          value={customer.bill_ammount}   onChange={(e)=>{changeHandler(e)}}/>
                                        <p className='text-danger'>{formErrors.bill_ammount}</p>
                                    </div>
                                    <div className='form-group'>
                                        <lable>Bill Date: </lable>
                                        <input placeholder='yyyy-mm-dd' id='bill_date' className='form-control'
                                          value={customer.bill_date}  onChange={(e)=>{changeHandler(e)}}/>
                                        <p className='text-danger'>{formErrors.bill_date}</p>
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

export default UpdateCustomerComponent;