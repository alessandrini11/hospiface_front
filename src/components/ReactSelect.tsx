import React from 'react'
import { Controller } from 'react-hook-form'
import Select from 'react-select'
type Props = {
    input_name: string,
    input_label: string,
    error_field: string | null,
    control: any,
    options: {
        value: string | number,
        label: string
    }[]
}

const ReactSelect = ({input_name, input_label, error_field, control, options}: Props) => {
    return (
        <div className="col">
            <label htmlFor={input_name} className="form-label">{input_label}</label>
            <Controller
                name={input_name}
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value, name, ref } }) => (
                    <Select
                        className={ error_field ?  "form-control is-invalid" : "form-control"}
                        value={options.find((c) => c.value === value)}
                        onChange={value => onChange(value?.value)}
                        options={options}
                        ref={ref}
                        name={name}
                    />
                )}
            />
            {error_field && <div className="invalid-feedback">{error_field}</div>}
        </div>
    )
}

export default ReactSelect