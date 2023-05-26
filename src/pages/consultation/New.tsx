import React, { useEffect, useState } from 'react'
import Alert from '../../components/Alert'
import Input from '../../components/Ui/Input'
import { Controller, useForm } from 'react-hook-form'
import ReactSelect from 'react-select'
import SubmitButton from '../../components/Ui/SubmitButton'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { messages, 
    personnel_position, 
    personnel_subType,
    personnel_type,
    consultation_status, 
    consultation_type
} from '../../utils/constants'
import { personnel_status } from '../../utils/constants'
import { blood_groups } from '../../utils/constants'
import ConsultationModel from '../../model/Consulataion.model'
import { PersonnelType } from '../../entityPropsType'
type Props = {}

const New = (props: Props) => {
    const { register, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(ConsultationModel)
    });
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [sumbiting, setSubmiting] = useState<boolean>(false)
    const [doctors, set_doctors] = useState<Array<{value: number, label: string}>>()
    const [patients, set_patients] = useState<Array<{value: number, label: string}>>()
    const [sub_type, set_sub_type] = useState<Array<{value: string, label: string}>>([])
    useEffect(() => {
        axios.get('/personnels')
            .then(response => {
                const doctorsArr: Array<{label: string, value: number}>=[]
                const doctor: PersonnelType[] = response.data.data.data.filter((personnel: PersonnelType) =>  (
                    personnel.subType === "doctor" 
                ))
                doctor.forEach(doc => {
                    doctorsArr.push({value: doc.id, label: `${doc.title} ${doc.firstName} ${doc.lastName}`})
                })
                set_doctors(doctorsArr)
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
        console.log(body)
        setSubmiting(true)
        axios.post('/consultations', body)
            .then(response => {
                if(response.status === 201){
                    localStorage.setItem('consultations', messages.created)
                    navigate('/consultations')
                }
            })
            .catch(error => {
                setSubmiting(true)
                setErrorMessage(error.message)
            })
    }
    return (
        <>
            { errorMessage && <Alert type="modal" icon="error" title={errorMessage} ></Alert>}
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">Type</label>
                        <Controller
                            name="type"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <ReactSelect
                                    value={consultation_type.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={consultation_type}
                                    ref={ref}
                                    name={name}
                                />
                            )}
                        />
                </div>
                <div className="">
                    <label htmlFor="doctor" className="block mb-2 text-sm font-medium text-gray-900">Médécin</label>
                        <Controller
                            name="doctor"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <ReactSelect
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
                                <ReactSelect
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
                    <Input input_label="poid(kg)" input_name="weight" input_type="number" register={register} error_field={errors.weight?.message} />
                </div>
                <div className="">
                    <Input input_label="taille(cm)" input_name="height" input_type="number" register={register} error_field={errors.height?.message} />
                </div>
                <div className="">
                    <Input input_label="pression artérielle(mm/hg)" input_name="bloodPressure" input_type="number" register={register} error_field={errors.bloodPressure?.message} />
                </div>
                <div className="">
                    <Input input_label="température(celcius)" input_name="temperature" input_type="number" register={register} error_field={errors.bloodPressure?.message} />
                </div>
                <div className="">
                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                        <Controller
                            name="status"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <ReactSelect
                                    value={consultation_status.find((c) => c.value === value)}
                                    onChange={value => ( onChange(value?.value))}
                                    options={consultation_status}
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

export default New