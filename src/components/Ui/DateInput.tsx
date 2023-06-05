import React from 'react'
type Props = {
  input_label: string,
  input_name: string
}
const DateInput = ({input_label, input_name}) => {
  return (
    <>
        <label htmlFor={input_name}>{input_label}</label>
        <input type="datetime-local" name={input_name} id={input_name} />
    </>
  )
}

export default DateInput