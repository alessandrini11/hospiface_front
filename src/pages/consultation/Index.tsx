import React, { useEffect, useState } from 'react'
import Alert from '../../components/Alert'
import {ConsultationType, Pagination} from '../../entityPropsType/index'
import Spinner from '../../components/Ui/Spinner'
import { messages, consultation_columns } from '../../utils/constants'
import { useSearchParams } from 'react-router-dom'
import axios from '../../config/axios'
import Swal from 'sweetalert2'
import ConsultationTable from '../../components/ConsultationTable'
import URLS from '../../utils/app_urls'
type Props = {}

const Index = (props: Props) => {
    const [search_params, set_search_params] = useSearchParams()
    const [created_message, set_created_message] = useState<string | null>(null)
    const [error_message, set_error_message] = useState(null)
    const [pagination, set_pagination] = useState<Pagination | null>(null)
    const [personnel, set_personnel] = useState<ConsultationType[] | null>(null)
    const [page, set_page] = useState<string | null>(search_params.get('page'))
    const [query, setQuery] = useState(search_params.get('query'))

    useEffect(() => {
        get_consultations()
        return () => {
            localStorage.removeItem('consultations')
        }
    }, [page, query])
    const get_consultations = () => {
        axios.get(`/consultations?actualPage=${page || 1}&query=${query || ''}`)
            .then(response => {
                set_personnel(response.data.data.data)
                set_pagination({
                    actual_Page: response.data.data.page,
                    total_Page: response.data.data.totalPages
                })
            })
            .catch(error => {
                set_error_message(error.message)
            })
            .finally(() => {
                if(localStorage.getItem('consultations')){
                    set_created_message(localStorage.getItem('consultations'))
                }
            })
    }
    const handle_click = (id: number): void => {
        Swal.fire({
            title: 'Voulez vous supprimer ?',
            showCancelButton: true,
            showConfirmButton: true,
            icon: 'info',
            confirmButtonText: 'Oui',
            cancelButtonText: 'Non'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/patients/${id}`)
                    .then(response => {
                        Swal.fire({
                            title: 'success',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        .then(result => {
                            if(result.isConfirmed){
                                localStorage.setItem('personnel', messages.deleted)
                                get_consultations()
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
    const data = !personnel ?
    <div style={{height: '70vh'}} className="d-flex align-items-center justify-content-center">
        <Spinner></Spinner>
    </div> :
    <ConsultationTable newUrl={URLS.consultations.new} handle_click={handle_click} pagination={pagination} columns={consultation_columns} entities={personnel} page="consultations" />

    return (
        <>
            {created_message && <Alert type="toast" icon="success" title="" message={created_message} />}
            {error_message && <Alert type="modal" icon="error" title={error_message} />}
            <div className="row">   
                {data}
            </div>
        </>
    )
}

export default Index