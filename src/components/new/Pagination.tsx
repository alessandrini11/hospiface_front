import React from 'react'

type Props = {
    
}

const Pagination = (props: Props) => {
    return (
        <div className="align-items-center mt-4 pt-2 justify-content-between d-flex">
            <div className="flex-shrink-0">
                <div className="text-muted">Showing <span className="fw-semibold">5</span> of <span className="fw-semibold">25</span> Results
                </div>
            </div>
            <ul className="pagination pagination-separated pagination-sm mb-0">
                <li className="page-item disabled">
                    <a href="#" className="page-link">←</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">1</a>
                </li>
                <li className="page-item active">
                    <a href="#" className="page-link">2</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">3</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">→</a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination