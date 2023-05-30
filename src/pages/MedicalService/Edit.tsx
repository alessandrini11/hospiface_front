import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import MedicalServiceModel from '../../model/MedicalService.model';
import { yupResolver } from '@hookform/resolvers/yup';
import { messages } from '../../utils/constants';
import Alert from '../../components/Alert';
import Input from '../../components/Ui/Input';
import SubmitButton from '../../components/Ui/SubmitButton';

type Props = {}

const Edit = (props: Props) => {
    const { register, reset, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(MedicalServiceModel)
    });
    const navigate = useNavigate()
    const {serviceId} = useParams()
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [sumbiting, setSubmiting] = useState<boolean>(false)
    useEffect(() => {
        axios.get(`/medical_services/${serviceId}`)
            .then(response => {
                reset(response.data.data)
            })
            .catch(error => {
                setSubmiting(false)
                if(error.response){
                    setErrorMessage(error.response.data.error.message)
                }else {
                    setErrorMessage(error.message)
                }
            })
    }, [serviceId])
    const onSubmit = (body: any): void => {
        setSubmiting(true)
        axios.put(`/medical_services/${serviceId}`, body)
            .then(response => {
                if(response.status === 200){
                    localStorage.setItem('services', messages.created)
                    navigate('/services')
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
                    <Input input_label="Nom" input_name="name" input_type="text" register={register} error_field={errors.name?.message} />
                </div>
                <div className="">
                    <SubmitButton submiting={sumbiting} label="enregistrer"/>
                </div>
            </form>
        </>
    )
}

export default Edit