import * as yup from 'yup'
const MedicalServiceModel = yup.object({
    name: yup.string().required('le champ est obligatoire')
})

export default MedicalServiceModel