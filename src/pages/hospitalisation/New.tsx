import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import HospitalizationModel from '../../model/Hospitalization.model';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RoomType } from '../../entityPropsType';
import { hospitalisation_status, hospitalisation_type, messages } from '../../utils/constants';
import Alert from '../../components/Alert';
import Select from 'react-select'
import SubmitButton from '../../components/Ui/SubmitButton';
import Input from '../../components/Ui/Input';

type Props = {}

const New = (props: Props) => {
    const { register, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(HospitalizationModel)
    });
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [sumbiting, setSubmiting] = useState<boolean>(false)
    const [rooms, set_rooms] = useState<Array<{value: number, label: string}>>()
    const [patients, set_patients] = useState<Array<{value: number, label: string}>>()
    const [sub_type, set_sub_type] = useState<Array<{value: string, label: string}>>([])
    useEffect(() => {
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
                response.data.data.data.forEach(patient => {
                    patientsArr.push({value: patient.id, label: `${patient.firstName} ${patient.lastName}`})
                })
                set_patients(patientsArr)
            })
    }, [])
    const onSubmit = (body: any): void => {
        setSubmiting(true)
        axios.post('/hospitalizations', body)
            .then(response => {
                if(response.status === 201){
                    localStorage.setItem('hospitalizations', messages.created)
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
                    <SubmitButton submiting={sumbiting} label="enregistrer"/>
                </div>
            </form>
        </>
    )
}

export default New