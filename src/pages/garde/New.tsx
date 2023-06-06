import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import GardeModel from '../../model/Garde.model'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { garde_status, messages } from '../../utils/constants';
import Alert from '../../components/Alert';
import Input from '../../components/Ui/Input';
import Select from 'react-select'
import SubmitButton from '../../components/Ui/SubmitButton';
type Props = {}

const New = (props: Props) => {
    const { register, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(GardeModel)
    });
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [sumbiting, setSubmiting] = useState<boolean>(false)
    const onSubmit = (body: any): void => {
        setSubmiting(true)
        axios.post('/gardes', body)
            .then(response => {
                if(response.status === 201){
                    localStorage.setItem('gardes', messages.created)
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
                <h2>Enregistrez une garde</h2>
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
                    <SubmitButton submiting={sumbiting} label="enregistrer"/>
                </div>
            </form>
        </>
    )
}

export default New