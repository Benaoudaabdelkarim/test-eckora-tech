import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";



export default function SideNavbar() {
    const navItems = [
        { name: "Accueil", route: "/loggedout/our_services" },
        { name: "A Propos", route: "/loggedout/about" },
        { name: "Emplois ", route: "/" },
        { name: "blogs", route: "/" },
        { name: "Prendre part ", route: "/" },
    ]
    return (
        <div className="flex items-center justify-between h-full px-4 max-w-4xl lg:max-w-7xl mx-auto">
            <div> <p>image</p> </div>
            <div className="flex items-center gap-6 font-medium text-[#25272C]">
                {
                    navItems.map(item => (
                        <Link href={item.route}>{item.name}</Link>
                    ))
                }
            </div>
            <div className="flex items-center gap-6">
                <span className="text-2xl font-semibold bg-[#F7F8F8] rounded-full p-2">
                    <FontAwesomeIcon icon={faSearch} className="w-4 text-[8px] " />
                </span>
                <select className=" font-semibold">
                    <option>FR</option>
                    <option>AR</option>
                </select>
                <div className="h-12 w-12 bg-gray-300 rounded-full">

                </div>
            </div>
        </div>
    );
}
