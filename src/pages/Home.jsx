import React, { Component } from 'react'
import EntityCardCount from '../components/Cards/EntityCardCount'
import { faCog, faUsers } from '@fortawesome/free-solid-svg-icons'
import LineChart from '../components/Charts/LineChart'
import DoughnutChart from '../components/Charts/DoughnutChart'
import axios from '../config/axios'
import StatCard from '../components/Cards/StatCard'
import URLS from '../utils/app_urls'
import Spinner from '../components/Ui/Spinner'
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser: null,
            errorMessage: null,
            loading: true,
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
        axios.get('/users/profile')
        .then(response => {
            this.setState({currentUser: response.data.data})
        })
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
        .catch(error => {
            console.log(error)
            if(error.response){
                this.setState({
                    errorMessage: error.response.data.message
                })
            }else {
                this.setState({
                    errorMessage: error.message
                })
            }
        })

        this.setState({loading: false})

    }
    render() {
        const main_content = <>
            <div className="row">
                <div className="col">
                    <div className="h-100">
                        <div className="row mb-3 pb-1">
                            <div className="col-12">
                                <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                                    <div className="flex-grow-1">
                                        <h4 className="fs-16 mb-1">Bojour, {`${this.state.currentUser?.firstname} ${this.state.currentUser?.lastname}`}</h4>
                                        <p className="text-muted mb-0">Here's what's happening with your store
                                            today.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <StatCard name="patients" number={this.state.patients} url={URLS.patient.index} icon="user-pin"></StatCard>
                            <StatCard name="consultations" number={this.state.consultations} url={URLS.consultations.index} icon="cube" ></StatCard>
                            <StatCard name="hospitalisations" number={this.state.hospitalizations} url={URLS.consultations.index} icon="bed"></StatCard>
                            <StatCard name="chambre" number={this.state.rooms} url={URLS.rooms.index} icon="home-circle"></StatCard>
                            <StatCard name="Médécins" number={this.state.doctors} url={URLS.personnel.index} icon="user-circle"></StatCard>
                            <StatCard name="Infirmier" number={this.state.nurses} url={URLS.personnel.index} icon="user-circle"></StatCard>
                            <StatCard name="Technicien Labo." number={this.state.labTech} url={URLS.personnel.index} icon="user-circle"></StatCard>
                            <StatCard name="Aides Soignant" number={this.state.caregiver} url={URLS.personnel.index} icon="user-circle"></StatCard>
                            <StatCard name="Thanatopracteurs" number={this.state.embalmer} url={URLS.personnel.index} icon="user-circle"></StatCard>
                            <StatCard name="Informaticiens" number={this.state.compScien} url={URLS.personnel.index} icon="user-voice"></StatCard>
                            <StatCard name="Comptable" number={this.state.accountant} url={URLS.personnel.index} icon="user-voice"></StatCard>
                            <StatCard name="Agent Sécurité" number={this.state.security} url={URLS.personnel.index} icon="user-voice"></StatCard>
                            <StatCard name="Technicien de Surface" number={this.state.maintenance} url={URLS.personnel.index} icon="user-voice"></StatCard>
                            <StatCard name="Service" number={this.state.services} url={URLS.personnel.index} icon="cog"></StatCard>
                            <StatCard name="Utilisateur" number={this.state.users} url={URLS.personnel.index} icon="user-voice"></StatCard>
                        </div>

                    </div>

                </div>
            </div>
            <section className="py-10">
                <div className="row">
                    <div className="col-md-6">
                        <LineChart name="consultations" onChange={this.handleChange} entity={this.state.consultations_chart}/>
                    </div>
                    <div className="col-md-6">
                        <LineChart name="patients" onChange={this.handleChange} entity={this.state.patients_chart}/>
                    </div>
                </div>
                <div className="row py-5">
                        <div className="col-md-4">
                            <DoughnutChart entity={this.state.personnel_sex_chart}/>
                        </div>
                        <div className="col-md-4">
                            <DoughnutChart entity={this.state.patients_sex_chart}/>
                        </div>
                        <div className="col-md-4">
                            <DoughnutChart entity={this.state.patients_age_chart}/>
                        </div>
                    </div>
            </section>
        </>
        const spinner = <div className="">
            <div style={{minHeight: '70vh'}} className="row justify-content-md-center align-items-center">
                <Spinner></Spinner>
            </div>
        </div>
        const data = this.state.loading ? spinner : main_content
        return (
            <>  
                { this.state.errorMessage && <Alert type="modal" icon="error" title={this.state.errorMessage} ></Alert>}
                {data}
            </>
        )
    }
}