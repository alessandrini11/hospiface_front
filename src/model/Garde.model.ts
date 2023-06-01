import * as yup from 'yup'
const GardeModel = yup.object({
    startDate: yup.date().required().typeError('entrez un date valide'),
    endDate: yup.date().required().typeError('entrez un date valide'),
    status: yup.number().required('le champ est obligatoire'),
})

export default GardeModel