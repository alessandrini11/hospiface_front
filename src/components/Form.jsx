import React from 'react'
import Input from './Ui/Input'
import Select from './Ui/Select'

const Form = ({onSubmit, register, form_fields}) => {
    const fields = form_fields.map((field, index) => {
            if (field.input_type === "select") {
                return <div key={index} className="">
                    <Select input_name={field.input_name} input_label={field.input_label} register={register} options={field.options} multi/>
                </div>
            }else {
                return <div key={index} className="">
                    <Input error_field={field.error} register={register} input_name={field.input_name} input_label={field.input_label} input_type={field.input_type} />
                </div>
            }
    })
    return (
        <form onSubmit={onSubmit} className="space-y-3">
            {fields}
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
    )
}

export default Form