import * as yup from 'yup'
const UserModel = yup.object({
    firstname: yup.string().required('le champ est obligatoire'),
    lastname: yup.string().required('le champ est obligatoire'),
    email: yup.string().email().required('le champ est obligatoire'),
    phonenumber: yup.string().required('le champ est obligatoire'),
    sex: yup.string().required('le champ est obligatoire'),
    role: yup.string().required('le champ est obligatoire'),
    status: yup.number().required('le champ est obligatoire'),
    password: yup.string().required('le champ est obligatoire').min(5, 'le mot de passe doit contenir au moins 5 charactères')
})

export default UserModel