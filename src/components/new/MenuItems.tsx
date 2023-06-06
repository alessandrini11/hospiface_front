import React from 'react'
import MenuItem from '../new/MenutItem'
type MenuItemType = {
    name: string,
    icon: string,
    navLinks: {
        name: string,
        url: string
    }[]
}
const menuItemArray: MenuItemType[] = [
    {name: "patients", icon: "user-pin", navLinks:[{name: "List", url: "/patients"},{name: "New", url: "/patients/new"}]},
    {name: "personnel", icon: "user-circle", navLinks:[{name: "List", url: "/personnel"},{name: "New", url: "/personnel/new"}]},
    {name: "consultations", icon: "cube", navLinks:[{name: "List", url: "/consultations"},{name: "New", url: "/consultations/new"}]},
    {name: "Rendez-Vous", icon: "calendar", navLinks:[{name: "List", url: "/rendezvous"},{name: "New", url: "/rendezvous/new"}]},
    {name: "Hospitalisations", icon: "bed", navLinks:[{name: "List", url: "/hospitalisations"},{name: "New", url: "/hospitalisations/new"}]},
    {name: "Chambres", icon: "home-circle", navLinks:[{name: "List", url: "/chambres"},{name: "New", url: "/chambres/new"}]},
    {name: "Services", icon: "cog", navLinks:[{name: "List", url: "/services"},{name: "New", url: "/services/new"}]},
    {name: "Affectation", icon: "repost", navLinks:[{name: "List", url: "/affectations"},{name: "New", url: "/affectations/new"}]},
    {name: "Garde", icon: "walk", navLinks:[{name: "List", url: "/gardes"},{name: "New", url: "/gardes/new"}]},
    {name: "Utilisateurs", icon: "user", navLinks:[{name: "List", url: "/users"},{name: "New", url: "/users/new"}]},
]
const MenuItems = () => {
    const items = menuItemArray.map((menu, index) => (
        <MenuItem 
            key={index}
            name={menu.name} 
            icon={menu.icon}
            navLinks={menu.navLinks}
        />
    ))
    return (
        <>{items}</>
    )
}

export default MenuItems