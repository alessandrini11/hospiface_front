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
            patients: 0
        }
    }
    componentDidMount(){
        axios.get('/patients')
            .then(response => {
                this.setState({patients: response.data.data.data.length})
            })

    }
    render() {
        return (
            <>
                <section>
                    <div className="grid grid-cols-4 gap-5">
                        <EntityCardCount title="patients" amount={this.state.patients} icon={faUsers} bg_color='blue' />
                        <EntityCardCount title="consultation" amount={1507} icon={faCog} bg_color='green' />
                        <EntityCardCount title="Med. Doctors" amount={10} icon={faUsers} bg_color="red" />
                        <EntityCardCount title="Nurses" amount={15} icon={faUsers} bg_color="red" />
                        <EntityCardCount title="Lab Tech" amount={352} icon={faUsers} bg_color="red" />
                        <EntityCardCount title="Non Med" amount={352} icon={faUsers} bg_color="blue" />
                        <EntityCardCount title="Hospitalization" amount={352} icon={faUsers} bg_color="blue" />
                        <EntityCardCount title="Room" amount={352} icon={faUsers} bg_color="blue" />
                        <EntityCardCount title="Guards" amount={352} icon={faUsers} bg_color="red" />
                    </div>
                </section>
                <section className="py-10">
                    <div className="grid grid-cols-2 gap-5">
                        <LineChart/>
                        <LineChart/>
                        <div className="col-span-3 grid grid-cols-3 gap-5">
                            <DoughnutChart/>
                            <DoughnutChart/>
                            <DoughnutChart/>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}