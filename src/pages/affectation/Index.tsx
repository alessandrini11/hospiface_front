import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Pagination, PersonnelServiceType } from '../../entityPropsType'
import axios from 'axios'
import Swal from 'sweetalert2'
import { affectation_columns, messages } from '../../utils/constants'
import Spinner from '../../components/Ui/Spinner'
import AffectationTable from '../../components/AffectationTable'
import Alert from '../../components/Alert'
import CardContainer from '../../components/Cards/CardContainer'
import SearchForm from '../../components/SearchForm'
import AddButton from '../../components/Ui/AddButton'
import URLS from '../../utils/app_urls'

type Props = {}

const Index = (props: Props) => {
    const [search_params, set_search_params] = useSearchParams()
    const [created_message, set_created_message] = useState<string | null>(null)
    const [error_message, set_error_message] = useState(null)
    const [pagination, set_pagination] = useState<Pagination | null>(null)
    const [affectations, set_affectations] = useState<PersonnelServiceType[] | null>(null)
    const [page, set_page] = useState<string | null>(search_params.get('page'))
    const [query, setQuery] = useState(search_params.get('query'))
    
    useEffect(() => {
        get_affectations()
        if(localStorage.getItem('affectations')){
            set_created_message(localStorage.getItem('affectations'))
        }
        return () => {
            localStorage.removeItem('affectations')
        }
    }, [])
    const get_affectations = () => {
        axios.get(`/personnel_services?actualPage=${page || 1}&query=${query || ''}`)
            .then(response => {
                set_affectations(response.data.data.data)
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
                axios.delete(`/personnel_services/${id}`)
                    .then(response => {
                        Swal.fire({
                            title: 'success',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        .then(result => {
                            if(result.isConfirmed){
                                localStorage.setItem('personnel', messages.deleted)
                                get_affectations()
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
    const data = !affectations ?
    <div className="flex justify-content-center">
        <Spinner></Spinner>
    </div> :
    <AffectationTable newUrl={URLS.affectations.new} handle_click={handle_click} pagination={pagination} columns={affectation_columns} entities={affectations} page="affectations" />
    return (
        <>
            {created_message && <Alert type="toast" icon="success" title="" message={created_message} />}
            {error_message && <Alert type="modal" icon="error" title={error_message} />}
            {data}
        </>
    )
}

export default Index