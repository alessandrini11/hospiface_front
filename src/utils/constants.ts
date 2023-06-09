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
    {value: 0, label: "mort"},
    {value: 1, label: "hospitalisé"},
    {value: 2, label: "libre"},
]

export const consultation_status = [
    {value: 0, label: 'en cours'}, 
    {value: 1, label: 'terminé'}
]
export const consultation_type = [
    {value: 'normal', label: 'normal'},
    {value: 'check-up', label: 'check-up'}
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
    technical: [
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
export const medical_exam = [
    {value: 'radio', label: 'radio'},
    {value: 'gastrique', label: 'gastrique'},
    {value: 'glucide', label: 'glucide'}
]
export const drug_dosage = [
    {value: 'matin-midi-soir', label: 'matin-midi-soir'},
    {value: 'matin-soir', label: 'matin-soir'},
]

export const appointment_status = [
    {value: 0, label: 'programmé'},
    {value: 1, label: 'terminé'},
]
export const hospitalisation_status = [
    {value: 0, label: 'programmé'},
    {value: 1, label: 'en cours'},
    {value: 2, label: 'terminé'}
]
export const garde_status = [
    {value: 0, label: 'programmé'},
    {value: 1, label: 'en cours'},
    {value: 2, label: 'terminé'}
]
export const user_status = [
    {value: 0, label: 'inactif'},
    {value: 1, label: 'actif'},
]
export const users_roles = [
    {value: 'ROLE_USER', label: 'Utilisateur'},
    {value: 'ROLE_ADMIN', label: 'Admin'},
]
export const hospitalisation_type = [
    {value: 'observation', label: 'observation'},
    {value: 'medical care', label: 'soins médical'},
    {value: 'intensive care', label: 'soins intensif'},
    {value: 'surgical recovery', label: 'post opération'}
]
export const position_held = [
    {value: 'chef service', label: 'chef service'},
    {value: 'chef equipe', label: 'chef équipe'},
    {value: 'chef section', label: 'chef section'}
]
export const patient_columns = ['nom', 'sexe', 'age', 'groupe sanguain', 'telephone', 'email', 'address', 'personne urgence', 'numéro urgence', 'statut', 'consultation', 'hospitalisation', 'créé le', 'créé par', 'mise à jour le', 'mise à jour par', 'action']
export const personnel_columns = ['nom', 'type', 'sous type', 'poste occupé', ' spécialité', 'sexe', 'blood group', 'telephone', 'email', 'address', 'statut', 'consultation', 'créé le', 'créé par', 'mise à jour le', 'mise à jour par', 'action']
export const consultation_columns = ['patient', 'medecin', 'type', 'statut', 'taille(m)', 'poids(kg)', 'température(celcius)', 'tension artérielle(mmhg)', 'examen médical', 'prescription méddicale', 'créé le', 'créé par', 'mise à jour_le', 'mise à jour_par', 'action']
export const appointment_columns = ['patient', 'médécin', 'date', 'status',  'créé le', 'créé par', 'mise à jour le', 'mise à jour_par', 'action']
export const hospitalisation_columns = ['patient', 'chambre', 'type', 'status', 'date début', 'date fin', 'créé le', 'créé par', 'mise à jour le', 'mise à jour par', 'action']
export const room_columns = ['Numéro chambre', 'capacité (lits)','créé le', 'créé par', 'mise à jour le', 'mise à jour par', 'actions']
export const service_columns = ['name', 'personnel', 'créé le', 'créé par', 'mise à jour le', 'mise à jour par', 'actions']
export const affectation_columns = ['personnel', 'service', 'poste occupé', 'créé le', 'créé par', 'mise à jour le', 'mise à jour par', 'actions']
export const garde_columns = ['début', 'fin', 'status', 'personnel', 'créé le', 'créé par', 'mise à jour le', 'mise à jour par', 'actions']
export const user_columns = ['nom', 'sex', 'email', 'telephone','role', 'status', 'créé le', 'mise à jour le', 'actions']