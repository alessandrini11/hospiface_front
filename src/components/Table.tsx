import React from 'react'
import Pagination from './Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { patient_status } from '../utils/constants'
import { Link } from 'react-router-dom'
import {Patient} from '../entityPropsType/index'
import URLS from '../utils/app_urls'
import SearchForm from './SearchForm'
type Props = {
    columns: string[],
    entities: Patient[],
    page: string | null,
    newUrl: string,
    pagination: {
      actual_Page: number,
      total_Page: number
    },
    handle_click: (id: number) => void
}
const Table = ({columns, entities, newUrl, pagination, page, handle_click}: Props) => {
    return (
        <>
            <div className="">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title mb-0 flex-grow-1">Patients</h4>
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
                                                    <div className="flex-grow-1">{entity.firstName + ' ' + entity.lastName}</div>
                                                </div>
                                            </td>
                                            <td>{entity.sex}</td>
                                            <td>{new Date().getFullYear() - new Date(entity.birthDate).getFullYear()} ans</td>
                                            <td className="text-center">{entity.bloodGroup}</td>
                                            <td>{entity.phoneNumber}</td>
                                            <td>{entity.email}</td>
                                            <td>{entity.adress}</td>
                                            <td>{entity.emergencyPerson}</td>
                                            <td>{entity.emergencyContact}</td>
                                            <td>
                                                {patient_status.find(status => status.value === entity.status)?.label}
                                                {/* <span className="badge badge-soft-success">Paid</span> */}
                                            </td>
                                            <td className="text-center">{entity.consultations.length}</td>
                                            <td className="text-center">{entity.hospitalizations.length}</td>
                                            <td>{new Date(entity.createdAt).toDateString()}</td>
                                            <td>{entity.createdBy && entity.createdBy.firstname + ' ' +entity.createdBy.lastname}</td>
                                            <td>{entity.updatedAt && new Date(entity.createdAt).toDateString()}</td>
                                            <td>{entity.updatedBy && entity.updatedBy.firstname + ' ' +entity.updatedBy.lastname}</td>
                                            <td>
                                                <div className="d-flex justify-content-between">
                                                    <Link className='px-1' to={URLS.patient.edit}><i className="ri-eye-fill"></i></Link>
                                                    <Link className='px-1' to={`${URLS.patient.edit}/${entity.id}`}><i className="ri-pencil-line"></i></Link>
                                                    <Link className='px-1' onClick={() => handle_click(entity.id)} to=""><i className="bx bx-trash"></i></Link>
                                                </div>
                                            </td>
                                        </tr>

                                    ))
                                    
                                    : false}
                                </tbody>
                            </table>
                        </div>
                        <Pagination page={page} actual_page={pagination.actual_Page} total_page={pagination.total_Page}></Pagination>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default React.memo(Table)