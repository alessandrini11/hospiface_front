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