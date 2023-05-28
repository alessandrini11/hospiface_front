import * as yup from 'yup'
const DrugModel = yup.object({
    name: yup.string().required('le name est requit'),
    dosage: yup.string().required('la posologie est requise')
})
export default DrugModel