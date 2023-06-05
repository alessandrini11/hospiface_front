import React, { useEffect, useState } from 'react'
import MedicalServiceModel from '../../model/MedicalService.model';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PersonnelType } from '../../entityPropsType';
import { messages } from '../../utils/constants';
import Input from '../../components/Ui/Input';
import SubmitButton from '../../components/Ui/SubmitButton';
import Alert from '../../components/Alert';

type Props = {}

const New = (props: Props) => {
    const { register, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(MedicalServiceModel)
    });
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [sumbiting, setSubmiting] = useState<boolean>(false)
    const onSubmit = (body: any): void => {
        setSubmiting(true)
        axios.post('/medical_services', body)
            .then(response => {
                if(response.status === 201){
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
                <h2>Enregistrez un service</h2>
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

export default New