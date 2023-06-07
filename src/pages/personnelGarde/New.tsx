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
    const [submiting, setSubmiting] = useState<boolean>(false)
    
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
                const perso: PersonnelType[] = response.data.data.data.filter((perso: PersonnelType) => (
                    perso.subType === "doctor" && perso.status === 1
                ))
                
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
        set_personnel_garde_to_save([...personnel_garde_to_save, body])
        set_personnel_gardes([...personnel_gardes, {
            ...body,
            personnel: personnel?.find(perso => perso.value === body.personnel)?.label,
            service: services?.find(service => service.value === body.service)?.label,
            startDate: new Date(body.startDate).toDateString(),
            endDate: new Date(body.endDate).toDateString(),
        }])
        reset({})
        resetField('personnel')
        resetField('service')
        resetField('startDate')
        resetField('endDate')
    }

    const create_personnel_garde = () => {
        setSubmiting(true)
        personnel_garde_to_save?.map(perso => {
            console.log({...perso, garde: gardeId && parseInt(gardeId)})
            axios.post(`/personnel_gardes`, {...perso, garde: gardeId && parseInt(gardeId)})
            .then(response => {
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
        // navigate(`/gardes/show/${gardeId}`)
    }
    return (
        <>
            { errorMessage && <Alert type="modal" icon="error" title={errorMessage} ></Alert>}
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="">Date début: {garde && new Date(garde.startDate).toDateString()}</h1>
                            <h1>Date fin: {garde && new Date(garde.endDate).toDateString()}</h1>
                            <h2 className="">Personnel</h2>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive table-card">
                                <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                    <thead className="text-muted table-light">
                                        <tr>
                                            <td>Numéro</td>
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
                                                <td> <span onClick={() => delete_personnel(index)}><FontAwesomeIcon className="text-danger" icon={faTrash} /></span> </td>
                                            </tr>
                                        ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
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
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <button disabled={submiting} type="submit" className="w-100 btn btn-secondary waves-effect waves-light">Ajouter à la liste</button>
                                    </div>
                                    <div className="col-md-6">
                                        <button onClick={create_personnel_garde} type="button" className="w-100 btn btn-success waves-effect waves-light">
                                        {!submiting ? "Enregistrez" :
                                            <span className="d-flex align-items-center d-block justify-content-center">
                                                <span className="spinner-border flex-shrink-0" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </span>
                                            </span>
                                        }
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default New