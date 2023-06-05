import React from 'react'
type Props = {
    input_name: string,
    input_type: string,
    register: any,
    input_label: string,
    error_field: string | null
}
const Input = ({input_name, input_type, register, input_label, error_field}: Props) => {
    return (
        <div className="col">
            <label htmlFor={input_name} className="form-label">{input_label}</label>
            <input {...register(input_name)} type={input_type} className={ error_field ?  "form-control is-invalid" : "form-control"} id={input_name}/>
            {error_field && <div className="invalid-feedback">{error_field}</div>}
        </div>
    )
}

export default Input