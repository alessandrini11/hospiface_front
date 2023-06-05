import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { HospitalizationType, Pagination } from '../../entityPropsType'
import axios from 'axios'
import Swal from 'sweetalert2'
import Spinner from '../../components/Ui/Spinner'
import HospitalisationTable from '../../components/HospitalisationTable'
import { hospitalisation_columns, messages } from '../../utils/constants'
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
    const [hospitalisations, set_hospitalisations] = useState<HospitalizationType[] | null>(null)
    const [page, set_page] = useState<string | null>(search_params.get('page'))
    const [query, setQuery] = useState(search_params.get('query'))
    useEffect(() => {
        axios.get(`/hospitalizations?actualPage=${page || 1}&query=${query || ''}`)
            .then(response => {
                set_hospitalisations(response.data.data.data)
                set_pagination({
                    actual_Page: response.data.data.page,
                    total_Page: response.data.data.totalPages
                })
            })
            .catch(error => {
                set_error_message(error.message)
            })
        if(localStorage.getItem('hospitalizations')){
            set_created_message(localStorage.getItem('hospitalizations'))
        }
        return () => {
            localStorage.removeItem('hospitalizations')
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
    const data = !hospitalisations ?
    <div className="flex justify-center">
        <Spinner></Spinner>
    </div> :
    <HospitalisationTable newUrl={URLS.hospitalisations.new} handle_click={handle_click} pagination={pagination} columns={hospitalisation_columns} entities={hospitalisations} page={page} />

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