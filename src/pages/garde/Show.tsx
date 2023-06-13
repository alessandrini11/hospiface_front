import React, { useEffect, useState } from 'react'
import { GardeType, PersonnelGardeType, PersonnelType } from '../../entityPropsType'
import { Link, useParams } from 'react-router-dom'
import axios from '../../config/axios'
import Alert from '../../components/Alert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
type Props = {}

const Show = (props: Props) => {
    const {gardeId} = useParams()
    const [garde, set_garde] = useState<GardeType | null>(null)
    const [errorMessage, setErrorMessage] = useState<string>('')
    
    useEffect(() => {
        get_garde(gardeId)
    }, [gardeId])
    const get_garde = (id: string | undefined) => {
        axios.get(`/gardes/${gardeId}`)
            .then(response => {
                set_garde(response.data.data)
            })
            .catch(error => {
                if(error.response){
                    setErrorMessage(error.response.data.error.message)
                }else {
                    setErrorMessage(error.message)
                }
            })
    }
    const delete_personnel_garde = (id: number) => {
        Swal.fire({
            title: 'Voulez vous supprimer ?',
            showCancelButton: true,
            showConfirmButton: true,
            icon: 'info',
            confirmButtonText: 'Oui',
            cancelButtonText: 'Non'
          }).then((result) => {
            if (result.isConfirmed) {
                console.log('deleted')
                axios.delete(`/personnel_gardes/${id}`)
                    .then(response => {
                        Swal.fire({
                            title: 'success',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        .then(result => {
                            if(result.isConfirmed){
                                get_garde(gardeId)
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
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }
    return (
        <>
            { errorMessage && <Alert type="modal" icon="error" title={errorMessage} ></Alert>}
            <div className="card">
                <div className="card-header">
                    <h1>Détail garde</h1>
                    <h2>Date de début: <span>{garde && new Date(garde.startDate).toDateString()}</span></h2>
                    <h2>Date de fin: <span>{garde && new Date(garde.endDate).toDateString()}</span></h2>
                    <h4 className="card-title mb-0 flex-grow-1">Gardes</h4>
                    <div className="d-flex justify-content-end mt-3">
                        <Link to={`/personnel_garde/new/${gardeId}`} className="btn btn-soft-success btn-sm">
                            <i className=" bx bx-plus-circle inline"></i>ajouter personnel
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive table-card">
                        <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                            <thead className="text-muted table-light">
                                <tr>
                                    <td>Numéro</td>
                                    <th>Personnel</th>
                                    <th>Service</th>
                                    <th>Date début</th>
                                    <th>Date fin</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {garde && garde.personnel_garde.map((perso, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{perso.personnel?.title} {perso.personnel?.firstName} {perso.personnel?.lastName}</td>
                                        <td>{perso.service?.name}</td>
                                        <td>{perso.startDate && new Date(perso.startDate).toDateString()}</td>
                                        <td>{perso.endDate && new Date(perso.endDate).toDateString()}</td>
                                        <td> <span onClick={() => delete_personnel_garde(perso.id)}><FontAwesomeIcon className="text-danger" icon={faTrash} /></span> </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Show