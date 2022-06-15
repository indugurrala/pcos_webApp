import React, { useEffect } from 'react'
import { Link,Outlet } from 'react-router-dom'

function Profile() {
  
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="info">My Info</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="edit">Edit Details</Link>
        </li>
      </ul>
      </div>
    </div>
    </nav>
    <div className='container'>
      <Outlet></Outlet>
    </div>
    </div>
  )
}

export default Profile