import React, { useEffect, useState } from 'react'
import Alert from '../../components/Alert'
import CardContainer from '../../components/Cards/CardContainer'
import SearchForm from '../../components/SearchForm'
import AddButton from '../../components/Ui/AddButton'
import {ConsultationType, Pagination} from '../../entityPropsType/index'
import Spinner from '../../components/Ui/Spinner'
import { messages, consultation_columns } from '../../utils/constants'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import ConsultationTable from '../../components/ConsultationTable'
type Props = {}

const Index = (props: Props) => {
    const [search_params, set_search_params] = useSearchParams()
    const [created_message, set_created_message] = useState<string | null>(null)
    const [error_message, set_error_message] = useState(null)
    const [pagination, set_pagination] = useState<Pagination | null>(null)
    const [personnel, set_personnel] = useState<ConsultationType[] | null>(null)
    const [page, set_page] = useState<string | null>(search_params.get('page'))
    const [query, setQuery] = useState(search_params.get('query'))
    const [confirm_delete, set_confirm_delete] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
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
        if(localStorage.getItem('personnel')){
            set_created_message(localStorage.getItem('personnel'))
        }
        return () => {
            localStorage.removeItem('personnel')
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
    const data = !personnel ?
    <div className="flex justify-center">
        <Spinner></Spinner>
    </div> :
    <ConsultationTable handle_click={handle_click} pagination={pagination} columns={consultation_columns} entities={personnel} page={page} />

    return (
        <>
            {created_message && <Alert type="toast" icon="success" title="" message={created_message} />}
            {error_message && <Alert type="modal" icon="error" title={error_message} />}
            
            <CardContainer>
                <div className="">
                    <div className="flex justify-between items-center py-4 flex-wrap space-y-2">
                        <div className="">
                            <SearchForm />
                        </div>
                        <p className="">
                            <AddButton url="/consultation/new"></AddButton>
                        </p>
                    </div>
                    {data}
                </div>
            </CardContainer>
        </>  
    )
}

export default Index