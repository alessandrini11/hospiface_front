import React from 'react'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'

type Props = {
    name: string,
    number: number,
    icon: string,
    url: string
}

const StatCard = ({name, number, icon, url}: Props) => {
    return (
        <div className="col-xl-3 col-md-6">
            <div className="card card-animate">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <div className="flex-grow-1 overflow-hidden">
                            <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                {name}</p>
                        </div>
                        <div className="flex-shrink-0">
                        </div>
                    </div>
                    <div className="d-flex align-items-end justify-content-between mt-4">
                        <div>
                            <h4 className="fs-22 fw-semibold ff-secondary mb-4">{number}</h4>
                            <Link to={url} className="text-decoration-underline text-muted">Voir plus</Link>
                        </div>
                        <div className="avatar-sm flex-shrink-0">
                            <span className={`avatar-title bg-soft-success rounded fs-3`}>
                                <i className={`bx bx-${icon} text-success`}></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatCard