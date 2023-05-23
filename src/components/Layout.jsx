import { useState } from "react"

import Header from "./Header"
import Container from "./Container"
import Navigation from "./Navigation"
import Icon from "../assets/react.svg"
import MobileMenu from "./MobileMenu"
import Sidebar from "./Sidebar"

const Layout = ({ page, sub_page, children }) => {
	const [open, setOpen] = useState(true)
	const handleMobileMenu = () => {
		setOpen((prevState) => !prevState)
	}

	return (
		<div className="grid grid-cols-7 relative">
			<MobileMenu icon={Icon} open={open} handleMobileMenu={handleMobileMenu} />
			<Sidebar />

			<div className="col-span-7 lg:col-span-6">
				<Header handleMobileMenu={handleMobileMenu} />
				<Navigation page={page} sub_page={sub_page} />
				<main className="bg-gray-100 py-10">
					<Container>{children}</Container>
				</main>
			</div>
		</div>
	)
}

export default Layout
