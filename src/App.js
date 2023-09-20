import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      {/* <EmployeeForm></EmployeeForm> */}
      {/* <Crud></Crud> */}
      {/* <EmployeeList></EmployeeList> */}
      <ToastContainer />
      <Router>
      <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
          EmployeeForm
          </Link>
          <Link to="/employeeList" style={{ padding: 5 }}>
          EmployeeList
          </Link>
      </nav>
       <Routes>
       <Route exact
          path="/"
          element={<EmployeeForm />}></Route>
        <Route exact
          path="/employeeList"
          element={<EmployeeList />}></Route>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
