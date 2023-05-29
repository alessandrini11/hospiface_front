import * as yup from 'yup'
const HospitalizationModel = yup.object({
    status: yup.number().required('le status est obligatoire'),
    type: yup.string().required('le type est obligatoire'),
    startDate: yup.date().required().typeError('la date est obligatoire'),
    endDate: yup.date().required().typeError('la date est obligatoire'),
    patient: yup.number().required('le patient est obligatoire'),
    room: yup.number().required('la chambre est obligatoire'),
    description: yup.string()
})

export default HospitalizationModel