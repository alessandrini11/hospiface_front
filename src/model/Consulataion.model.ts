import * as yup from 'yup'
const ConsultationModel = yup.object({
    status: yup.number(),
    type: yup.string().required('le type est obligatoire'),
    doctor: yup.number().required('le médécin est obligatoire'),
    patient: yup.number().required('le patient est obligatoire'),
    height: yup.number().required('la taille est obligatoire'),
    bloodPressure: yup.number().required('la pression artériel est obligatoire'),
    weight: yup.number().required('le poids est obligatoire'),
    temperature: yup.number().required('la température est obligatoire')
})

export default ConsultationModel