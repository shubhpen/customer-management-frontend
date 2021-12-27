import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function ListEnquiryCustomerComponent(){
    
    const ENQUIRY_CUSTOMER_API_BASE_URL= "http://localhost:8080/api/v1/enquirycustomers";
    let idParam = useParams();
    const navigate = useNavigate();
    const [enquirycustomers, setEnquiryCustomer] = useState([])

    useEffect(() =>{
        let isMounted = true;
        axios.get(ENQUIRY_CUSTOMER_API_BASE_URL)
        .then(res =>{
           if(isMounted) setEnquiryCustomer(res.data)
        })
        return () => { isMounted = false };
    })

    function goToEditCustomer(id){
        navigate(`/update-enquirycustomer/${id}`);
    }

    function deleteCustomer(id){
        axios.delete(ENQUIRY_CUSTOMER_API_BASE_URL+ '/' + id);
    }

    function viewCustomer(id){
        navigate(`/view-enquirycustomer/${id}`);
    }
    return (
        <div>
            <h2 className='text-center'>Customers Who Enquired</h2>
            <button className="btn btn-primary" onClick={() => {
            navigate('/add-enquirycustomer')}}
            >Register Enquiry</button>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Customer Contact</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enquirycustomers.map(
                                enquirycustomer => 
                                <tr key = {enquirycustomer.id}>
                                    <td>{enquirycustomer.name}</td>
                                    <td>{enquirycustomer.phone_number}</td>
                                    <td><button className="btn btn-info" onClick={()=>{
                                        goToEditCustomer(enquirycustomer.id)
                                    }}>Update</button>
                                    <button className="btn btn-danger" style={{marginLeft: '10px'}} onClick={()=>{
                                        deleteCustomer(enquirycustomer.id) 
                                    }}>Delete</button>
                                    <button className="btn btn-info" style={{marginLeft: '10px'}} onClick={()=>{
                                        viewCustomer(enquirycustomer.id) 
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

export default ListEnquiryCustomerComponent;