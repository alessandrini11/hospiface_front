import React from 'react'
import ReactSelect from 'react-select'
import animated from 'react-select/animated'
const animatedComponents = animated()
const Select = ({multi, options, inputRef, value, onChange, input_name, input_label}) => {
    return (
        <>
            <label htmlFor={input_name} className="block mb-2 text-sm font-medium text-gray-900">{input_label}</label>
            <ReactSelect
                inputRef={inputRef}
                value={value}
                onChange={onChange}
                closeMenuOnSelect={multi ? false : true}
                components={animatedComponents}
                isMulti={multi ? true : false}
                options={options}
            />
        </>
    )
}

export default Select