import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GardeType, Pagination } from '../../entityPropsType'
import axios from 'axios'
import Swal from 'sweetalert2'
import { garde_columns, messages } from '../../utils/constants'
import Spinner from '../../components/Ui/Spinner'
import Alert from '../../components/Alert'
import CardContainer from '../../components/Cards/CardContainer'
import AddButton from '../../components/Ui/AddButton'
import GardesTable from '../../components/GardesTable'

type Props = {}

const Index = (props: Props) => {
    const [search_params, set_search_params] = useSearchParams()
    const [created_message, set_created_message] = useState<string | null>(null)
    const [error_message, set_error_message] = useState(null)
    const [pagination, set_pagination] = useState<Pagination | null>(null)
    const [gardes, set_gardes] = useState<GardeType[] | null>(null)
    const [page, set_page] = useState<string | null>(search_params.get('page'))

    useEffect(() => {
        axios.get(`/gardes?actualPage=${page || 1}`)
            .then(response => {
                set_gardes(response.data.data.data)
                set_pagination({
                    actual_Page: response.data.data.page,
                    total_Page: response.data.data.totalPages
                })
            })
            .catch(error => {
                set_error_message(error.message)
            })
        if(localStorage.getItem('gardes')){
            set_created_message(localStorage.getItem('gardes'))
        }
        return () => {
            localStorage.removeItem('gardes')
        }
    }, [page])

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
                                localStorage.setItem('gardes', messages.deleted)
                                window.location.href = "/gardes"
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
    const data = !gardes ?
    <div className="flex justify-center">
        <Spinner></Spinner>
    </div> :
    <GardesTable handle_click={handle_click} pagination={pagination} columns={garde_columns} entities={gardes} page={page} />

    return (
        <>
            {created_message && <Alert type="toast" icon="success" title="" message={created_message} />}
            {error_message && <Alert type="modal" icon="error" title={error_message} />}
            
            <CardContainer>
                <div className="">
                    <div className="flex justify-end items-center py-4 flex-wrap space-y-2">
                        <p className="">
                            <AddButton url="/gardes/new"></AddButton>
                        </p>
                    </div>
                    {data}
                </div>
            </CardContainer>
        </>
    )
}

export default Index