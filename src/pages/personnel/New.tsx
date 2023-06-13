import React, { useEffect, useState } from 'react'
import Alert from '../../components/Alert'
import Input from '../../components/Ui/Input'
import { Controller, useForm} from 'react-hook-form'
import ReactSelect from 'react-select'
import SubmitButton from '../../components/Ui/SubmitButton'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import PersonnelModel from '../../model/Personnel.model'
import axios from '../../config/axios'
import { messages, 
    personnel_position, 
    personnel_subType, 
    personnel_title, 
    personnel_type, sexs 
} from '../../utils/constants'
import { personnel_status } from '../../utils/constants'
import { blood_groups } from '../../utils/constants'

type Props = {}

const New = (props: Props) => {
    const { register, getValues, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(PersonnelModel)
    });
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [sumbiting, setSubmiting] = useState<boolean>(false)
    const [specialities, set_specialities] = useState<Array<{value: number, label: string}>>()
    const [sub_type, set_sub_type] = useState<Array<{value: string, label: string}>>([])
    const [is_doctor, set_is_doctor] = useState(false)
    useEffect(() => {
        axios.get('/specialities')
            .then(response => {
                const specialityArr: Array<{label: string, value: number}>=[]
                response.data.data.data.forEach((serv: any) =>  {
                    specialityArr.push({label: serv.name, value: serv.id})
                })
                set_specialities(specialityArr)
            })
    }, [])
    const onSubmit = (body: any): void => {
        console.log(body)
        setSubmiting(true)
        const reqBody = {...body, service: [body.service]}
        axios.post('/personnels', body)
            .then(response => {
                if(response.status === 201){
                    localStorage.setItem('personnel', messages.created)
                    navigate('/personnel')
                }
            })
            .catch(error => {
                setSubmiting(false)
                setErrorMessage(error.message)
            })
    }
    return (
        <>
            { errorMessage && <Alert type="modal" icon="error" title={errorMessage} ></Alert>}
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                <h2>Enregistrer un membre du personnel</h2>
                <div className="">
                    <Input input_label="nom" input_name="firstName" input_type="text" register={register} error_field={errors.firstName?.message} />
                </div>
                <div className="">
                    <Input input_label="prenom" input_name="lastName" input_type="text" register={register} error_field={errors.lastName?.message} />
                </div>
                <div className="">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Titre</label>
                        <Controller
                            name="title"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <ReactSelect
                                    value={personnel_title.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={personnel_title}
                                    ref={ref}
                                    name={name}
                                />
                            )}
                        />
                </div>
                <div className="">
                    <label htmlFor="speciality" className="block mb-2 text-sm font-medium text-gray-900">Specialité</label>
                        <Controller
                            name="speciality"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <ReactSelect
                                    value={specialities?.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={specialities}
                                    ref={ref}
                                    name={name}
                                />
                            )}
                        />
                </div>
                {/* { getValues("title") == "Dr." || getValues("title") == "Pr." ? <div className="">
                    <label htmlFor="speciality" className="block mb-2 text-sm font-medium text-gray-900">Specialité</label>
                        <Controller
                            name="speciality"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <ReactSelect
                                    value={specialities?.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={specialities}
                                    ref={ref}
                                    name={name}
                                />
                            )}
                        />
                </div> : null} */}
                <div className="">
                    <label htmlFor="sex" className="block mb-2 text-sm font-medium text-gray-900">Sexe</label>
                        <Controller
                            name="sex"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <ReactSelect
                                    value={sexs.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={sexs}
                                    ref={ref}
                                    name={name}
                                />
                            )}
                        />
                </div>
                <div className="">
                    <label htmlFor="positionHeld" className="block mb-2 text-sm font-medium text-gray-900">Poste Occupé</label>
                        <Controller
                            name="positionHeld"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <ReactSelect
                                    value={personnel_position.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={personnel_position}
                                    ref={ref}
                                    name={name}
                                />
                            )}
                        />
                </div>
                <div className="">
                    <label htmlFor="bloodGroup" className="block mb-2 text-sm font-medium text-gray-900">Groupe Sanguain</label>
                        <Controller
                            name="bloodGroup"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <ReactSelect
                                    value={blood_groups.find((c) => c.value === value)}
                                    onChange={value => onChange(value?.value)}
                                    options={blood_groups}
                                    ref={ref}
                                    name={name}
                            />
                            )}
                        />
                </div>
                <div className="">
                    <Input input_label="date de naissance" input_name="birthDate" input_type="date" register={register} error_field={errors.birthDate?.message} />
                </div>
                <div className="">
                    <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">Type</label>
                        <Controller
                            name="type"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <ReactSelect
                                    value={personnel_type.find((c) => c.value === value)}
                                    onChange={value => {
                                        set_sub_type([])
                                        set_sub_type(personnel_subType[value?.value])
                                        return onChange(value?.value)
                                    }}
                                    options={personnel_type}
                                    ref={ref}
                                    name={name}
                                />
                            )}
                        />
                </div>
                <div className="">
                    <label htmlFor="subType" className="block mb-2 text-sm font-medium text-gray-900">Sous Type</label>
                        <Controller
                            name="subType"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, name, ref } }) => (
                                <ReactSelect
                                value={sub_type?.find((c) => c?.value === value)}
                                onChange={value => onChange(value?.value)}
                                options={sub_type}
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
                    <Input input_label="numéro téléphone" input_name="phoneNumber" input_type="tel" register={register} error_field={errors.phoneNumber?.message} />
                </div>
                <div className="">
                <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                    <Controller
                        name="status"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, value, name, ref } }) => (
                            <ReactSelect
                            value={personnel_status.find((c) => c.value === value)}
                            onChange={value => onChange(value?.value)}
                            options={personnel_status}
                            ref={ref}
                            name={name}
                        />
                        )}
                    />
                </div>
                <div className="row mt-2">
                    <SubmitButton submiting={sumbiting} label="enregistrer"/>
                </div>
            </form>
        </>
    )
}

export default New