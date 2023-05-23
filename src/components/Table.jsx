import React from 'react'
import Pagination from './Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { patient_status } from '../utils/constants'
import { Link } from 'react-router-dom'

const Table = ({columns, entities, pagination, page, handle_click}) => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Number</th>
                        {columns.map((head, index) => (
                            <th key={index} className="px-6 py-3">
                                {head}
                            </th>
                        ))
                        }
                    </tr>
                </thead>
                <tbody>
                    { entities.length === 0 ?
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td colSpan="2" className="px-6 py-4">Aucun enregistrement</td>
                    </tr> :
                    entities.map((entity, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-3 py-2">{index + 1}</td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {entity.firstName + ' ' + entity.lastName}
                        </th>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {entity.sex}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {entity.bloodGroup}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {entity.phoneNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {entity.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {entity.adress}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {entity.emergencyPerson}
                        </td>
                        <td className="px-6 py-4">
                            {entity.emergencyContact}
                        </td>
                        <td className="px-6 py-4">
                            {patient_status.find(status => {
                                status.value === entity.status
                            })}
                            {}
                        </td>
                        <td className="px-6 py-4">
                            {`${(new Date(entity.createdAt)).getDate()}/${(new Date(entity.createdAt)).getMonth() + 1}/${(new Date(entity.createdAt)).getFullYear()}`}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {entity.createdBy && entity.createdBy.firstname + ' ' +entity.createdBy.lastname}
                        </td>
                        <td className="px-6 py-4">
                            { entity.updatedAt && `${(new Date(entity.updatedAt)).getDate()}/${(new Date(entity.updatedAt)).getMonth() + 1}/${(new Date(entity.updatedAt)).getFullYear()}`}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {entity.updatedBy && entity.updatedBy.firstname + ' ' +entity.updatedBy.lastname}
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex gap-3">
                                <Link to={`/patients/show/${entity.id}`} className="transition-all hover:scale-150">
                                    <FontAwesomeIcon icon={faEye}/>
                                </Link>
                                <Link to={`/patients/edit/${entity.id}`} className="transition-all hover:scale-150">
                                    <FontAwesomeIcon icon={faPencil}/>
                                </Link>
                                <a onClick={() => handle_click(entity.id)} className="transition-all hover:scale-150">
                                    <FontAwesomeIcon icon={faTrash}/>
                                </a>
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <div className="py-4">
                <Pagination page={page} actual_page={pagination.actual_Page} total_page={pagination.total_Page}/>
            </div>
        </div>
    )
}

export default React.memo(Table)