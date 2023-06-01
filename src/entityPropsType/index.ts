type createdUpdatedBy = {
    id: number,
    firstname: string,
    lastname: string,
    sex: string,
    phoneNumber: string,
    email: string,
    roles: Array<string>,
    status: number

}
type Patient = {
    id: number,
    first_name: string,
    last_name: string,
    sex: string,
    blood_group: string,
    birth_date: string
}
type Doctor = {
    id: number,
    first_name: string,
    last_name: string,
    title: string,
    sex: string,
    speciality: {
        id: number,
        name: string
    }
}
export type PersonnelGardeType = {
    id: number,
    personnel: PersonnelType,
    service: ServiceType,
    startDate: Date,
    endDate: Date
}
export type PG = {
    personnel: string,
    service: string,
    startDate: Date,
    endDate: Date
}
export type PersonnelServiceType = {
    id: number,
    service: ServiceType,
    personnel: PersonnelType,
    positionHeld: string,
    created_by: createdUpdatedBy,
    created_at: string,
    updated_by: createdUpdatedBy,
    updated_at: string
}
export type RoomType = {
    id: number,
    number: number,
    beds: number,
    created_by: createdUpdatedBy,
    created_at: string,
    updated_by: createdUpdatedBy,
    updated_at: string
}
export type Pagination = {
    actual_Page: number,
    total_Page: number
}
export type PersonnelType = {
    id: number,
    firstName: string,
    lastName: string,
    title: string,
    sex: string,
    type: string,
    bloodGroup: string,
    address: string,
    subType: string,
    services: {
        id: number,
        name: string,
        positionHeld: string
    },
    speciality: {
        id: number,
        name: string
    },
    consultations: number,
    phoneNumber: string,
    email: string,
    status: number,
    positionHeld: string,
    created_by: createdUpdatedBy,
    created_at: string,
    updated_by: createdUpdatedBy,
    updated_at: string
}

export type MedicalExamType = {
    type: string,
    description: string
}

export type ConsultationType = {
    id: number,
    status: number,
    type: string,
    doctor: Doctor,
    patient: Patient,
    result: {
        id: number, 
        interpretation: string,
        medical_order: {
            id: number,
            drugs: {
                id: number,
                name: string,
                dosage: string,
            }[]
        },
        medical_exams: {
            id: number,
            type: string,
            description: string
        }[]
    } | null,
    parameter: {
        temperature: number,
        bloodPressure: number,
        weight: number,
        height: number
    } | null,
    created_by: createdUpdatedBy,
    created_at: string,
    updated_by: createdUpdatedBy,
    updated_at: string
}

export type DrugType = {
    id: string,
    name: string,
    dosage: string
}

export type AppointmentType = {
    id: number,
    patient: Patient,
    doctor: Doctor,
    status: number,
    date: string,
    created_by: createdUpdatedBy,
    created_at: string,
    updated_by: createdUpdatedBy,
    updated_at: string
}

export type HospitalizationType = {
    id: number,
    status: number,
    type: string,
    startDate: string,
    endDate: string,
    patient: Patient,
    room: RoomType | null,
    description: string,
    created_by: createdUpdatedBy,
    created_at: string,
    updated_by: createdUpdatedBy,
    updated_at: string
}

export type ServiceType = {
    id: number,
    name: string,
    personnel_service: PersonnelServiceType[],
    created_by: createdUpdatedBy,
    created_at: string,
    updated_by: createdUpdatedBy,
    updated_at: string
}
export type GardeType = {
    id: number,
    startDate: Date,
    endDate: Date,
    status: number,
    personnel_garde: PersonnelGardeType[],
    created_by: createdUpdatedBy,
    created_at: string,
    updated_by: createdUpdatedBy,
    updated_at: string
}