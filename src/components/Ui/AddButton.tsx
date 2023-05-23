import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    url: string
}

const AddButton = (props: Props) => {
  return (
    <Link to={props.url} className="inline-block text-green-700 bg-green-300 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Ajouter <FontAwesomeIcon icon={faPlus}/></Link>
  )
}

export default AddButton