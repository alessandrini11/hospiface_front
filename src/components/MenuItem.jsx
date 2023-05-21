import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({title, links}) => {
    const [show, setShow] = useState(true)
    const icon = show ? <FontAwesomeIcon icon={faArrowRight} /> : <FontAwesomeIcon  icon={faArrowDown} />
    const nav_links = links.map((link, index) => (
        <li className="py-1" key={index}><Link to={link.url} className="font-extralight">{link.name}</Link></li>
    ))
    return (
        <li className="py-1">
            <a href="#" onClick={() => setShow(show => !show)} className="flex items-center justify-between">
            <span>{title}</span>
            {icon}
            </a>
            <ul style={{transition: 'all'}} className={`transition-all ease-in-out duration-700 overflow-y-hidden ${show ? 'h-0':'h-auto'}`}>
                {nav_links}
            </ul>
        </li>
    )
}

export default MenuItem