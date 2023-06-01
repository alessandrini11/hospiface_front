import * as yup from 'yup'
const PersonnelGardeModel = yup.object({
    personnel: yup.number().required('le champ est obligatoire'),
    service: yup.number().required('le champ est obligatoir'),
    startDate: yup.date().typeError('entrez une date valide').required(),
    endDate: yup.date().typeError('entrez une date valide').required()
})

export default PersonnelGardeModel