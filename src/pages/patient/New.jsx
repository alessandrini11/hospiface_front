import React, { useState } from 'react'
import Input from '../../components/Ui/Input'
import ReactSelect from 'react-select'
import SubmitButton from '../../components/Ui/SubmitButton'
import { blood_groups, patient_status, sexs, messages } from '../../utils/constants'
import axios from '../../config/axios'
import Patient from '../../model/Patient.model'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Alert from '../../components/Alert'
import { useNavigate } from 'react-router-dom'
const New = () => {
    const { register, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(Patient)
    });
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState(null)
    const [isError, setIsError] = useState(false)
    const [sumbiting, setSubmiting] = useState(false)
    const onSubmit = body => {
        setSubmiting(true)
        console.log(body)
        axios.post('/patients', body)
            .then(response => {
                if(response.status === 201){
                    localStorage.setItem('patient', messages.created)
                    navigate('/patients')
                }
            })
            .catch(error => {
                setSubmiting(false)
                console.log(error)
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
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <h2>Enregistrez un nouveau patient</h2>
                <div className="">
                    <Input input_label="Nom" input_name="firstName" input_type="text" register={register} error_field={errors.firstName?.message} />
                </div>
                <div className="">
                    <Input input_label="Prenom" input_name="lastName" input_type="text" register={register} error_field={errors.lastName?.message} />
                </div>
                <div className="">
                    <label htmlFor="sex" className="block mb-2 text-sm font-medium text-gray-900">Sexe</label>
                        <Controller
                                name="sex"
                                control={control}
                                rules={{ required: true }}
                                render={({ field: { onChange, value, name, ref } }) => (
                                    <ReactSelect
                                    value={sexs.find((c) => c.value === value)}
                                    onChange={value => onChange(value.value)}
                                    options={sexs}
                                    ref={ref}
                                    className={ errors.sex ?  "is-invalid" : ""}
                                    name={name}
                                />
                                )}
                        />
                    {errors.sex && <div className="invalid-feedback">{errors.sex.message}</div>}
                </div>
                <div className="">
                    <Input input_label="Date de naissance" input_name="birthDate" input_type="date" register={register} error_field={errors.birthDate?.message} />
                </div>
                <div className="">
                    <label htmlFor="bloodGroup" className="block mb-2 text-sm font-medium text-gray-900">Groupe Sanguain</label>
                        <Controller
                                name="bloodGroup"
                                control={control}
                                rules={{ required: true }}
                                render={({ field: { onChange, value, name, ref } }) => (
                                    <ReactSelect
                                    value={blood_groups.find((c) => c.value === value)}
                                    onChange={value => onChange(value.value)}
                                    options={blood_groups}
                                    ref={ref}
                                    name={name}
                                />
                                )}
                        />
                        {errors.sex && <div className="invalid-feedback">{errors.sex.message}</div>}
                </div>
                <div className="">
                    <Input input_label="Email" input_name="email" input_type="email" register={register} error_field={errors.email?.message} />
                </div>
                <div className="">
                    <Input input_label="Numéro téléphone" input_name="phoneNumber" input_type="tel" register={register} error_field={errors.phoneNumber?.message} />
                </div>
                <div className="">
                    <Input input_label="Personne à contacter en cas d'urgence" input_name="emergencyPerson" input_type="text" register={register} error_field={errors.emergencyPerson?.message} />
                </div>
                <div className="">
                    <Input input_label="Numéro de la personne à contacter" input_name="emergencyContact" input_type="tel" register={register} error_field={errors.emergencyContact?.message} />
                </div>
                <div className="">
                <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                    <Controller
                        name="status"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, value, name, ref } }) => (
                            <ReactSelect
                            value={patient_status.find((c) => c.value === value)}
                            onChange={value => onChange(value.value)}
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
        </>
    )
}

export default New