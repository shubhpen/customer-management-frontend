import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateEnquiryCustomerComponent() {

    const enquirycustomer_API_BASE_URL= "http://localhost:8080/api/v1/enquirycustomers";
    const navigate = useNavigate();
    const [enquirycustomer, setEnquirycustomer] = useState({
                name: '',
                phone_number: '',
                address: '',
                bill_ammount: '',
                bill_date: ''
    });

    function changeHandler(event){
        const newenquirycustomer = {...enquirycustomer}
        newenquirycustomer[event.target.id] = event.target.value
        setEnquirycustomer(newenquirycustomer)
        console.log(newenquirycustomer);
    }

    function saveEnquirycustomer(){
        
        axios.post(enquirycustomer_API_BASE_URL,{
            name: enquirycustomer.name,
            phone_number: enquirycustomer.phone_number,
        }).then(res=>{
            window.alert('Success')
            navigate('/enquirycustomers')
        })
        
    }

    return (
        <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add enquirycustomer</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group' name= 'contact-form'>
                                        <lable>Name: </lable>
                                        <input placeholder='Name' id='name' className='form-control'
                                          value={enquirycustomer.name}   onChange={(e)=>{changeHandler(e)}}/>
                                    </div>
                                    
                                    <div className='form-group'>    
                                        <lable>Contact: </lable>
                                        <input placeholder='Contact' id='phone_number' className='form-control'
                                          value={enquirycustomer.phone_number}   onChange={(e)=>{changeHandler(e)}}/>
                                    </div>
                                    
                                    <button className='btn btn-success'  onClick={saveEnquirycustomer} style={{marginRight: '10px',marginTop: '5px'}}>Save</button>
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