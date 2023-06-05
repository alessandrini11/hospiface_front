const PATIENTS = "patients"
const CONSULTAIONS = "consultations"
const ROOMS = "chambres"
const PERSONNEL = "personnel"
const SERVICE = "Services"
const USER = "users"
const APPOINTMENT = "rendezvous"
const HOSPITALISATION = "hospitalisations"
const AFFECTATIONS = "affectations"
const URLS = {
    patient: {
        index: `/${PATIENTS}`,
        new: `/${PATIENTS}/new`,
        edit: `/${PATIENTS}/edit`
    },
    consultations: {
        index: `/${CONSULTAIONS}`,
        new: `/${CONSULTAIONS}/new`,
        edit: `/${CONSULTAIONS}/edit`,
        show: `/${CONSULTAIONS}/show`,
    },
    rooms: {
        index: `/${ROOMS}`,
        new: `/${ROOMS}/new`,
        edit: `/${ROOMS}/edit`
    },
    personnel: {
        index: `/${PERSONNEL}`,
        new: `/${PERSONNEL}/new`,
        edit: `/${PERSONNEL}/edit`
    },
    service: {
        index: `/${SERVICE}`,
        new: `/${SERVICE}/new`,
        edit: `/${SERVICE}/edit`,
        show: `/${SERVICE}/show`,
    },
    user: {
        index: `/${USER}`,
        new: `/${USER}/new`,
        edit: `/${USER}/edit`
    },
    appointment: {
        index: `/${APPOINTMENT}`,
        new: `/${APPOINTMENT}/new`,
        edit: `/${APPOINTMENT}/edit`
    },
    hospitalisations: {
        index: `/${HOSPITALISATION}`,
        new: `/${HOSPITALISATION}/new`,
        edit: `/${HOSPITALISATION}/edit`
    },
    affectations: {
        index: `/${AFFECTATIONS}`,
        new: `/${AFFECTATIONS}/new`,
        edit: `/${AFFECTATIONS}/edit`
    }
}

export default URLS