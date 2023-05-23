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

