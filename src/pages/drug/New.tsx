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
    const [sumbiting, setSubmiting] = useState<boolean>(false)
    
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="">
                    <ul>
                    {drugs?.map((drug, index) => (
                        <li key={index}>
                        <span>numéro: {index + 1}</span>
                        <span>Name: </span> {drug.name}
                        <span>Dosage: </span> {drug.dosage}
                        <span className="cursor-pointer" onClick={() => delete_drug(index)}><FontAwesomeIcon className="text-red-500" icon={faTrash} /></span>
                        </li>
                    ))}
                    </ul>
                </div>
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
                <div className="flex justify-between gap-5">
                    <button disabled={sumbiting} onClick={create_drug} type="button" className="w-full lg:w-fit text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ajouter à la liste</button>
                    <SubmitButton submiting={sumbiting} label="enregistrer"/>
                </div>
            </form>
            </div>
        </>
    )
}

export default New