import React from 'react'
import { createdUpdatedBy } from '../entityPropsType'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import Pagination from '../components/Pagination'
import { user_status } from '../utils/constants'
type Props = {
    columns: Array<string>,
    entities: createdUpdatedBy[],
    page: string | null,
    pagination: {
      actual_Page: number,
      total_Page: number
    } | null,
    handle_click: (id: number) => void
}
const UserTable = ({columns, entities, page, pagination, handle_click}: Props) => {
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
                        <td colSpan={2} className="px-6 py-4">Aucun enregistrement</td>
                    </tr> :
                    entities.map((entity, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-3 py-2">{index + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {entity.firstname + ' ' + entity.lastname}
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            {entity.sex}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {entity.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {entity.phonenumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {entity.roles.includes('ROLE_SUPER_ADMIN') ? 'super admin' : 'admin'}
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                            {user_status.find(status => status.value === entity.status)?.label}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {(new Date(entity.created_at)).toDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {entity.updated_at && (new Date(entity.created_at)).toDateString()}
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex gap-3">
                                <Link to={`/users/show/${entity.id}`} className="transition-all cursor-pointer hover:scale-150">
                                    <FontAwesomeIcon icon={faEye} />
                                </Link>
                                <Link to={`/users/edit/${entity.id}`} className="transition-all cursor-pointer hover:scale-150">
                                    <FontAwesomeIcon icon={faPencil}/>
                                </Link>
                                <a onClick={() => handle_click(entity.id)} className="transition-all cursor-pointer hover:scale-150">
                                    <FontAwesomeIcon icon={faTrash}/>
                                </a>
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <div className="py-4">
                <Pagination page={page} actual_page={pagination?.actual_Page} total_page={pagination?.total_Page}/>
            </div>
        </div>
    )
}

export default UserTable