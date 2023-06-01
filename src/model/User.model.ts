import * as yup from 'yup'
const UserModel = yup.object({
    firstname: yup.string().required('le champ est obligatoire'),
    lastname: yup.string().required('le champ est obligatoire'),
    email: yup.string().email().required('le champ est obligatoire'),
    phonenumber: yup.string().required('le champ est obligatoire'),
    sex: yup.string().required('le champ est obligatoire'),
    role: yup.string().required('le champ est obligatoire'),
    password: yup.string().required('le champ est obligatoire'),
    confirmPassword: yup.string().required('le champ est obligatoire'),
})

export default UserModel