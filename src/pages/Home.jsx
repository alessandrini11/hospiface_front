import React, { Component } from 'react'
import EntityCardCount from '../components/Cards/EntityCardCount'
import { faCog, faUsers } from '@fortawesome/free-solid-svg-icons'
import LineChart from '../components/Charts/LineChart'
import DoughnutChart from '../components/Charts/DoughnutChart'
import axios from 'axios'
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            patients: 0,
            consultations: 0,
            doctors: 0,
            nurses: 0,
            labTech: 0,
            caregiver: 0,
            embalmer: 0,
            legalOff: 0,
            compScien: 0,
            accountant: 0,
            maintenance: 0,
            security: 0,
            interns: 0,
            services: 0,
            users: 0,
            hospitalizations: 0,
            rooms: 0,
            consultations_chart: [],
            personnels_chart: [],
            personnel_sex_chart: [],
            patients_sex_chart: [],
            patients_chart: [],
            patients_age_chart: []
        }
    }
    handleChange = (entity, year) => {
        if(year !== "none"){
            switch (entity) {
                case "consultations":
                    axios.get(`/stats/consultations_chart?year=${year}`)
                        .then(response => {
                            this.setState({
                                consultations_chart: response.data.data
                            })
                        })
                    break;
                case "patients":
                    axios.get(`/stats/patients_chart?year=${year}`)
                        .then(response => {
                            this.setState({
                                patients_chart: response.data.data
                            })
                        })
                    break;
                default:
                    break;
            }
        }
    }
    componentDidMount(){
        axios.get('/stats/patients')
        .then(response => {
            this.setState({patients: response.data.data.length})
        })
        axios.get('/stats/consultations')
        .then(response => {
            this.setState({consultations: response.data.data.length})
        })
        axios.get('/stats/personnel')
        .then(response => {
            const doctors = response.data.data.filter(doctor => doctor.subType === "doctor" && doctor.type !== "academic")
            const nurses = response.data.data.filter(doctor => doctor.subType === "nurse" && doctor.type !== "academic")
            const labTech = response.data.data.filter(doctor => doctor.subType === "lab. technician" && doctor.type !== "academic")
            const caregiver = response.data.data.filter(doctor => doctor.subType === "caregiver" && doctor.type !== "academic")
            const embalmer = response.data.data.filter(doctor => doctor.subType === "embalmer" && doctor.type !== "academic")
            const legalOff = response.data.data.filter(doctor => doctor.subType === "legal officer" && doctor.type !== "academic")
            const compScien = response.data.data.filter(doctor => doctor.subType === "computer scientist" && doctor.type !== "academic")
            const accountant = response.data.data.filter(doctor => doctor.subType === "accountant" && doctor.type !== "academic")
            const maintenance = response.data.data.filter(doctor => doctor.subType === "maintenance")
            const security = response.data.data.filter(doctor => doctor.subType === "security")
            const interns = response.data.data.filter(doctor => doctor.type === "academic")
            this.setState({
                doctors: doctors.length,
                nurses: nurses.length,
                labTech: labTech.length,
                caregiver: caregiver.length,
                embalmer: embalmer.length,
                legalOff: legalOff.length,
                compScien: compScien.length,
                accountant: accountant.length,
                maintenance: maintenance.length,
                security: security.length,
                interns: interns.length,
            })
        })
        axios.get('/stats/services')
        .then(response => {
            this.setState({
                services: response.data.data.length
            })
        })
        axios.get('/stats/users')
        .then(response => {
            this.setState({
                users: response.data.data.length
            })
        })
        axios.get('/stats/hospitalizations')
        .then(response => {
            this.setState({
                hospitalizations: response.data.data.length
            })
        })
        axios.get('/stats/rooms')
        .then(response => {
            this.setState({
                rooms: response.data.data.length
            })
        })
        axios.get('/stats/consultations_chart')
        .then(response => {
            this.setState({
                consultations_chart: response.data.data
            })
        })
        axios.get('/stats/patients_chart')
        .then(response => {
            this.setState({
                patients_chart: response.data.data
            })
        })
        axios.get('/stats/personnel_sex_chart')
        .then(response => {
            this.setState({
                personnel_sex_chart: response.data.data
            })
        })
        axios.get('/stats/patients_sex_chart')
        .then(response => {
            this.setState({
                patients_sex_chart: response.data.data
            })
        })
        axios.get('/stats/patients_sex_chart')
        .then(response => {
            this.setState({
                patients_sex_chart: response.data.data
            })
        })
        axios.get('/stats/patients_sex_chart')
        .then(response => {
            this.setState({
                patients_sex_chart: response.data.data
            })
        })
        axios.get('/stats/patients_age_chart')
        .then(response => {
            this.setState({
                patients_age_chart: response.data.data
            })
        })

    }
    render() {
        return (
            <>
                <section>
                    <div className="grid grid-cols-4 gap-5">
                        <EntityCardCount title="Patients" amount={this.state.patients} icon={faUsers} bg_color='blue' />
                        <EntityCardCount title="Consultation" amount={this.state.consultations} icon={faCog} bg_color='green' />
                        <EntityCardCount title="Hospitalization" amount={this.state.hospitalizations} icon={faUsers} bg_color="blue" />
                        <EntityCardCount title="Room" amount={this.state.rooms} icon={faUsers} bg_color="blue" />
                        <EntityCardCount title="Médécins" amount={this.state.doctors} icon={faUsers} bg_color="red" />
                        <EntityCardCount title="Infirmiers" amount={this.state.nurses} icon={faUsers} bg_color="red" />
                        <EntityCardCount title="Lab Tech" amount={this.state.labTech} icon={faUsers} bg_color="red" />
                        <EntityCardCount title="Aides Soignants" amount={this.state.caregiver} icon={faUsers} bg_color="red" />
                        <EntityCardCount title="thanatopracteurs" amount={this.state.embalmer} icon={faUsers} bg_color="red" />
                        <EntityCardCount title="Informaticiens" amount={this.state.compScien} icon={faUsers} bg_color="red" />
                        <EntityCardCount title="Comptables" amount={this.state.accountant} icon={faUsers} bg_color="red" />
                        <EntityCardCount title="Agent Sécurité" amount={this.state.security} icon={faUsers} bg_color="blue" />
                        <EntityCardCount title="Tech Surface" amount={this.state.maintenance} icon={faUsers} bg_color="blue" />
                        <EntityCardCount title="Stagiaires" amount={this.state.interns} icon={faUsers} bg_color="blue" />
                        <EntityCardCount title="Services" amount={this.state.services} icon={faUsers} bg_color="red" />
                        <EntityCardCount title="Utilisateurs" amount={this.state.users} icon={faUsers} bg_color="red" />
                    </div>
                </section>
                <section className="py-10">
                    <div className="grid grid-cols-2 gap-5">
                        <LineChart name="consultations" onChange={this.handleChange} entity={this.state.consultations_chart}/>
                        <LineChart name="patients" onChange={this.handleChange} entity={this.state.patients_chart}/>
                        <div className="col-span-3 grid grid-cols-3 gap-5">
                            <DoughnutChart entity={this.state.personnel_sex_chart}/>
                            <DoughnutChart entity={this.state.patients_sex_chart}/>
                            <DoughnutChart entity={this.state.patients_age_chart}/>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}