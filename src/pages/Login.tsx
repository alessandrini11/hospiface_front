import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import Alert from '../components/Alert'
import Input from '../components/Ui/Input'
import * as yup from 'yup'
import Spinner from '../components/Ui/Spinner';
import { useAuth } from '../components/auth';
import set_page_title from '../utils/page_title';

type Props = {}
const LoginModel = yup.object({
    username: yup.string().email().required('le champ est obligatoire'),
    password: yup.string().required('le champ est obligatoire')
})
const Login = (props: Props) => {
    set_page_title("login")
    const { register, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(LoginModel)
    });
    const auth = useAuth()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [submiting, setSubmiting] = useState<boolean>(false)
    const [is_open, set_is_open] = useState<boolean>(false)
    useEffect(() =>{
        if(localStorage.getItem('token')){
            window.location.href ='/'
        }
    }, [])
    
    const onSubmit = (body: any): void => {
        axios.post('/auth/login_check', body)
            .then(response => {
                if(response.status === 200){
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('refresh_token', response.data.refresh_token)
                    window.location.href ='/'
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

            <div className="container">
                <div style={{minHeight: '100vh'}} className="row justify-content-md-center align-items-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="text-center">Connexion</h2>
                            </div>
                            <div className="card-body">
                                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="">
                                        <Input input_label="Email" input_name="username" input_type="email" register={register} error_field={errors.username?.message} />
                                    </div>
                                    <div className="">
                                        <Input input_label="mot de passe" input_name="password" input_type="password" register={register} error_field={errors.beds?.message} />
                                    </div>
                                    <div className=" mt-3">
                                    <button disabled={submiting} type="submit" className="btn btn-primary waves-effect waves-light w-100">
                                        {submiting ? <Spinner></Spinner> : 'login'}
                                    </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login