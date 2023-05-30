import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Pagination, RoomType } from '../../entityPropsType'
import axios from 'axios'
import Swal from 'sweetalert2'
import { messages, room_columns } from '../../utils/constants'
import Spinner from '../../components/Ui/Spinner'
import RoomTable from '../../components/RoomTable'
import Alert from '../../components/Alert'
import CardContainer from '../../components/Cards/CardContainer'
import SearchForm from '../../components/SearchForm'
import AddButton from '../../components/Ui/AddButton'

type Props = {}

const Index = (props: Props) => {
    const [search_params, set_search_params] = useSearchParams()
    const [created_message, set_created_message] = useState<string | null>(null)
    const [error_message, set_error_message] = useState(null)
    const [pagination, set_pagination] = useState<Pagination | null>(null)
    const [rooms, set_rooms] = useState<RoomType[] | null>(null)
    const [page, set_page] = useState<string | null>(search_params.get('page'))
    const [query, setQuery] = useState(search_params.get('query'))

    useEffect(() => {
        axios.get(`/rooms?actualPage=${page || 1}&query=${query || ''}`)
            .then(response => {
                set_rooms(response.data.data.data)
                set_pagination({
                    actual_Page: response.data.data.page,
                    total_Page: response.data.data.totalPages
                })
            })
            .catch(error => {
                set_error_message(error.message)
            })
        if(localStorage.getItem('rooms')){
            set_created_message(localStorage.getItem('rooms'))
        }
        return () => {
            localStorage.removeItem('rooms')
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
                axios.delete(`/rooms/${id}`)
                    .then(response => {
                        Swal.fire({
                            title: 'success',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        .then(result => {
                            if(result.isConfirmed){
                                localStorage.setItem('personnel', messages.deleted)
                                window.location.href = "/rooms"
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
    const data = !rooms ?
    <div className="flex justify-center">
        <Spinner></Spinner>
    </div> :
    <RoomTable handle_click={handle_click} pagination={pagination} columns={room_columns} entities={rooms} page={page} />
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
                            <AddButton url="/chambres/new"></AddButton>
                        </p>
                    </div>
                    {data}
                </div>
            </CardContainer>
        </>  
    )
}

export default Index