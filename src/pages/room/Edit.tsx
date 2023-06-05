import React, { useEffect, useState } from 'react'
import RoomModel from '../../model/Room.model';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { messages } from '../../utils/constants';
import Alert from '../../components/Alert';
import Input from '../../components/Ui/Input';
import SubmitButton from '../../components/Ui/SubmitButton';

type Props = {}

const Edit = (props: Props) => {
    const { register, handleSubmit, reset, control, formState:{ errors } } = useForm({
        resolver: yupResolver(RoomModel)
    });
    const {roomId} = useParams()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [sumbiting, setSubmiting] = useState<boolean>(false)
    useEffect(() => {
        axios.get(`/rooms/${roomId}`)
            .then(response => {
                reset(response.data.data)
            })
    }, [roomId])
    const onSubmit = (body: any): void => {
        setSubmiting(true)
        axios.put(`/rooms/${roomId}`, body)
            .then(response => {
                if(response.status === 201){
                    localStorage.setItem('rooms', messages.updated)
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
                <h2>Modifiez une chambre</h2>
                <div className="">
                    <Input input_label="numéro chambre" input_name="number" input_type="number" register={register} error_field={errors.number?.message} />
                </div>
                <div className="">
                    <Input input_label="capacité(lits)" input_name="beds" input_type="number" register={register} error_field={errors.beds?.message} />
                </div>
                <div className="">
                    <SubmitButton submiting={sumbiting} label="mise à jour"/>
                </div>
            </form>
        </>
    )
}

export default Edit