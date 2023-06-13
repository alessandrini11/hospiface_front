import React, { useEffect, useState } from 'react'
import LogoLgDark from '../assets/images/logo/logo-dark.png'
import LogoSm from '../assets/images/logo/logo-sm-1.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../config/axios'
const Header = () => {
    const [user, set_user] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("/users/profile")
            .then(response => {
                set_user(response.data.data)
            })
    }, []) 
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('refresh_token')
        return navigate("/login")
    }   
    return (
        <header id="page-topbar">
            <div className="layout-width">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box horizontal-logo">
                            <Link to="/" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src={LogoSm} alt="" />
                                </span>
                                <span className="logo-lg">
                                    <img src={LogoLgDark} alt="" />
                                </span>
                            </Link>

                            <Link to="/" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src={LogoSm} alt="" />
                                </span>
                                <span className="logo-lg">
                                    <img src={LogoLgDark} alt="" />
                                </span>
                            </Link>
                        </div>

                        <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon">
                            <span className="hamburger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="dropdown ms-sm-3 header-item topbar-user">
                            <button type="button" className="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="ri-profile-line"></div>
                                {/* <span className="d-flex align-items-center">
                                    <span className="text-start ms-xl-2">
                                        <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text"><i className=""></i></span>
                                        <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Anna Adame</span>
                                        <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span>
                                    </span>
                                </span> */}
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                
                                <h6 className="dropdown-header">bienvenu(e) {user?.lastname}</h6>
                                <a className="dropdown-item" href="pages-profile.html"><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Profile</span></a>
                                <div className="dropdown-divider"></div>
                                <span className="dropdown-item" onClick={logout}><i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Logout</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header