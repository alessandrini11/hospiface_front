import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { medical_exam } from '../../utils/constants';
import Select from 'react-select'
import Alert from '../../components/Alert';
import Input from '../../components/Ui/Input';
import axios from '../../config/axios';
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
  const [submiting, setSubmiting] = useState<boolean>(false)
  
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
                              <th scope="col">Description</th>
                              <th scope="col">Action</th>
                          </tr>
                      </thead>
                      <tbody>
                      {
                          medical_exams.map((exam, index) =>  (
                              <tr key={index}>
                                  <td>{exam.type}</td>
                                  <td>{exam.description}</td>
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
                <div className="row mt-3">
                  <div className="col-md-6">
                    <button disabled={submiting} type="submit" className="w-100 btn btn-secondary waves-effect waves-light">Ajouter à la liste</button>
                  </div>
                  <div className="col-md-6">
                    <button onClick={createMedicalExam} type="button" className="w-100 btn btn-success waves-effect waves-light">
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