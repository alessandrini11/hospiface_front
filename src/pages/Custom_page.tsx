import React, { ReactNode } from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/new/Header'
import StatCard from '../components/Cards/StatCard'
import Table from '../components/new/Table'
import URLS from '../utils/app_urls'
import Footer from '../components/Footer'
type Props = {
    children: ReactNode
}
const Custom_page = ({children}: Props) => {
    return (
        <div id="layout-wrapper">
    
            <Header></Header>
            <SideBar></SideBar> 
            <div className="vertical-overlay"></div>
            <div className="main-content"> 
                <div className="page-content">
                    <div className="container-fluid">  
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0">Dashboard</h4>
    
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="">Dashboards</a></li>
                                            <li className="breadcrumb-item active">Dashboard</li>
                                        </ol>
                                    </div>
    
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="h-100">
                                    <div className="row mb-3 pb-1">
                                        <div className="col-12">
                                            <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                                                <div className="flex-grow-1">
                                                    <h4 className="fs-16 mb-1">Good Morning, Anna!</h4>
                                                    <p className="text-muted mb-0">Here's what's happening with your store
                                                        today.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <StatCard name="patients" number={25} url={URLS.patient.index} icon="user-pin"></StatCard>
                                        <StatCard name="consultations" number={50} url={URLS.consultations.index} icon="cube" ></StatCard>
                                        <StatCard name="hospitalisations" number={10} url={URLS.consultations.index} icon="bed"></StatCard>
                                        <StatCard name="chambre" number={15} url={URLS.rooms.index} icon="home-circle"></StatCard>
                                        <StatCard name="Médécins" number={10} url={URLS.personnel.index} icon="user-circle"></StatCard>
                                        <StatCard name="Infirmier" number={15} url={URLS.personnel.index} icon="user-circle"></StatCard>
                                        <StatCard name="Technicien Labo." number={10} url={URLS.personnel.index} icon="user-circle"></StatCard>
                                        <StatCard name="Aides Soignant" number={10} url={URLS.personnel.index} icon="user-circle"></StatCard>
                                        <StatCard name="Thanatopracteurs" number={10} url={URLS.personnel.index} icon="user-circle"></StatCard>
                                        <StatCard name="Informaticiens" number={10} url={URLS.personnel.index} icon="user-voice"></StatCard>
                                        <StatCard name="Comptable" number={10} url={URLS.personnel.index} icon="user-voice"></StatCard>
                                        <StatCard name="Agent Sécurité" number={10} url={URLS.personnel.index} icon="user-voice"></StatCard>
                                        <StatCard name="Technicien de Surface" number={10} url={URLS.personnel.index} icon="user-voice"></StatCard>
                                        <StatCard name="Service" number={10} url={URLS.personnel.index} icon="cog"></StatCard>
                                        <StatCard name="Utilisateur" number={10} url={URLS.personnel.index} icon="user-voice"></StatCard>
                                    </div>
                                    <div className="row">
                                        <Table></Table>
                                    </div>
    
                                </div>
    
                            </div>
                        </div>
    
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Custom_page