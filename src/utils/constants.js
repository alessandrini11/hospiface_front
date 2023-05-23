export const blood_groups = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
]
export const patient_status = [
    {value: 1, label: "mort"},
    {value: 2, label: "hostpitalisé"},
]
export const personnel_status = [
    { value: 0, label: 'actif'},
    { value: 1, label: 'inactif'},
    { value: 2, label: 'supprimé'},
]
export const sexs = [{ value: 'man', label: 'homme' },{ value: 'woman', label: 'femme' }]
export const messages = {
    created: 'created successfully',
    updated: 'updated successfully'
}

export const patient_columns = ['noms', 'sexe', 'groupe sanguain', 'telephone', 'email', 'address', 'personne urgence', 'numéro urgence', 'statut', 'consultation', 'hospitalisation', 'créé le', 'créé par', 'mise à jour le', 'mise à jour par', 'action']
export const personnel_columns = ['nom', 'type', 'sous type', 'poste occupé', ' spécialité', 'sexe', 'blood group', 'telephone', 'email', 'address', 'statut', 'consultation', 'créé le', 'créé par', 'mise à jour le', 'mise à jour par', 'action']