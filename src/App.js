import logo from './logo.svg';
import './App.css';
import ListCustomersComponent from './components/ListCustomerComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
        <div className="container">
          <ListCustomersComponent/>
        </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
