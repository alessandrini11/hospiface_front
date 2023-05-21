import React from 'react'
import Spinner from './Spinner'
const SubmitButton = ({label, submiting}) => {
  return (
    <button disabled={submiting} type="submit" className="flex justify-center items-center w-full lg:w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
      {submiting ? <Spinner></Spinner> : label}
    </button>
  )
}

export default SubmitButton