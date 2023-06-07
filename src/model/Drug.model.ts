import * as yup from 'yup'
const DrugModel = yup.object({
    name: yup.string().required('le name est obligatoire'),
    days: yup.number().required('le nombre de jour est obligatoire')
        .min(1, "entrez un nombre spérieur à 0")
        .typeError('entrez un nombre spérieur à 0'),
    dosage: yup.string().required('la posologie est requise')
})
export default DrugModel