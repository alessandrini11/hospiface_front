import * as yup from 'yup'
const RoomModel = {
    number: yup.number().required('le numéro de la chambre est obligatoire'),
    beds: yup.number().required('le nombre de lit est obligatoire')
}

export default RoomModel