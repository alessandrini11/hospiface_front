import * as yup from 'yup'
const Patient = yup.object({
    firstName: yup.string().required('le nom est requis'),
    lastName: yup.string().required('le prenom est requis'),
    sex: yup.string(),
    email: yup.string().email('entrez une adresse email valid'),
    phoneNumber: yup.string()
        .length(9, 'le numéro de téléphone doit avoir 9 chiffre')
        .required('le numéro de téléphone est requis'),
    status: yup.number(),
    emergencyPerson: yup.string(),
    emergencyContact: yup.string()
        .length(9, 'le numéro de téléphone doit avoir 9 chiffre'),
    bloodGroup: yup.string().max(3),
    birthDate: yup.string()
        .required('la date de naissance est requise')
}).required()

export default Patient