import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    name: string,
    icon: string,
    navLinks: {
        name: string,
        url: string
    }[]
}

const MenutItem = ({name, icon, navLinks}: Props) => {
    const links = navLinks.map((link, index) => (
        <li key={index} className="nav-item">
            <Link to={link.url} className="nav-link" data-key="t-basic-tables">{link.name}</Link>
        </li>
    ))
    return (
        <li className="nav-item">
            <a className="nav-link menu-link" href={`#sideBar${name}`} data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls={`sideBar${name}`}>
                <i className={`bx bx-${icon}`}></i> <span data-key="t-tables">{name}</span>
            </a>
            <div className="collapse menu-dropdown" id={`sideBar${name}`}>
                <ul className="nav nav-sm flex-column">
                    {links}
                </ul>
            </div>
        </li>
    )
}

export default MenutItem