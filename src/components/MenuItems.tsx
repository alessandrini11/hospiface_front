import React from 'react'
import MenuItem from './MenuItem'

type Props = {}

const MenuItems = (props: Props) => {
  return (
    <>
      <MenuItem title="Patient" links={[{url: '/patients/new', name: 'New'}, {url: '/patients', name: 'List'}]} />
      <MenuItem title="Personnel" links={[{url: '/personnel/new', name: 'new'}, {url: '/personnel', name: 'List'}]} />
      <MenuItem title="Consultations" links={[{url: '/consultations/new', name: 'new'}, {url: '/consultations', name: 'List'}]} />
      <MenuItem title="Rendez-vous" links={[{url: '/rendezvous/new', name: 'new'}, {url: '/rendezvous', name: 'List'}]} />
      <MenuItem title="Hospitalisation" links={[{url: '/hospitalisations/new', name: 'new'}, {url: '/hospitalisations', name: 'List'}]} />
      <MenuItem title="Chambre" links={[{url: '/chambres/new', name: 'new'}, {url: '/chambre', name: 'List'}]} />
      <MenuItem title="Service" links={[{url: '/services/new', name: 'new'}, {url: '/services', name: 'List'}]} />
      <MenuItem title="Affectation" links={[{url: '/affectations/new', name: 'new'}, {url: '/affectations', name: 'List'}]} />
      <MenuItem title="Tour de garde" links={[{url: '/gardes/new', name: 'new'}, {url: '/gardes', name: 'List'}]} />
      <MenuItem title="Utilisateurs" links={[{url: '/users/new', name: 'new'}, {url: '/users', name: 'List'}]} />
    </>
  )
}

export default MenuItems