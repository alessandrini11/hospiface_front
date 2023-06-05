import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import RoomModel from '../model/Room.model'
import axios from 'axios'
import {messages} from '../utils/constants'
import Alert from '../components/Alert'
import Input from '../components/Ui/Input'
import SubmitButton from '../components/Ui/SubmitButton'
import * as yup from 'yup'
import CardContainer from '../components/Cards/CardContainer';
import Spinner from '../components/Ui/Spinner';

type Props = {}
const LoginModel = yup.object({
    username: yup.string().email().required('le champ est obligatoire'),
    password: yup.string().required('le champ est obligatoire')
})
const Login = (props: Props) => {
    const { register, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(LoginModel)
    });
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [submiting, setSubmiting] = useState<boolean>(false)
    const onSubmit = (body: any): void => {
        setSubmiting(true)
        axios.post('/auth/login_check', body)
            .then(response => {
                if(response.status === 200){
                    console.log("executes")
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('refresh_token', response.data.refresh_token)
                    navigate('/')
                }
            })
            .catch(error => {
                setSubmiting(false)
                if(error.response){
                    setErrorMessage(error.response.data.message)
                }else {
                    setErrorMessage(error.message)
                }
            })
    }
    return (
        <>
            { errorMessage && <Alert type="modal" icon="error" title={errorMessage} ></Alert>}
            <div className="h-screen flex items-center">
                <div className="w-full md:w-1/2 md:mx-auto">
                    <CardContainer>
                        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                            <div className="">
                                <Input input_label="Email" input_name="username" input_type="email" register={register} error_field={errors.username?.message} />
                            </div>
                            <div className="">
                                <Input input_label="mot de passe" input_name="password" input_type="password" register={register} error_field={errors.beds?.message} />
                            </div>
                            <div className="">
                            <button disabled={submiting} type="submit" className="flex justify-center items-center w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                {submiting ? <Spinner></Spinner> : 'login'}
                            </button>
                            </div>
                        </form>
                    </CardContainer>
                </div>
            </div>
        </>
    )
}

export default Login