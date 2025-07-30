import './App.css'
import Loginpage from '../component/loginpage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../component/loginpage';
import PrivateUser from '../component/PrivateUser';
import UserDashboard from '../component/UserDashboard';
import PrivateAdmin from '../component/PrivateAdmin';
import AdminDashboard from '../component/AdminDashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />

          <Routes>
            <Route path='/' element={<Loginpage />} />

            <Route path='/user' element={<PrivateUser />} >
              <Route path='dashboard' element={<UserDashboard />} />
            </Route>

            <Route path='/admin' element={<PrivateAdmin />}>
              <Route path='dashboard' element={<AdminDashboard />} />
            </Route>

          </Routes>
    
      </BrowserRouter>
    </>
  )
}

export default App
