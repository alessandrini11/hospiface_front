import React from 'react'
import Spinner from './Spinner'
const SubmitButton = ({label, submiting}) => {
  return (
        <button disabled={submiting} type="submit" className="btn btn-success btn-load d mt-2">
            {!submiting ? label :
            <span className="d-flex align-items-center d-block justify-content-center">
                <span className="spinner-border flex-shrink-0" role="status">
                    <span className="visually-hidden">Loading...</span>
                </span>
            </span>
          }
        </button>
  )
}

export default SubmitButton