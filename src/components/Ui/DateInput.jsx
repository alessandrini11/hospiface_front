import React from 'react'

const DateInput = ({input_label, input_name, onChange}) => {
  return (
    <>
        <label htmlFor={input_name}>{input_label}</label>
        <input type="datetime-local" name={input_name} id={input_name} />
    </>
  )
}

export default DateInput