import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import RoomModel from '../../model/Room.model'
import axios from '../../config/axios'
import {messages} from '../../utils/constants'
import Alert from '../../components/Alert'
import Input from '../../components/Ui/Input'
import SubmitButton from '../../components/Ui/SubmitButton'
type Props = {}

const New = (props: Props) => {
    const { register, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(RoomModel)
    });
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [sumbiting, setSubmiting] = useState<boolean>(false)
    const onSubmit = (body: any): void => {
        setSubmiting(true)
        axios.post('/rooms', body)
            .then(response => {
                if(response.status === 201){
                    localStorage.setItem('rooms', messages.created)
                    navigate('/chambres')
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
                <h2>Enregistrez une chambre</h2>
                <div className="">
                    <Input input_label="numéro chambre" input_name="number" input_type="number" register={register} error_field={errors.number?.message} />
                </div>
                <div className="">
                    <Input input_label="capacité(lits)" input_name="beds" input_type="number" register={register} error_field={errors.beds?.message} />
                </div>
                <div className="">
                    <SubmitButton submiting={sumbiting} label="enregistrer"/>
                </div>
            </form>
        </>
    )
}

export default New