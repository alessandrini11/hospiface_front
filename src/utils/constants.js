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
export const personnel_type = [
    {value: 'medical', label: 'medical'},
    {value: 'administrative', label: 'administratif'},
    {value: 'technical', label: 'technique'},
    {value: 'academic', label: 'académique'},
]
export const personnel_subType = {
    academic: [
        {value: 'doctor', label: 'médecin'},
        {value: 'lab. technician', label: 'laboratin'},
        {value: 'nurse', label: 'infirmier'},
        {value: 'caregiver', label: 'aide soignant'},
        {value: 'embalmer', label: 'thanatopracteur'},
        {value: 'legal officer', label: 'juriste'},
        {value: 'computer scientist', label: 'informaticien'},
        {value: 'accountant', label: 'comptable'},
    ],
    techical: [
        {value: 'maintenance', label: 'technicien de surface'},
        {value: 'security', label: 'sécurité'},
    ],
    administrative: [
        {value: 'legal officer', label: 'juriste'},
        {value: 'computer scientist', label: 'informaticien'},
        {value: 'accountant', label: 'comptable'},
    ],
    medical: [
        {value: 'doctor', label: 'médecin'},
        {value: 'lab. technician', label: 'laboratin'},
        {value: 'nurse', label: 'infirmier'},
        {value: 'caregiver', label: 'aide soignant'},
        {value: 'embalmer', label: 'thanatopracteur'}
    ]
}
export const personnel_title = [
    {value: 'none', label: 'aucun'},
    {value: 'Ing.', label: 'Ing.'},
    {value: 'Dr.', label: 'Dr.'},
    {value: 'Pr.', label: 'Pr.'},
]
export const personnel_status = [
    { value: 0, label: 'inactif'},
    { value: 1, label: 'actif'},
    { value: 2, label: 'supprimé'},
]
export const personnel_position = [
    { value: 'general manager', label: 'directeur général'},
    { value: 'vice general manager', label: 'directeur général ajoint'},
    { value: 'head of department', label: 'chef département'},
    { value: 'sécretaire general', label: 'sécretaire général'},
    { value: 'none', label: 'aucun'},
]
export const sexs = [{ value: 'man', label: 'homme' },{ value: 'woman', label: 'femme' }]
export const messages = {
    created: 'Créé avec Success',
    updated: 'Modifié avec Success',
    deleted: 'Supprimé avec Success',

}

export const patient_columns = ['noms', 'sexe', 'groupe sanguain', 'telephone', 'email', 'address', 'personne urgence', 'numéro urgence', 'statut', 'consultation', 'hospitalisation', 'créé le', 'créé par', 'mise à jour le', 'mise à jour par', 'action']
export const personnel_columns = ['nom', 'type', 'sous type', 'poste occupé', ' spécialité', 'sexe', 'blood group', 'telephone', 'email', 'address', 'statut', 'consultation', 'créé le', 'créé par', 'mise à jour le', 'mise à jour par', 'action']