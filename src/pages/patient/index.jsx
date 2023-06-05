import React, { Fragment, useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import CardContainer from '../../components/Cards/CardContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import Table from '../../components/Table'
import SearchForm from '../../components/SearchForm'
import Alert from '../../components/Alert'
import axios from 'axios'
import { patient_columns } from '../../utils/constants'
import { Link, useSearchParams } from 'react-router-dom'
import Spinner from '../../components/Ui/Spinner'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import URLS from '../../utils/app_urls'

const index = () => {
    const [search_params, set_search_params] = useSearchParams()
    const [page, set_page] = useState(search_params.get('page'))
    const [query, setQuery] = useState(search_params.get('query'))
    const [entity, set_entity] = useState(null)
    const [pagination, set_pagination] = useState({})
    const [loading, set_loading] = useState(true)
    const [created_message, set_created_message] = useState(null)
    const [error_message, set_error_message] = useState(null)
    const [confirm_delete, set_confirm_delete] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`/patients?actualPage=${page || 1}&query=${query || ''}`)
            .then(response => {
                set_entity(response.data.data.data)
                set_pagination({
                    actual_Page: response.data.data.page,
                    total_Page: response.data.data.totalPages
                })
            })
            .catch(error => {
                set_error_message(error.message)
            })
        set_loading(false)
        if(localStorage.getItem('patient')){
            set_created_message(localStorage.getItem('patient'))
        }
        return () => {
            localStorage.removeItem('patient')
        }
    }, [page, query])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Voulez vous supprimer ?',
            showCancelButton: true,
            showConfirmButton: true,
            icon: 'info',
            confirmButtonText: 'Oui',
            cancelButtonText: 'Non'
          }).then((result) => {
            if (result.isConfirmed) {
                console.log('deleted')
                axios.delete(`/patients/${id}`)
                    .then(response => {
                        Swal.fire({
                            title: 'success',
                            icon: 'success',
                            isDismissed: false,
                            confirmButtonText: 'Ok'
                        })
                        .then(result => {
                            if(result.isConfirmed){
                                window.location.href = "/patients"
                            }
                        })
                    })
                    .catch(error => {
                        set_error_message(error.message)
                    })
            } else if (result.isDismissed || result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }
    const data = !entity ? 
    <div style={{height: '90%'}} className="d-flex align-items-center justify-content-center">
        <Spinner></Spinner>
    </div> : 
    <Table newUrl={URLS.patient.new} handle_click={handleDelete} page="patients" columns={patient_columns} entities={entity} pagination={pagination}/>
    
    return (
        <Fragment>
            { created_message && <Alert type="toast" icon="success" message={created_message} ></Alert>}
            { error_message && <Alert type="modal" icon="error" title={error_message} ></Alert>}
            <div className="row">
                {data}
            </div>
        </Fragment>
    )
}

export default index