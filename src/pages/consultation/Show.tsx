import React, { useEffect, useState } from 'react'
import { ConsultationType } from '../../entityPropsType'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Alert from '../../components/Alert'
import Spinner from '../../components/Ui/Spinner'
import { consultation_status } from '../../utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faTrash } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Show = (props: Props) => {
  const {consultationId} = useParams()
  const [consultation, set_consultation] = useState<ConsultationType | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
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
    }
  }
  return (
    <>
      { errorMessage && <Alert type="modal" icon="error" title={errorMessage} ></Alert>}
      {consultation ? <div className="">
        <div className="bg-white">
        <p>
          <span>Patient</span> : {consultation.patient.first_name + ' ' + consultation.patient.last_name}
        </p>
        <p>
          <span>Doctor</span> : {consultation.doctor.title + ' ' + consultation.patient.first_name + ' ' + consultation.patient.last_name}
        </p>
        <div>
          <span>Paramters</span> :
          <ul>
            <li>taille: {consultation.parameter?.height} cm</li>
            <li>poids: {consultation.parameter?.weight} kg</li>
            <li>tension: {consultation.parameter?.bloodPressure} mm/hg</li>
            <li>température: {consultation.parameter?.temperature} celcius</li>
          </ul>
        </div>
        <p>
          <span>Type</span> : {consultation.type}
        </p>
        <p>
          <span>Status</span> : {consultation_status.find(c => c.value === consultation.status)?.label}
        </p>
        <div>
          <span>Examen</span> : <Link to={`/medicalexam/new/${consultation.result?.id}`}>new</Link>
          <ul>
            {
              consultation.result?.medical_exams.map((exam, index) => (
                <li key={index}><span>Type: </span>{exam.type} <span>Description: </span>{exam.description} <span onClick={() => delete_medical_exam(exam.id)} className="cursor-pointer text-red-500"><FontAwesomeIcon icon={faTrash}  /></span></li>
              ))
            }
          </ul>
        </div>
        <div>
          <span>Prescription Médicale</span> : <Link to={`/drug/new/${consultation.result?.medical_order.id}`} >New</Link>
          <ul>
            {
              consultation.result?.medical_order.drugs.map((drug, index) => (
                <li key={index}><span>Name: </span>{drug.name} <span>Posologie: </span>{drug.dosage} <span onClick={() => delete_drug(drug.id)} className="cursor-pointer text-red-500"><FontAwesomeIcon icon={faTrash}  /></span></li>
              ))
            }
          </ul>
        </div>
        <p>
          <span>Date</span> : {new Date(consultation.created_at).toLocaleDateString() }
        </p>
      </div>  
        </div> : 
      <div className="flex justify-center">
        <Spinner></Spinner>
    </div>}
    </>
  )
}

export default Show