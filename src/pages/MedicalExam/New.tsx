import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { medical_exam } from '../../utils/constants';
import Select from 'react-select'
import Alert from '../../components/Alert';
import Input from '../../components/Ui/Input';
import SubmitButton from '../../components/Ui/SubmitButton';
import axios from 'axios';
import MedicalExam from '../../model/MedicalExam';
import { useNavigate, useParams } from 'react-router-dom';
import { MedicalExamType } from '../../entityPropsType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

type Props = {}

function New({}: Props) {
  const { register, reset, handleSubmit, control, formState:{ errors } } = useForm({
    resolver: yupResolver(MedicalExam)
  })
  const {resultId} = useParams()
  const [medical_exams, set_medical_exams] = useState<MedicalExamType[]>([])
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [sumbiting, setSubmiting] = useState<boolean>(false)
  
  const delete_drug = (index: number) => {
    const updated_medical_exam: MedicalExamType[] = [...medical_exams]
    updated_medical_exam.splice(index, 1)
    set_medical_exams(updated_medical_exam)
  }
  const onSubmit = (body: any): void => {
    set_medical_exams([...medical_exams, body])
    reset({})
  }
  const createMedicalExam = () => {
    setSubmiting(true)
    medical_exams?.forEach(exam => {
      axios.post(`/medical_exams`, {...exam, result: resultId})
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
              {medical_exams?.map((exam, index) => (
                <li key={index}>
                  <span>numéro: {index + 1}</span>
                  <span>Type: </span> {exam.type}
                  <span>Description: </span> {exam.description}
                  <span className="cursor-pointer" onClick={() => delete_drug(index)}><FontAwesomeIcon className="text-red-500" icon={faTrash} /></span>
                </li>
              ))}
            </ul>
        </div>
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="">
              <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">Type</label>
                  <Controller
                      name="type"
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { onChange, value, name, ref } }) => (
                          <Select
                              value={medical_exam.find((c) => c.value === value)}
                              onChange={value => onChange(value?.value)}
                              options={medical_exam}
                              ref={ref}
                              name={name}
                          />
                      )}
                  />
          </div>
          <div className="">
              <Input input_label="description" input_name="description" input_type="textarea" register={register} error_field={errors.description?.message} />
          </div>
          <div className="flex justify-between gap-5">
            <button disabled={sumbiting} onClick={createMedicalExam} type="button" className="w-full lg:w-fit text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ajouter à la liste</button>
            <SubmitButton submiting={sumbiting} label="enregistrer"/>
          </div>
      </form>
      </div>
    </>
  )
}

export default New