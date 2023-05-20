import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import Layout from '../../components/Layout';
import Select from '../../components/Ui/Select';
import SubmitButton from '../../components/Ui/SubmitButton';
import * as yup from 'yup'
import Input from '../../components/Ui/Input';

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().min(5).required(),
    gender: yup.number(),
    password: yup.string().min(8).max(10)
}).required()

const Edit = () => {
    const { register, handleSubmit, formState:{ errors,  } } = useForm({
        resolver: yupResolver(schema)
      });
    const onSubmit = data => console.log(data) 
    return (
        <Layout>
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <Input input_label="first name" input_name="firstName" input_type="text" register={register} error_field={errors.firstName?.message} />
                </div>
                <div className="">
                    <Input input_label="last name" input_name="lastName" input_type="text" register={register} error_field={errors.lastName?.message} />
                </div>
                <div className="">
                    <Select options={[{ value: 1, label: 'male' },{ value: 2, label: 'female' }]} input_label="gender" input_name="gender"/>
                </div>
                <div className="">
                    <Input input_label="password" input_name="password" input_type="password" register={register} error_field={errors.password?.message}/>
                </div>
                <SubmitButton label="submit"/>
            </form>
        </Layout>
    )
}

export default Edit