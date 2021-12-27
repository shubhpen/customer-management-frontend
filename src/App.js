import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListCustomerComponent from './components/ListCustomerComponent';
import CreateCustomerComponent from './components/CreateCustomerComponent';
import UpdateCustomerComponent from './components/UpdateCustomerComponent';
import ViewCustomerComponent from './components/ViewCustomerComponent';
import HomeComponent from './components/HomeComponent';
import ListEnquiryCustomerComponent from './components/ListEnquiryCustomerComponent';
import UpdateEnquiryCustomerComponent from './components/UpdateEnquiryCustomerComponent';
import CreateEnquirycustomerComponent from './components/CreateEnquiryCustomerComponent';
import ViewEnquirycustomerComponent from './components/ViewEnquiryCustomerComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Routes>
                <Route exact path='/' element = {<HomeComponent/>}></Route>
                <Route path='/customers' element = {<ListCustomerComponent/>}></Route>
                <Route path='/add-customer' element = {<CreateCustomerComponent/>}></Route>
                <Route path='/update-customer/:id' element = {<UpdateCustomerComponent/>}></Route>
                <Route path="/view-customer/:id" element = {<ViewCustomerComponent/>}></Route>
                <Route path='/enquirycustomers' element = {<ListEnquiryCustomerComponent/>}></Route>
                <Route path='/add-enquirycustomer' element = {<CreateEnquirycustomerComponent/>}></Route>
                <Route path='/update-enquirycustomer/:id' element = {<UpdateEnquiryCustomerComponent/>}></Route>
                <Route path="/view-enquirycustomer/:id" element = {<ViewEnquirycustomerComponent/>}></Route>
              </Routes>
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
