import React, { useEffect, useState } from 'react'
import MenuItems from './new/MenuItems'
import LogoLgDark from '../assets/images/logo/logo-dark.png'
import LogoSm from '../assets/images/logo/logo-sm-1.png'
import LogoLight from '../assets/images/logo/logo-light.png'
import { Link } from 'react-router-dom'
import axios from '../config/axios'
import { createdUpdatedBy } from '../entityPropsType'
type Props = {}
const SideBar = (props: Props) => {
    return (
        <div className="app-menu navbar-menu">
            <div className="navbar-brand-box">
                <Link to="" className="logo logo-dark">
                    <span className="logo-sm">
                        <img src={LogoSm} alt="" height="22" />
                    </span>
                    <span className="logo-lg">
                        <img src={LogoLgDark} alt="" height="17" />
                    </span>
                </Link>
                <Link to="/" className="logo logo-light">
                    <span className="logo-sm">
                        <img src={LogoSm} alt="" height="22" />
                    </span>
                    <span className="logo-lg">
                        <img src={LogoLight} alt="" height="17" />
                    </span>
                </Link>
                <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                    <i className="ri-record-circle-line"></i>
                </button>
            </div>

            <div id="scrollbar">
                <div className="container-fluid">

                    <div id="two-column-menu">
                    </div>
                    <ul className="navbar-nav" id="navbar-nav">
                        <MenuItems></MenuItems>
                    </ul>
                </div>
            </div>
            <div className="sidebar-background"></div>
        </div>
    )
}

export default SideBar