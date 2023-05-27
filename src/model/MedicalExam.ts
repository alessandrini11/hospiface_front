import * as yup from 'yup'
const MedicalExam = yup.object({
    type: yup.string().required('le type est requit'),
    description: yup.string().required('la description est requise')
})

export default MedicalExam