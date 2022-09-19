import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import NewCustomer from './Components/NewCustomer';
import ViewCustomers from './Components/ViewCustomers';
import Transactions from './Components/Transactions';
import Footer from './Components/Footer';

//styling
import './style.css'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewCustomer" element={<NewCustomer />} />
          <Route path="/Customers" element={<ViewCustomers />} />
          <Route path="/Transactions" element={<Transactions />} />   
          <Route path="/*" element={<Home />} />        
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
