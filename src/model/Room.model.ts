import * as yup from 'yup'
const RoomModel = yup.object({
    number: yup.number().positive('le chiffre doit être supérieur à 0').typeError('entrez un chiffre').required('le numéro de la chambre est obligatoire'),
    beds: yup.number().positive('le chiffre doit être supérieur à 0').typeError('entrez un chiffre').required('le nombre de lit est obligatoire')
})

export default RoomModel