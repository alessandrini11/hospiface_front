import React from 'react'
import Pagination from './Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'

const Table = ({table_head, entities, pagination}) => {

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Number</th>
                        {table_head.map((head, index) => (
                            <th key={index} className="px-6 py-3">
                                {head}
                            </th>
                        ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {entities.map((entity, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-3 py-2">{index + 1}</td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {entity.fullName}
                        </th>
                        <td className="px-6 py-4">
                            {entity.gender}
                        </td>
                        <td className="px-6 py-4">
                            {entity.blood_group}
                        </td>
                        <td className="px-6 py-4">
                            {entity.telephone}
                        </td>
                        <td className="px-6 py-4">
                            {entity.email}
                        </td>
                        <td className="px-6 py-4">
                            {entity.adress}
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex gap-3">
                                <a href="#" className="transition-all hover:scale-150">
                                    <FontAwesomeIcon icon={faEye}/>
                                </a>
                                <a href="#" className="transition-all hover:scale-150">
                                    <FontAwesomeIcon icon={faPencil}/>
                                </a>
                                <a href="#" className="transition-all hover:scale-150">
                                    <FontAwesomeIcon icon={faTrash}/>
                                </a>
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <div className="py-4">
                <Pagination actual_page={pagination.actual_Page} total_page={pagination.total_Page}/>
            </div>
        </div>
    )
}

export default Table