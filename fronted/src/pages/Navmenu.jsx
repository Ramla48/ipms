import React from 'react'
import { Link } from 'react-router-dom/dist';

function Navmenu() {
  return (
        <nav className="navbar navbar-expand-md bg-warning shadow-sm">

            <div className="container-xxl">
                <Link to="/" className="navbar-brand">
                    <span className="fw-bold text-black">IPMS </span>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                          <Link to="/" className="nav-link text-black">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-black">CONTACT US</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/review" className="nav-link text-black">PT review</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pt" className="nav-link text-black">PT location</Link>
                        </li>
                        <li className="nav-item d-md-none">
                            <Link to="/signup" className="nav-link text-black">LOGIN</Link>
                        </li>
                        <li className="nav-item ms-2 d-none d-md-inline" >
                            <Link to="/signup" className="btn btn-outline-secondary">SIGN IN</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

  )
}

export default Navmenu