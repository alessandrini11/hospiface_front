import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PersonnelGardeModel from '../../model/PersonnelGarde.model'
import { GardeType, PG, PersonnelGardeType, PersonnelType } from '../../entityPropsType'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Alert from '../../components/Alert'
import Input from '../../components/Ui/Input'
import Select from 'react-select'
import SubmitButton from '../../components/Ui/SubmitButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
type Props = {}

const New = (props: Props) => {
    const { register,resetField, reset, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(PersonnelGardeModel)
    })
    const navigate = useNavigate()
    const {gardeId} = useParams()
    const [garde, set_garde] = useState<GardeType | null>(null)
    const [personnel_garde_to_save, set_personnel_garde_to_save] = useState<PersonnelGardeType[]>([])
    const [personnel_gardes, set_personnel_gardes] = useState<PG[]>([])
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [personnel, set_personnel] = useState<Array<{value: number, label: string}>>()
    const [services, set_services] = useState<Array<{value: number, label: string}>>()
    const [sumbiting, setSubmiting] = useState<boolean>(false)
    
    useEffect(() => {
        axios.get(`/gardes/${gardeId}`)
            .then(response => {
                set_garde(response.data.data)
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
    }, [gardeId])
    
    const delete_personnel = (index: number) => {
        const updated_personnel_gardes: PG[] = [...personnel_gardes]
        updated_personnel_gardes.splice(index, 1)
        set_personnel_gardes(updated_personnel_gardes)
    }
    const onSubmit = (body: any): void => {
        console.log(body)
        set_personnel_gardes([...personnel_gardes, {
            ...body,
            personnel: personnel?.find(perso => perso.value === body.personnel)?.label,
            service: services?.find(service => service.value === body.service)?.label,
            startDate: new Date(body.startDate).toDateString(),
            endDate: new Date(body.endDate).toDateString(),
        }])
        set_personnel_garde_to_save([...personnel_garde_to_save, body])
        reset({})
        resetField('personnel')
        resetField('service')
        resetField('startDate')
        resetField('endDate')
    }
    const create_personnel_garde = () => {
    setSubmiting(true)
    personnel_garde_to_save?.forEach(drug => {
        axios.post(`/personnel_gardes`, {...drug, garde: gardeId})
        .then(response => {
            if(response.status === 201){
                navigate(`/gardes/show/${gardeId}`)
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
    })
    }
    return (
        <>
            { errorMessage && <Alert type="modal" icon="error" title={errorMessage} ></Alert>}
            <div className="grid grid-cols-1 gap-5">
                <div className="">
                    <h1 className="text-4xl text-black font-semibold underline">
                        Date début: {garde && new Date(garde.startDate).toDateString()}, 
                        Date fin: {garde && new Date(garde.endDate).toDateString()}, 
                    </h1>
                    <h2 className="text-2xl">Personnel</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Numéro</th>
                                <th>Personnel</th>
                                <th>Service</th>
                                <th>Date début</th>
                                <th>Date fin</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {personnel_gardes.map((perso, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{perso.personnel}</td>
                                    <td>{perso.service}</td>
                                    <td>{perso.startDate && new Date(perso.startDate).toDateString()}</td>
                                    <td>{perso.endDate && new Date(perso.endDate).toDateString()}</td>
                                    <td> <span onClick={() => delete_personnel(index)}><FontAwesomeIcon className="text-red-500 cursor-pointer" icon={faTrash} /></span> </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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
                    <Input input_label="date début" input_name="startDate" input_type="datetime-local" register={register} error_field={errors.startDate?.message} />
                </div>
                <div className="">
                    <Input input_label="date date fin" input_name="endDate" input_type="datetime-local" register={register} error_field={errors.endDate?.message} />
                </div>
                <div className="flex justify-between gap-5">
                    <button disabled={sumbiting} onClick={create_personnel_garde} type="button" className="w-full lg:w-fit text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ajouter à la liste</button>
                    <SubmitButton submiting={sumbiting} label="enregistrer"/>
                </div>
            </form>
            </div>
        </>
    )
}

export default New