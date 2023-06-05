import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import AffectationModel from '../../model/Affectation.model';
import { yupResolver } from '@hookform/resolvers/yup';
import { PersonnelServiceType, PersonnelType } from '../../entityPropsType';
import { messages, position_held } from '../../utils/constants';
import Alert from '../../components/Alert';
import SubmitButton from '../../components/Ui/SubmitButton';
import Select from 'react-select'
const Edit = () => {
    const { handleSubmit, control, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(AffectationModel)
    });
    const {affectionId} = useParams()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [sumbiting, setSubmiting] = useState<boolean>(false)
    const [personnels, set_personnels] = useState<Array<{value: number, label: string}>>()
    const [services, set_services] = useState<Array<{value: number, label: string}>>()
    
    useEffect(() => {
        axios.get(`/personnel_services/${affectionId}`)
            .then(response => {
                const affectation: PersonnelServiceType = response.data.data
                reset({...affectation, personnel: affectation.personnel.id, service: affectation.service.id})
            })
            .catch(error => {
                if(error.response){
                    setErrorMessage(error.response.data.error.message)
                }else {
                    setErrorMessage(error.message)
                }
            })
        axios.get('/personnels')
            .then(response => {
                const personnelArr: Array<{label: string, value: number}>=[]
                const perso: PersonnelType[] = response.data.data.data
                perso.forEach(doc => {
                    personnelArr.push({value: doc.id, label: `${doc.title} ${doc.firstName} ${doc.lastName}`})
                })
                set_personnels(personnelArr)
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
        axios.put(`/personnel_services/${affectionId}`, body)
            .then(response => {
                if(response.status === 201){
                    localStorage.setItem('affectations', messages.updated)
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
                <h2>Modifier une affectation</h2>
                <div className="">
                    <label htmlFor="personnel" className="block mb-2 text-sm font-medium text-gray-900">Personnel</label>
                        <Controller
                            name="personnel"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <Select
                                    value={personnels?.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={personnels}
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

export default Edit