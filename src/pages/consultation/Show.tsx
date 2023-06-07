import React, { useEffect, useState } from 'react'
import { ConsultationType } from '../../entityPropsType'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Alert from '../../components/Alert'
import Spinner from '../../components/Ui/Spinner'
import { consultation_status, messages } from '../../utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faTrash } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Show = (props: Props) => {
  const {consultationId} = useParams()
  const [consultation, set_consultation] = useState<ConsultationType | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [created_message, set_created_message] = useState<string | null>(null)
  useEffect(() => {
    get_one_consultation(consultationId)
  }, [consultationId])
  const get_one_consultation = (id: string | undefined) => {
    axios.get(`/consultations/${id}`)
      .then((response) => {
          set_consultation(response.data.data)
      })
      .catch(error => {
          if(error.response){
              setErrorMessage(error.response.data.error.message)
          }else {
              setErrorMessage(error.message)
          }
      })
      .finally(() => {
        if(localStorage.getItem('consultations')){
          set_created_message(localStorage.getItem('consultations'))
        }
      })
  }
  const delete_medical_exam = (id: number) => {
    const answer: boolean = confirm('Voulez-vous supprimé cet examen médical?')
    if(answer){
      axios.delete(`/medical_exams/${id}`)
        .then(response => {
          get_one_consultation(consultationId)
        })
        .catch(error => {
          if(error.response){
            setErrorMessage(error.response.data.error.message)
          }else {
            setErrorMessage(error.message)
          }
      })
      .finally(() => {
        localStorage.setItem('consultations', messages.deleted)
      })
    }
  }
  const delete_drug = (id: number) => {
    const answer: boolean = confirm('Voulez-vous supprimé cette prescription médicale?')
    if(answer){
      axios.delete(`/drugs/${id}`)
        .then(response => {
          get_one_consultation(consultationId)
        })
        .catch(error => {
          if(error.response){
            setErrorMessage(error.response.data.error.message)
          }else {
            setErrorMessage(error.message)
          }
      })
      .finally(() => {
        localStorage.setItem('consultations', messages.deleted)
      })
    }
  }
  return (
    <>
      { errorMessage && <Alert type="modal" icon="error" title={errorMessage} ></Alert>}
      {created_message && <Alert type="toast" icon="success" title="" message={created_message} />}
      {consultation ?   
          <div className="card"> 
            <div className="card-header">
              <h2 className="card-title mb-0 flex-grow-1">Detail de la consultation</h2>
            </div>
            <div className="card-body">
              <div className="">
                <div className="row">
                  <div className="col-md-6">
                    <h5>Informations</h5>
                    <ul className="list-group">
                        <li className="list-group-item"><i className="ri-user-heart-line align-middle me-2"></i>{consultation.doctor.title + ' ' + consultation.patient.firstName + ' ' + consultation.patient.lastName}</li>
                        <li className="list-group-item"><i className="ri-user-line align-middle me-2"></i>{consultation.patient.firstName + ' ' + consultation.patient.lastName}</li>
                        <li className="list-group-item"><i className="ri-settings-6-line align-middle me-2"></i>{consultation.type}</li>
                        <li className="list-group-item"><i className="las la-table align-middle me-2"></i>{consultation.status === 1 ?  <span className="badge text-bg-success">terminé</span> : <span className="badge text-bg-warning">en cours</span> }</li>
                        <li className="list-group-item"><i className=" las la-calendar-alt align-middle me-2"></i>{new Date(consultation.created_at).toDateString()}</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>Parametre</h5>
                    <ul className="list-group">
                        <li className="list-group-item"><i className="las la-ruler-vertical align-middle me-2"></i>{consultation.parameter?.height} cm</li>
                        <li className="list-group-item"><i className="ri-file-copy-2-line align-middle me-2"></i>{consultation.parameter?.bloodPressure} mmhg </li>
                        <li className="list-group-item"><i className="las la-weight align-middle me-2"></i>{consultation.parameter?.weight} kg</li>
                        <li className="list-group-item"><i className="las la-temperature-high align-middle me-2"></i>{consultation.parameter?.temperature} celcius</li>
                    </ul>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 card">
                    <div className="card-header">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title mb-0 flex-grow-1">Examen Médical</h5>
                        <div className="flex-shrink-0">
                            <Link to={`/medicalexam/new/${consultation.result?.id}`} className="btn btn-soft-success btn-sm">
                                <i className=" bx bx-plus-circle inline"></i>ajouter
                            </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive table-card">
                          <table className="table table-nowrap">
                              <thead className="text-muted table-light">
                                  <tr>
                                      <th scope="col">Nom</th>
                                      <th scope="col">Description</th>
                                      <th scope="col">Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                              {
                                  consultation.result?.medical_exams.map((exam, index) =>  (
                                      <tr key={index}>
                                          <td>{exam.type}</td>
                                          <td>{exam.description}</td>
                                          <td>
                                              <span onClick={() => delete_medical_exam(exam.id)} className="text-danger"><FontAwesomeIcon icon={faTrash} /></span>
                                          </td>
                                      </tr>
                                  ))
                              }
                              </tbody>
                          </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 card">
                    <div className="card-header">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title mb-0 flex-grow-1">Prescription Médicale</h5>
                        <div className="flex-shrink-0">
                            <Link to={`/drug/new/${consultation.result?.medical_order.id}`} className="btn btn-soft-success btn-sm">
                                <i className=" bx bx-plus-circle inline"></i>ajouter
                            </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive table-card">
                          <table className="table table-nowrap">
                              <thead className="text-muted table-light">
                                  <tr>
                                      <th scope="col">Nom</th>
                                      <th scope="col">Posologie</th>
                                      <th scope="col">Jours</th>
                                      <th scope="col">Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                              {
                                  consultation.result?.medical_order.drugs.map((drug, index) => (
                                      <tr key={index}>
                                          <td>{drug.name}</td>
                                          <td>{drug.dosage}</td>
                                          <td>{drug.days}</td>
                                          <td>
                                              <span onClick={() => delete_drug(drug.id)} className="text-danger"><FontAwesomeIcon icon={faTrash} /></span>
                                          </td>
                                      </tr>
                                  ))
                              }
                              </tbody>
                          </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div> : 
        <div className="flex justify-center">
          <Spinner></Spinner>
        </div>
      }
    </>
  )
}

export default Show