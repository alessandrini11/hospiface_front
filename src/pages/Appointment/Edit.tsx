import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppointmentType, Patient, PersonnelType } from '../../entityPropsType';
import AppointmentModel from '../../model/Appointment.model';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import Alert from '../../components/Alert';
import { appointment_status, messages } from '../../utils/constants';
import Select from 'react-select'
import Input from '../../components/Ui/Input';
import SubmitButton from '../../components/Ui/SubmitButton';
type Props = {}

const Edit = (props: Props) => {
    const { register, reset, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(AppointmentModel)
    });
    const navigate = useNavigate()
    const {appointmentId} = useParams()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [sumbiting, setSubmiting] = useState<boolean>(false)
    const [doctors, set_doctors] = useState<Array<{value: number, label: string}>>()
    const [patients, set_patients] = useState<Array<{value: number, label: string}>>()

    useEffect(() => {
        axios.get(`/appointments/${appointmentId}`)
            .then((response) => {
                const data: AppointmentType = response.data.data
                const appointment = {
                    ...data,
                    patient: data.patient.id,
                    doctor: data.doctor.id,
                    date: `${new Date(data.date).getFullYear()}-${new Date(data.date).getMonth() > 8 + 1 ? new Date(data.date).getMonth() > 9 : `0${new Date(data.date).getMonth() + 1}` }-${new Date(data.date).getDay() > 9 ? new Date(data.date).getDay() : `0${new Date(data.date).getDay() + 1}`}`
                }
                reset(appointment)
            })
            .catch(error => {
                if(error.response){
                    setErrorMessage(error.response.data.error.message)
                }else {
                    setErrorMessage(error.message)
                }
            })
        axios.get('/personnels')
            .then(response => {
                const doctorsArr: Array<{label: string, value: number}>=[]
                const doctor: PersonnelType[] = response.data.data.data.filter((personnel: PersonnelType) =>  (
                    personnel.subType === "doctor" && personnel.status === 1
                ))
                doctor.forEach(doc => {
                    doctorsArr.push({value: doc.id, label: `${doc.title} ${doc.firstName} ${doc.lastName}`})
                })
                set_doctors(doctorsArr)
            })
        axios.get('/patients')
            .then(response => {
                const patientsArr: Array<{label: string, value: number}>=[]
                const patientsFilter: Patient[] = response.data.data.data.filter((patient: Patient) => (
                    patient.status === 2
                ))
                patientsFilter.map(patient => (
                    patientsArr.push({value: patient.id, label: `${patient.firstName} ${patient.lastName}`})
                ))
                set_patients(patientsArr)
            })
    }, [appointmentId])
    const onSubmit = (body: any): void => {
        setSubmiting(true)
        axios.put(`/appointments/${appointmentId}`, body)
            .then(response => {
                if(response.status === 200){
                    localStorage.setItem('appointments', messages.updated)
                    navigate('/rendezvous')
                }
            })
            .catch(error => {
                setSubmiting(true)
                if(error.response){
                    setErrorMessage(error.response.data.error.message)
                }else {
                    setErrorMessage(error.message)
                }
            })
    }
    return (
        <>
            { errorMessage && <Alert type="modal" icon="error" title={errorMessage} ></Alert>}
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                <h2>Modifier un rendez-vous</h2>
                <div className="">
                    <label htmlFor="doctor" className="block mb-2 text-sm font-medium text-gray-900">Médécin</label>
                        <Controller
                            name="doctor"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <Select
                                    value={doctors?.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={doctors}
                                    ref={ref}
                                    name={name}
                                />
                            )}
                        />
                </div>
                <div className="">
                    <label htmlFor="patient" className="block mb-2 text-sm font-medium text-gray-900">Patient</label>
                        <Controller
                            name="patient"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <Select
                                    value={patients?.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={patients}
                                    ref={ref}
                                    name={name}
                                />
                            )}
                        />
                </div>
                <div className="">
                    <Input input_label="date rendez-vous" input_name="date" input_type="date" register={register} error_field={errors.date?.message} />
                </div>
                <div className="">
                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                        <Controller
                            name="status"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <Select
                                    value={appointment_status.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={appointment_status}
                                    ref={ref}
                                    name={name}
                                />
                            )}
                        />
                </div>
                <div className="">
                    <SubmitButton submiting={sumbiting} label="enregistrer"/>
                </div>
            </form>
        </>
    )
}

export default Edit