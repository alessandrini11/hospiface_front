import React, { useEffect, useState } from 'react'
import { ServiceType } from '../../entityPropsType'
import { useParams } from 'react-router-dom'
import axios from '../../config/axios'
import Alert from '../../components/Alert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { messages } from '../../utils/constants'

type Props = {}

const Show = (props: Props) => {
    const {serviceId} = useParams()
    const [error_message, setErrorMessage] = useState<string | null>(null)
    const [service, set_service] = useState<ServiceType>()
    useEffect(() => {
        get_medical_service()
    }, [serviceId])
    const get_medical_service = (): void => {
        axios.get(`/medical_services/${serviceId}`)
            .then(response => {
                set_service(response.data.data)
            })
            .catch(error => {
                if(error.response){
                    setErrorMessage(error.response.data.error.message)
                }else {
                    setErrorMessage(error.message)
                }
            })
    }
    const delete_personnel_service = (id: number): void => {
        Swal.fire({
            title: 'Voulez vous supprimer ?',
            showCancelButton: true,
            showConfirmButton: true,
            icon: 'info',
            confirmButtonText: 'Oui',
            cancelButtonText: 'Non'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/medical_services/${id}`)
                    .then(response => {
                        Swal.fire({
                            title: 'success',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        .then(result => {
                            if(result.isConfirmed){
                                localStorage.setItem('services', messages.deleted)
                                get_medical_service()
                            }
                        })
                    })
                    .catch(error => {
                        if(error.response){
                            setErrorMessage(error.response.data.error.message)
                        }else {
                            setErrorMessage(error.message)
                        }
                    })
            } else if (result.isDismissed || result.isDenied) {
                Swal.fire('Suppression annulée', '', 'info')
            }
        })
    }
    return (
        <>
            {error_message && <Alert type="modal" icon="error" title={error_message} />}
            {service ? 
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title mb-0 flex-grow-1">Personnel du Service {service.name}</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive table-card">
                        <table className="table table-nowrap">
                            <thead className="text-muted table-light">
                                <tr>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Poste</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                service.personnel_service.map((personnel_service, index) => (
                                    <tr key={index}>
                                        <td>{personnel_service.personnel.title} {personnel_service.personnel.firstName} {personnel_service.personnel.lastName}</td>
                                        <td>{personnel_service.positionHeld}</td>
                                        <td>
                                            <span onClick={() => delete_personnel_service(personnel_service.id)} className="text-danger"><FontAwesomeIcon icon={faTrash} /></span>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
           : null}
        </>
    )
}

export default Show