const PATIENTS = "patients"
const CONSULTAIONS = "consultations"
const ROOMS = "chambres"
const PERSONNEL = "personnel"
const SERVICE = "Services"
const USER = "users"
const APPOINTMENT = "rendezvous"
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
        edit: `/${SERVICE}/edit`
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
    }
}

export default URLS