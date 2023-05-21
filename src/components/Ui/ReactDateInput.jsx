import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Datepicker from 'tailwind-datepicker-react'

const options = {
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		input: "",
		inputIcon: "",
		selected: "",
	},
	icons: {
		// () => ReactElement | JSX.Element
		prev: () => <span><FontAwesomeIcon icon={faArrowLeft}/></span>,
		next: () => <span><FontAwesomeIcon icon={faArrowRight}/></span>,
	},
	datepickerClassNames: "top-12",
	defaultDate: new Date(),
	language: "fr",

}
const ReactDateInput = ({input_name, handleChange}) => {
  const [show, setShow] = useState(false)
	const handleClose = (state) => {
		setShow(state)
	}
    return (
      <>
        <label htmlFor="">{input_name}</label>
        <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
      </>
    )
}

export default ReactDateInput