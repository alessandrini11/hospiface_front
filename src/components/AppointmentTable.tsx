import React from 'react'
import Pagination from './Pagination'
import { AppointmentType } from '../entityPropsType'
import { appointment_status } from '../utils/constants'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import SearchForm from './SearchForm'
import URLS from '../utils/app_urls'

type Props = {
    columns: Array<string>,
    entities: AppointmentType[],
    page: string | null,
    newUrl: string,
    pagination: {
      actual_Page: number,
      total_Page: number
    } | null,
    handle_click: (id: number) => void
}

const AppointmentTable = ({columns, newUrl, entities, page, pagination, handle_click}: Props) => {

    return (
        <div className="">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title mb-0 flex-grow-1">Rendez Vous</h4>
                    <div className="d-flex justify-content-between mt-3">
                        <div className="">
                            <SearchForm></SearchForm>
                        </div>
                        <div className="flex-shrink-0">
                            <Link to={newUrl} className="btn btn-soft-success btn-sm">
                                <i className=" bx bx-plus-circle inline"></i>ajouter
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive table-card">
                        <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                            <thead className="text-muted table-light">
                                <tr>
                                    <th scope="col" className="">Number</th>
                                    {columns.map((head, index) => (
                                        <th key={index} className="">
                                            {head}
                                        </th>
                                    ))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {entities.length > 0 ? entities.map((entity, index) => (
                                    <tr key={index}>
                                        <td>
                                            <span className="fw-medium link-primary">{entity.id}</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                </div>
                                                <div className="flex-grow-1">{ entity.patient.firstName + ' ' + entity.patient.lastName}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                </div>
                                                <div className="flex-grow-1">{ entity.doctor.title + ' ' + entity.doctor.firstName + ' ' + entity.doctor.lastName}</div>
                                            </div>
                                        </td>
                                        <td>{entity.date && new Date(entity.date).toDateString()}</td>
                                        <td>{entity.status === 1 ?  <span className="badge text-bg-success">terminé</span> : <span className="badge text-bg-warning">programmé</span> }</td>
                                        <td>{entity.created_at && new Date(entity.created_at).toDateString()}</td>
                                        <td>{entity.created_by && entity.created_by.firstname + ' ' +entity.created_by.lastname}</td>
                                        <td>{entity.updated_at && new Date(entity.updated_at).toDateString()}</td>
                                        <td>{entity.updated_by && entity.updated_by.firstname + ' ' +entity.updated_by.lastname}</td>
                                        <td>
                                            <div className="d-flex justify-content-between">
                                                {/* <Link className='px-1' to={`${URLS.appointment.show}/${entity.id}`}><FontAwesomeIcon icon={faEye} /></Link> */}
                                                <Link className='px-1' to={`${URLS.appointment.edit}/${entity.id}`}><FontAwesomeIcon icon={faPencil} /></Link>
                                                <Link className='px-1' onClick={() => handle_click(entity.id)} to=""><FontAwesomeIcon icon={faTrash} /></Link>
                                            </div>
                                        </td>
                                    </tr>

                                ))
                                
                                : false}
                            </tbody>
                        </table>
                    </div>
                    <Pagination page={page} actual_page={pagination?.actual_Page} total_page={pagination?.total_Page}></Pagination>
                </div>
            </div> 
        </div>
    )
}

export default AppointmentTable