import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateEnquiryCustomerComponent() {

    const ENQUIRY_CUSTOMER_API_BASE_URL= "http://localhost:8080/api/v1/enquirycustomers";
    const navigate = useNavigate();
    const [enquirycustomer, setEnquirycustomer] = useState({
                name: '',
                phone_number: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    function changeHandler(event){
        const newenquirycustomer = {...enquirycustomer}
        newenquirycustomer[event.target.id] = event.target.value
        setEnquirycustomer(newenquirycustomer)
        console.log(newenquirycustomer);
    }

    useEffect(() =>{
        console.log(formErrors);
        if (Object.keys(enquirycustomer).length === 0 && isSubmit){
            console.log(enquirycustomer)
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
        return errors;
    }

    

    function saveEnquirycustomer(e){
            e.preventDefault();
            setFormErrors(validate(enquirycustomer))
            setIsSubmit(true);

        if(Object.keys(formErrors).length === 0 && isSubmit){
            axios.post(ENQUIRY_CUSTOMER_API_BASE_URL,{
                name: enquirycustomer.name,
                phone_number: enquirycustomer.phone_number,
            }).then(res=>{
                window.alert('Success')
                navigate('/enquirycustomers')
            })
        }
    }

    return (
        <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Enquiry Customer</h3>
                            <div className='card-body'>
                                <form onSubmit={saveEnquirycustomer}>
                                    <div className='form-group' name= 'contact-form'>
                                        <lable>Name: </lable>
                                        <input placeholder='Name' id='name' className='form-control'
                                          value={enquirycustomer.name}   onChange={(e)=>{changeHandler(e)}}/>
                                          <p className='text-danger'>{formErrors.name}</p>
                                    </div>
                                    
                                    <div className='form-group'>    
                                        <lable>Contact: </lable>
                                        <input placeholder='Contact' id='phone_number' className='form-control'
                                          value={enquirycustomer.phone_number}   onChange={(e)=>{changeHandler(e)}}/>
                                          <p className='text-danger'>{formErrors.phone_number}</p>
                                    </div>
                                    
                                    <button className='btn btn-success'  type='submit' style={{marginRight: '10px',marginTop: '5px'}}>Save</button>
                                    <button className='btn btn-danger'   onClick={()=>{navigate('/enquirycustomers')}} style={{marginTop: '5px'}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default CreateEnquiryCustomerComponent;