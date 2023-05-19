import React from 'react'

const Input = ({input_name, input_type, register, input_label, error_field}) => {
    const input_error_classes = "border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:border-red-500 block w-full p-2.5"
    const input_normal_classes = "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:ring-blue-500"
    const label_normal_classes = "capitalize block mb-2 text-sm font-medium text-gray-900"
    const label_error_classes = "capitalize block mb-2 text-sm font-medium text-red-700"
    return (
        <>
            <label htmlFor={input_name} className={ error_field ?  label_error_classes : label_normal_classes}>{input_label}</label>
            <input {...register(input_name)} type={input_type}  id={input_name} className={error_field ? input_error_classes : input_normal_classes} placeholder={input_label}/>
            { error_field && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error_field}</p>}
        </>
    )
}

export default Input