import React from 'react'
import { redirect } from 'react-router-dom'

const Pagination = ({actual_page, total_page, page}) => {
    const links = []
    for (let index = 1; index <= total_page; index++) {
        links.push(<li key={index} className={`page-item ${actual_page === index ? 'active' : ''}`}>
            <a href={`/${page}?page=${index}`} className="page-link">{index}</a>
        </li>)
    }
    return (
        <div className="align-items-center mt-4 pt-2 justify-content-between d-flex">
            <ul className="pagination pagination-separated pagination-sm mb-0">
                <li className="page-item disabled">
                    <a href="#" className="page-link">←</a>
                </li>
                {links}
                <li className="page-item">
                    <a href="#" className="page-link">→</a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination