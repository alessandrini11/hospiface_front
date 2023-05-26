import React, { useEffect, useState } from 'react'
import { ConsultationType } from '../../entityPropsType'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Alert from '../../components/Alert'
import Spinner from '../../components/Ui/Spinner'
import { consultation_status } from '../../utils/constants'

type Props = {}

const Show = (props: Props) => {
  const {consultationId} = useParams()
  const [consultation, set_consultation] = useState<ConsultationType | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  useEffect(() => {
    axios.get(`/consultations/${consultationId}`)
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
  }, [consultationId])
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
          <span>Examen</span> :
          <ul>
            {
              consultation.result?.medical_exams.map((exam, index) => (
                <li key={index}><span>Type: </span>{exam.type} <span>Description: </span>{exam.description}</li>
              ))
            }
          </ul>
        </div>
        <div>
          <span>Prescription Médicale</span> :
          <ul>
            {
              consultation.result?.medical_order.map((order, index) => (
                <li key={index}><span>Name: </span>{order.name} <span>Posologie: </span>{order.dosage}</li>
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