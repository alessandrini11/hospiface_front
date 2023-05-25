import * as yup from 'yup'
const PersonnelModel = yup.object({
    firstName: yup.string().required('le nom est requis'),
    lastName: yup.string().required('le prenom est requis'),
    title: yup.string(),
    sex: yup.string(),
    type: yup.string(),
    subType: yup.string(),
    email: yup.string().email('entrez une adresse email valid'),
    phoneNumber: yup.string()
        .length(9, 'le numéro de téléphone doit avoir 9 chiffre')
        .required('le numéro de téléphone est requis'),
    status: yup.number(),
    service: yup.number(),
    speciality: yup.number(),
    positionHeld: yup.string().required('le champ est requis'),
    // bloodGroup: yup.string().max(3),
    // address: yup.string(),
    // birthDate: yup.string()
    //     .required('la date de naissance est requise')
})

export default PersonnelModel