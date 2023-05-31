import * as yup from 'yup'
const AffectationModel = yup.object({
    personnel: yup.number().required('le champ est obligatoire'),
    service: yup.number().required('le champ est obligatoire'),
    positionHeld: yup.string().required('le champ est obligatoire'),
})

export default AffectationModel