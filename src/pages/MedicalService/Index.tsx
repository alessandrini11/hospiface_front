import React, { useEffect, useState } from 'react'
import { Pagination, ServiceType } from '../../entityPropsType'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { messages, service_columns } from '../../utils/constants'
import Spinner from '../../components/Ui/Spinner'
import Alert from '../../components/Alert'
import CardContainer from '../../components/Cards/CardContainer'
import SearchForm from '../../components/SearchForm'
import AddButton from '../../components/Ui/AddButton'
import ServiceTable from '../../components/ServiceTable'
import URLS from '../../utils/app_urls'

type Props = {}

const Index = (props: Props) => {
    const [search_params, set_search_params] = useSearchParams()
    const [created_message, set_created_message] = useState<string | null>(null)
    const [error_message, set_error_message] = useState(null)
    const [pagination, set_pagination] = useState<Pagination | null>(null)
    const [services, set_services] = useState<ServiceType[] | null>(null)
    const [page, set_page] = useState<string | null>(search_params.get('page'))
    const [query, setQuery] = useState(search_params.get('query'))
    useEffect(() => {
        axios.get(`/medical_services?actualPage=${page || 1}&query=${query || ''}`)
            .then(response => {
                set_services(response.data.data.data)
                set_pagination({
                    actual_Page: response.data.data.page,
                    total_Page: response.data.data.totalPages
                })
            })
            .catch(error => {
                set_error_message(error.message)
            })
        if(localStorage.getItem('services')){
            set_created_message(localStorage.getItem('services'))
        }
        return () => {
            localStorage.removeItem('services')
        }
    }, [page, query])
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
                axios.delete(`/medical_services/${id}`)
                    .then(response => {
                        Swal.fire({
                            title: 'success',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        .then(result => {
                            if(result.isConfirmed){
                                localStorage.setItem('services', messages.deleted)
                                window.location.href = "/services"
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
    const data = !services ?
    <div className="d-flex justify-content-center">
        <Spinner></Spinner>
    </div> :
    <ServiceTable newUrl={URLS.service.new} handle_click={handle_click} pagination={pagination} columns={service_columns} entities={services} page={page} />
    return (
        <>
            {created_message && <Alert type="toast" icon="success" title="" message={created_message} />}
            {error_message && <Alert type="modal" icon="error" title={error_message} />}
            {data}
        </>  
    )
}

export default Index