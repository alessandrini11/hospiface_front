import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select'
import UserModel from '../../model/User.model';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../config/axios';
import { messages, personnel_status, sexs, users_roles } from '../../utils/constants';
import Alert from '../../components/Alert';
import Input from '../../components/Ui/Input'
import SubmitButton from '../../components/Ui/SubmitButton'
import { yupResolver } from '@hookform/resolvers/yup';
type Props = {}

const Edit = (props: Props) => {
    const { register, handleSubmit, reset, control, formState:{ errors } } = useForm({
        resolver: yupResolver(UserModel)
    });
    const {userId} = useParams()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [sumbiting, setSubmiting] = useState<boolean>(false)

    useEffect(() => {
        axios.get(`/users/${userId}`)
            .then(response => {
                reset({...response.data.data, role: response.data.data.roles[0]})
            })
            .catch(error => {
                if(error.response){
                    setErrorMessage(error.response.data.error.message)
                }else {
                    setErrorMessage(error.message)
                }
            })
    }, [userId])
    const onSubmit = (body: any): void => {
        setSubmiting(true)
        let submitedBody: any = body
        if(body.password === ""){
            submitedBody = {...body, password: null}
        }
        axios.put(`/users/${userId}`, submitedBody)
            .then(response => {
                if(response.status === 200){
                    localStorage.setItem('users', messages.updated)
                    navigate('/users')
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
                <h2>Modifier un utilisateur</h2>
                <div className="">
                    <Input input_label="nom" input_name="firstname" input_type="text" register={register} error_field={errors.firstname?.message} />
                </div>
                <div className="">
                    <Input input_label="prenom" input_name="lastname" input_type="text" register={register} error_field={errors.lastname?.message} />
                </div>
                <div className="">
                    <label htmlFor="sex" className="block mb-2 text-sm font-medium text-gray-900">Sexe</label>
                        <Controller
                            name="sex"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <Select
                                    value={sexs?.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={sexs}
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
                    <Input input_label="téléphone" input_name="phonenumber" input_type="tel" register={register} error_field={errors.phonenumber?.message} />
                </div>
                <div className="">
                    <Input input_label="mot de passe" input_name="password" input_type="password" register={register} error_field={errors.password?.message} />
                </div>
                <div className="">
                    <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">Role</label>
                        <Controller
                            name="role"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <Select
                                    value={users_roles?.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={users_roles}
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
                                    value={personnel_status?.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={personnel_status}
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

export default Edit