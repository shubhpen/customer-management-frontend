import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import FunctionalListCustomerComponent from './components/FunctionalListCustomerComponent';
import FunctionalCreateCustomerComponent from './components/FunctionalCreateCustomerComponent';
import FunctionalUpdateCustomerComponent from './components/FunctionalUpdateCustomerComponent';
import FunctionalViewCustomerComponent from './components/FunctionalViewCustomerComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Routes>
                <Route exact path='/' element = {<FunctionalListCustomerComponent/>}></Route>
                <Route path='/customers' element = {<FunctionalListCustomerComponent/>}></Route>
                <Route path='/add-customer' element = {<FunctionalCreateCustomerComponent/>}></Route>
                <Route path='/update-customer/:id' element = {<FunctionalUpdateCustomerComponent/>}></Route>
                <Route path="/view-customer/:id" element = {<FunctionalViewCustomerComponent/>}></Route>
              </Routes>
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
