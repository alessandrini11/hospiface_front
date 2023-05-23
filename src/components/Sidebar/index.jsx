// import React from 'react'
import MenuItem from "../MenuItem"
import Container from "../Container"
import Icon from "../../assets/react.svg"

const Sidebar = () => {
	return (
		<div
			style={{ minHeight: "100vh" }}
			className="hidden lg:block col-span-1 shadow-md shadow-black z-10">
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
						<a href="/" className="">
							Dashboard
						</a>
						<ul>
							<MenuItem
								title="Patient"
								links={[
									{ url: "/patients/new", name: "new" },
									{ url: "/patients", name: "List" },
								]}
							/>
							<MenuItem
								title="Personnel"
								links={[
									{ url: "/personnel/new", name: "new" },
									{ url: "/personnel/list", name: "List" },
								]}
							/>
							<MenuItem
								title="Consultation"
								links={[
									{ url: "/personnel/new", name: "new" },
									{ url: "/personnel/list", name: "List" },
								]}
							/>
							<MenuItem
								title="Resultat Consult."
								links={[
									{ url: "/personnel/new", name: "new" },
									{ url: "/personnel/list", name: "List" },
								]}
							/>
							<MenuItem
								title="Hospitalization"
								links={[
									{ url: "/personnel/new", name: "new" },
									{ url: "/personnel/list", name: "List" },
								]}
							/>
							<MenuItem
								title="Rooms"
								links={[
									{ url: "/personnel/new", name: "new" },
									{ url: "/personnel/list", name: "List" },
								]}
							/>
							<MenuItem
								title="Personnel"
								links={[
									{ url: "/personnel/new", name: "new" },
									{ url: "/personnel/list", name: "List" },
								]}
							/>
							<MenuItem
								title="Personnel"
								links={[
									{ url: "/personnel/new", name: "new" },
									{ url: "/personnel/list", name: "List" },
								]}
							/>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
