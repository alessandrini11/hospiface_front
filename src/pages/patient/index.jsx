import React, { Component } from 'react'
import Layout from '../../components/Layout'
import CardContainer from '../../components/Cards/CardContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import Table from '../../components/Table'
import SearchForm from '../../components/SearchForm'
import {faker} from '@faker-js/faker'
export default class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            table_head: [],
            entity: [],
            pagination: {},
            loading: true
        }
    }
    componentDidMount(){
        const table_head = ['full name', 'sexe', 'blood group', 'telephone', 'email', 'address', 'action']
        const entity = table_head.map(() => (
            {
                fullName: faker.person.fullName({sex: 'male'}),
                gender: faker.person.sex(),
                blood_group: faker.word.sample({length: 2}),
                telephone: faker.phone.number(),
                email: faker.internet.email({allowSpecialCharacters: false}),
                adress: faker.person.jobTitle()
            }
        ))
        const pagination = {actual_Page: 3, total_Page: 10}
        this.setState({
            pagination,
            entity,
            table_head,
            loading: false
        })
    }
    render() {
        const data = this.state.loading ? 
        <div className="">
            Loading
        </div> : 
        <Table table_head={this.state.table_head} entities={this.state.entity} pagination={this.state.pagination}/>
        return (
        <Layout page="Patient" sub_page="index">
            <CardContainer>
                <div className="">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex">
                            <SearchForm/>
                        </div>
                        <p className="">
                            <a href="" className="inline-block text-green-700 bg-green-300 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Ajouter <FontAwesomeIcon icon={faPlus}/></a>
                        </p>
                    </div>
                    {data}
                </div>
            </CardContainer>
        </Layout>
        )
    }
}
