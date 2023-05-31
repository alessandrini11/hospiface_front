import React, { useEffect, useState } from 'react'
import AffectationModel from '../../model/Affectation.model';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { PersonnelType } from '../../entityPropsType';
import axios from 'axios';
import { messages, position_held } from '../../utils/constants';
import Alert from '../../components/Alert';
import Select from 'react-select'
import SubmitButton from '../../components/Ui/SubmitButton'

type Props = {}

const New = (props: Props) => {
    const { handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(AffectationModel)
    });
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [sumbiting, setSubmiting] = useState<boolean>(false)
    const [personnel, set_personnel] = useState<Array<{value: number, label: string}>>()
    const [services, set_services] = useState<Array<{value: number, label: string}>>()
    
    useEffect(() => {
        axios.get('/personnels')
            .then(response => {
                const personnelArr: Array<{label: string, value: number}>=[]
                const perso: PersonnelType[] = response.data.data.data
                perso.forEach(doc => {
                    personnelArr.push({value: doc.id, label: `${doc.title} ${doc.firstName} ${doc.lastName}`})
                })
                set_personnel(personnelArr)
            })
        axios.get('/medical_services')
            .then(response => {
                const serviceArr: Array<{label: string, value: number}>=[]
                response.data.data.data.forEach(service => {
                    serviceArr.push({value: service.id, label: service.name})
                })
                set_services(serviceArr)
            })
    }, [])
    const onSubmit = (body: any): void => {
        setSubmiting(true)
        axios.post('/personnel_services', body)
            .then(response => {
                if(response.status === 201){
                    localStorage.setItem('affectations', messages.created)
                    navigate('/affectations')
                }
            })
            .catch(error => {
                setSubmiting(true)
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
                    <label htmlFor="personnel" className="block mb-2 text-sm font-medium text-gray-900">Personnel</label>
                        <Controller
                            name="personnel"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <Select
                                    value={personnel?.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={personnel}
                                    ref={ref}
                                    name={name}
                                />
                            )}
                        />
                </div>
                <div className="">
                    <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-900">Service</label>
                        <Controller
                            name="service"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <Select
                                    value={services?.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={services}
                                    ref={ref}
                                    name={name}
                                />
                            )}
                        />
                </div>
                <div className="">
                    <label htmlFor="positionHeld" className="block mb-2 text-sm font-medium text-gray-900">Poste occupé</label>
                        <Controller
                            name="positionHeld"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <Select
                                    value={position_held?.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={position_held}
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