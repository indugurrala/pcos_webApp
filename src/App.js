import './App.css';
import { Route, Routes ,NavLink } from 'react-router-dom';
import Register from './components/Register'
import Login from './components/Login'
import {useSelector,useDispatch} from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router';
import {clearLoginStatus} from './slices/userslice';
import Home from './components/Home'
import Know from './components/Know'
import Profile from './components/Profile'
import Tracker from './components/Tracker'
import Userdashboard from './components/Userdashboard'
import Info from './components/Info';
import Edit from './components/Edit';
import Suggestions from './components/Suggestions';

function App() {

  let {userObj,isError,isSuccess,isLoading,errMsg}=useSelector(state=>state.user);

  let dispatch=useDispatch();
  let navigate=useNavigate();
  const userLogout=()=>{
    localStorage.clear();
    dispatch(clearLoginStatus());
    navigate('/login');
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <a className="navbar-brand">kNOw PCOS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
          {isSuccess!==true ? ( 
            <>
            
                <ul className="navbar-nav ms-auto">
                  
                  <li className="nav-item">
                    <NavLink className="nav-link" to="">Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="login">Login</NavLink>
                  </li>
                
                  </ul>
                
          </>
          ) : (
          <>
          <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/know">kNOw</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/suggestions">Suggestions</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tracker">Tracker</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
              </li>
              <button id="logout" onClick={userLogout}>Logout</button>
          </ul>
          </>
          )}
          </div>
        </div>
      </nav>

    <Routes>
      
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userdashboard" element={<Userdashboard />} /> 
      <Route path="/suggestions" element={<Suggestions/>} /> 
          
         
      
      <Route path="/profile" element={<Profile />} >
      
          <Route path="info" element={<Info />} />
          <Route path="edit" element={<Edit />} />
          
          <Route path="" element={<Navigate to="info" replace={true} />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/know" element={<Know />} />
          <Route path="/tracker" element={<Tracker />} />
    </Routes>
    
    <div className='container'>
    <Outlet></Outlet>
    </div>

    </>
  );
}

export default App;
