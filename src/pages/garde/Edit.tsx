import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import GardeModel from '../../model/Garde.model';
import { garde_status, messages } from '../../utils/constants';
import Select from 'react-select'
import Alert from '../../components/Alert';
import Input from '../../components/Ui/Input';
import SubmitButton from '../../components/Ui/SubmitButton';
import { GardeType } from '../../entityPropsType';

type Props = {}

const Edit = (props: Props) => {
    const { register, reset, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(GardeModel)
    });
    const navigate = useNavigate()
    const {gardeId} = useParams()
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [sumbiting, setSubmiting] = useState<boolean>(false)
    
    useEffect(() => {
        axios.get(`/gardes/${gardeId}`)
            .then(response => {
                const garde: GardeType = response.data.data
                reset({
                    ...garde,
                    status: garde.status,
                    startDate: `${new Date(garde.startDate).getFullYear()}-${new Date(garde.startDate).getMonth() > 8 + 1 ? new Date(garde.startDate).getMonth() > 9 : `0${new Date(garde.startDate).getMonth() + 1}` }-${new Date(garde.startDate).getDay() > 9 ? new Date(garde.startDate).getDay() : `0${new Date(garde.startDate).getDay() + 1}`}`,
                    endDate: `${new Date(garde.endDate).getFullYear()}-${new Date(garde.endDate).getMonth() > 8 + 1 ? new Date(garde.endDate).getMonth() > 9 : `0${new Date(garde.endDate).getMonth() + 1}` }-${new Date(garde.endDate).getDay() > 9 ? new Date(garde.endDate).getDay() : `0${new Date(garde.endDate).getDay() + 1}`}`,
                })
                console.log(garde)
            })
            .catch(error => {
                if(error.response){
                    setErrorMessage(error.response.data.error.message)
                }else {
                    setErrorMessage(error.message)
                }
            })
    }, [gardeId])
    const onSubmit = (body: any): void => {
        setSubmiting(true)
        axios.put(`/gardes/${gardeId}`, body)
            .then(response => {
                if(response.status === 200){
                    localStorage.setItem('gardes', messages.updated)
                    navigate('/gardes')
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
                    <Input input_label="date début" input_name="startDate" input_type="date" register={register} error_field={errors.startDate?.message} />
                </div>
                <div className="">
                    <Input input_label="date date fin" input_name="endDate" input_type="date" register={register} error_field={errors.endDate?.message} />
                </div>
                <div className="">
                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                        <Controller
                            name="status"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <Select
                                    value={garde_status.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={garde_status}
                                    ref={ref}
                                    name={name}
                                />
                            )}
                        />
                </div>
                <div className="">
                    <SubmitButton submiting={sumbiting} label="mise à jour"/>
                </div>
            </form>
        </>
    )
}

export default Edit