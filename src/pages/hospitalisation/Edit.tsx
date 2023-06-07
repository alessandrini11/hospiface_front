import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import HospitalizationModel from '../../model/Hospitalization.model';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { HospitalizationType, Patient, RoomType } from '../../entityPropsType';
import { hospitalisation_status, hospitalisation_type, messages } from '../../utils/constants';
import Alert from '../../components/Alert';
import Select from 'react-select'
import Input from '../../components/Ui/Input';
import SubmitButton from '../../components/Ui/SubmitButton';

type Props = {}

const Edit = (props: Props) => {
    const { register, handleSubmit, reset, control, formState:{ errors } } = useForm({
        resolver: yupResolver(HospitalizationModel)
    });
    const navigate = useNavigate()
    const {hospitalisationId} = useParams()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [sumbiting, setSubmiting] = useState<boolean>(false)
    const [rooms, set_rooms] = useState<Array<{value: number, label: string}>>()
    const [patients, set_patients] = useState<Array<{value: number, label: string}>>()
    useEffect(() => {
        axios.get(`/hospitalizations/${hospitalisationId}`)
            .then((response) => {
                const data: HospitalizationType = response.data.data
                const appointment = {
                    ...data,
                    patient: data.patient.id,
                    room: data.room?.id,
                    startDate: `${new Date(data.startDate).getFullYear()}-${new Date(data.startDate).getMonth() > 8 + 1 ? new Date(data.startDate).getMonth() > 9 : `0${new Date(data.startDate).getMonth() + 1}` }-${new Date(data.startDate).getDay() > 9 ? new Date(data.startDate).getDay() : `0${new Date(data.startDate).getDay() + 1}`}`,
                    endDate: `${new Date(data.endDate).getFullYear()}-${new Date(data.endDate).getMonth() > 8 + 1 ? new Date(data.endDate).getMonth() > 9 : `0${new Date(data.endDate).getMonth() + 1}` }-${new Date(data.endDate).getDay() > 9 ? new Date(data.endDate).getDay() : `0${new Date(data.endDate).getDay() + 1}`}`,
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
        axios.get('/rooms')
            .then(response => {
                const roomsArr: Array<{label: string, value: number}>=[]
                const rooms: RoomType[] = response.data.data.data
                rooms.forEach(room => {
                    roomsArr.push({value: room.id, label: `${room.number}`})
                })
                set_rooms(roomsArr)
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
    }, [hospitalisationId])
    const onSubmit = (body: any): void => {
        setSubmiting(true)
        axios.put(`/hospitalizations/${hospitalisationId}`, body)
            .then(response => {
                if(response.status === 200){
                    localStorage.setItem('hospitalizations', messages.updated)
                    navigate('/hospitalisations')
                }
            })
            .catch(error => {
                setSubmiting(false)
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
                <h2>Modifier une hospitalisation</h2>
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
                    <label htmlFor="room" className="block mb-2 text-sm font-medium text-gray-900">Chambre</label>
                        <Controller
                            name="room"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <Select
                                    value={rooms?.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={rooms}
                                    ref={ref}
                                    name={name}
                                />
                            )}
                        />
                </div>
                <div className="">
                    <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">Type</label>
                        <Controller
                            name="type"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <Select
                                    value={hospitalisation_type.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={hospitalisation_type}
                                    ref={ref}
                                    name={name}
                                />
                            )}
                        />
                </div>
                <div className="">
                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                        <Controller
                            name="status"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <Select
                                    value={hospitalisation_status.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={hospitalisation_status}
                                    ref={ref}
                                    name={name}
                                />
                            )}
                        />
                </div>
                <div className="">
                    <Input input_label="date début" input_name="startDate" input_type="date" register={register} error_field={errors.startDate?.message} />
                </div>
                <div className="">
                    <Input input_label="date date fin" input_name="endDate" input_type="date" register={register} error_field={errors.endDate?.message} />
                </div>
                <div className="">
                    <Input input_label="description" input_name="description" input_type="text" register={register} error_field={errors.startDate?.message} />
                </div>
                <div className="">
                    <SubmitButton submiting={sumbiting} label="modifier"/>
                </div>
            </form>
        </>
    )
}

export default Edit