import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Container from './Container'
import Icon from '../assets/react.svg'
import MenuItem from './MenuItem'
const Layout = (props) => {
  return (
    <div className="grid grid-cols-7">
        <div style={{minHeight: '100vh'}} className="hidden col-span-1 shadow-md shadow-black z-10">
            <div className="py-4 bg-teal-600 text-white">
                <Container>
                  <div className="">
                    <a href="/" className="flex items-center justify-start space-x-2">
                      <img src={Icon} className="h-6" alt="" />
                      <span className="hidden lg:block">Hospiface</span>
                    </a>  
                  </div>
                </Container> 
            </div>
            <div className="py-2">
              <div className="w-10/12 mx-auto">
                <div>
                  <a href="/" className="">Dashboard</a>
                  <ul>
                    <MenuItem title="Patient" links={[{url: '/patiens/add', name: 'Add'}, {url: '/patiens/list', name: 'List'}]} />
                    <MenuItem title="Personnel" links={[{url: '/personnel/add', name: 'Add'}, {url: '/personnel/list', name: 'List'}]} />
                    <MenuItem title="Consultation" links={[{url: '/personnel/add', name: 'Add'}, {url: '/personnel/list', name: 'List'}]} />
                    <MenuItem title="Resultat Consult." links={[{url: '/personnel/add', name: 'Add'}, {url: '/personnel/list', name: 'List'}]} />
                    <MenuItem title="Hospitalization" links={[{url: '/personnel/add', name: 'Add'}, {url: '/personnel/list', name: 'List'}]} />
                    <MenuItem title="Rooms" links={[{url: '/personnel/add', name: 'Add'}, {url: '/personnel/list', name: 'List'}]} />
                    <MenuItem title="Personnel" links={[{url: '/personnel/add', name: 'Add'}, {url: '/personnel/list', name: 'List'}]} />
                    <MenuItem title="Personnel" links={[{url: '/personnel/add', name: 'Add'}, {url: '/personnel/list', name: 'List'}]} />
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div className="col-span-6">
            <Header></Header>
            <Navigation page={props.page} sub_page={props.sub_page}></Navigation>
            <main className="bg-gray-100 py-10">
              <Container>
                {props.children}
              </Container>
            </main>
        </div>
    </div>
  )
}

export default Layout