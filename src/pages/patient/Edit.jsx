import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import Layout from '../../components/Layout';
import SubmitButton from '../../components/Ui/SubmitButton';
import ReactSelect from 'react-select'
import * as yup from 'yup'
import Input from '../../components/Ui/Input';
import PatientModel from '../../model/Patient.model'
import Alert from '../../components/Alert';
import { blood_groups, messages, patient_status, sexs } from '../../utils/constants';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const { register, handleSubmit, control, reset, formState:{ errors,  } } = useForm({
        resolver: yupResolver(PatientModel)
    });
    const {patientId} = useParams()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [isError, setIsError] = useState(false)
    const [sumbiting, setSubmiting] = useState(false)
    useEffect(() => {
        axios.get(`/patients/${patientId}`)
            .then(response => {
                reset(response.data.data)
            })
            .catch(error => {
                setErrorMessage(error.message)
                setIsError(true)
            })
    }, [patientId])
    const onSubmit = body => {
    setSubmiting(true)
    axios.put(`/patients/${patientId}`, body)
        .then(response => {
            if(response.status === 200){
                localStorage.setItem('patient', messages.updated)
                navigate('/patients')
            }
        })
        .catch(error => {
            setSubmiting(false)
            console.log(error)
            setErrorMessage(error.message)
            setIsError(true)
        })
    }
    return (
        <Layout page="patient" sub_page="edit">
            { isError && <Alert type="modal" icon="error" title={errorMessage} ></Alert>}
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <Input input_label="nom" input_name="firstName" input_type="text" register={register} error_field={errors.firstName?.message} />
                </div>
                <div className="">
                    <Input input_label="prenom" input_name="lastName" input_type="text" register={register} error_field={errors.lastName?.message} />
                </div>
                <div className="">
                <label htmlFor="sex" className="block mb-2 text-sm font-medium text-gray-900">Sexe</label>
                    <Controller
                        name="sex"
                        control={control}
                        rules={{ required: false }}
                        render={({ field: { onChange, value, name, ref } }) => (
                            <ReactSelect
                                value={sexs.find((c) => c.value === value)}
                                onChange={val => onChange(val.value)}
                                options={sexs}
                                ref={ref}
                                name={name}
                            />
                        )}
                    />
                    { errors.birthDate && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.birthDate.message}</p>}
                </div>
                <div className="">
                    <Input input_label="date de naissance" input_name="birthDate" input_type="date" register={register} error_field={errors.birthDate?.message} />
                </div>
                <div className="">
                <label htmlFor="bloodGroup" className="block mb-2 text-sm font-medium text-gray-900">Groupe Sanguain</label>
                    <Controller
                            name="bloodGroup"
                            control={control}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <ReactSelect
                                value={blood_groups.find((c) => c.value === value)}
                                onChange={val => onChange(val.value)}
                                options={blood_groups}
                                ref={ref}
                                name={name}
                            />
                            )}
                    />
                </div>
                <div className="">
                    <Input input_label="email" input_name="email" input_type="email" register={register} error_field={errors.email?.message} />
                </div>
                <div className="">
                    <Input input_label="numéro téléphone" input_name="phoneNumber" input_type="tel" register={register} error_field={errors.phoneNumber?.message} />
                </div>
                <div className="">
                    <Input input_label="personne à contacter en cas d'urgence" input_name="emergencyPerson" input_type="text" register={register} error_field={errors.emergencyPerson?.message} />
                </div>
                <div className="">
                    <Input input_label="numéro de la personne à contacter" input_name="emergencyContact" input_type="tel" register={register} error_field={errors.emergencyContact?.message} />
                </div>
                <div className="">
                <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                    <Controller
                        name="status"
                        control={control}
                        render={({ field: { onChange, value, name, ref } }) => (
                            <ReactSelect
                            value={patient_status.find((c) => c.value === value)}
                            onChange={val => onChange(val.value)}
                            options={patient_status}
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
        </Layout>
    )
}

export default Edit