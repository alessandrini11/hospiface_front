import React, { useEffect, useState } from 'react'
import AppointmentTable from '../../components/AppointmentTable'
import { useSearchParams } from 'react-router-dom'
import { AppointmentType, Pagination } from '../../entityPropsType'
import Swal from 'sweetalert2'
import axios from 'axios'
import { appointment_columns, messages } from '../../utils/constants'
import Spinner from '../../components/Ui/Spinner'
import Alert from '../../components/Alert'
import URLS from '../../utils/app_urls'
type Props = {}

const Index = (props: Props) => {
    const [search_params, set_search_params] = useSearchParams()
    const [created_message, set_created_message] = useState<string | null>(null)
    const [error_message, set_error_message] = useState(null)
    const [pagination, set_pagination] = useState<Pagination | null>(null)
    const [appointments, set_appointments] = useState<AppointmentType[] | null>(null)
    const [page, set_page] = useState<string | null>(search_params.get('page'))
    const [query, setQuery] = useState(search_params.get('query'))
    
    useEffect(() => {
        get_appointments()
        if(localStorage.getItem('appointments')){
            set_created_message(localStorage.getItem('appointments'))
        }
        return () => {
            localStorage.removeItem('appointments')
        }
    }, [])
    const get_appointments = () => {
        axios.get(`/appointments?actualPage=${page || 1}&query=${query || ''}`)
            .then(response => {
                set_appointments(response.data.data.data)
                set_pagination({
                    actual_Page: response.data.data.page,
                    total_Page: response.data.data.totalPages
                })
            })
            .catch(error => {
                set_error_message(error.message)
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
                console.log('deleted')
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
                                window.location.href = "/personnels"
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
    const data = !appointments ?
    <div className="flex justify-center">
        <Spinner></Spinner>
    </div> :
    <AppointmentTable newUrl={URLS.appointment.new} handle_click={handle_click} pagination={pagination} columns={appointment_columns} entities={appointments} page="rendezvous" />

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