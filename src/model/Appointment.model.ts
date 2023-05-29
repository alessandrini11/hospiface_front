import * as yup from 'yup'
const AppointmentModel = yup.object({
    patient: yup.number().required('le patient est requit'),
    doctor: yup.number().required('le médécin est requit'),
    status: yup.number().required('le status est requis'),
    date: yup.date().required('la date est requise').typeError('la date est requise')
})

export default AppointmentModel