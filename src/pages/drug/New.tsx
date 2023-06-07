import { yupResolver } from '@hookform/resolvers/yup'
import {v4 as uuidv4} from 'uuid'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import DrugModel from '../../model/Drug.model'
import { useNavigate, useParams } from 'react-router-dom'
import { DrugType } from '../../entityPropsType'
import axios from 'axios'
import Alert from '../../components/Alert'
import Input from '../../components/Ui/Input'
import SubmitButton from '../../components/Ui/SubmitButton'
import Select from 'react-select'
import { drug_dosage } from '../../utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const New = (props: Props) => {
    const { register, reset, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(DrugModel)
    })
    const fakeId = uuidv4()
    const {orderId} = useParams()
    const [drugs, set_drugs] = useState<DrugType[]>([])
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [submiting, setSubmiting] = useState<boolean>(false)
    
    const delete_drug = (index: number) => {
        const updated_drugs: DrugType[] = [...drugs]
        updated_drugs.splice(index, 1)
        set_drugs(updated_drugs)
    }
    const onSubmit = (body: any): void => {
        set_drugs([...drugs, body])
        reset({})
    }
    const create_drug = () => {
        setSubmiting(true)
        drugs?.forEach(drug => {
            axios.post(`/drugs`, {...drug, medicalOrder: orderId})
            .then(response => {
                navigate(-1)
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
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                        <div className="d-flex">
                            <h5 className="card-title mb-0 flex-grow-1">Examen Médical</h5>
                        </div>
                        </div>
                        <div className="card-body">
                        <div className="table-responsive table-card">
                            <table className="table table-nowrap">
                                <thead className="text-muted table-light">
                                    <tr>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Posologie</th>
                                        <th scope="col">Jours</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    drugs.map((exam, index) =>  (
                                        <tr key={index}>
                                            <td>{exam.name}</td>
                                            <td>{exam.dosage}</td>
                                            <td>{exam.days}</td>
                                            <td>
                                                <span onClick={() => delete_drug(index)} className="text-danger"><FontAwesomeIcon icon={faTrash} /></span>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body"> 
                            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                                <div className="">
                                    <Input input_label="nom" input_name="name" input_type="text" register={register} error_field={errors.name?.message} />
                                </div>
                                <div className="">
                                    <label htmlFor="dosage" className="block mb-2 text-sm font-medium text-gray-900">Posologie</label>
                                        <Controller
                                            name="dosage"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field: { onChange, value, name, ref } }) => (
                                                <Select
                                                    value={drug_dosage.find((c) => c.value === value)}
                                                    onChange={value => onChange(value?.value)}
                                                    options={drug_dosage}
                                                    ref={ref}
                                                    name={name}
                                                />
                                            )}
                                        />
                                </div>
                                <div className="">
                                    <Input input_label="Nombre de jour" input_name="days" input_type="number" register={register} error_field={errors.days?.message} />
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <button disabled={submiting} type="submit" className="w-100 btn btn-secondary waves-effect waves-light">Ajouter à la liste</button>
                                    </div>
                                    <div className="col-md-6">
                                        <button onClick={create_drug} type="button" className="w-100 btn btn-success waves-effect waves-light">
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