import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faDashboard } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";



export default function SideNavbar() {
    const dashboards = [
        {
            name: "Dashbouard",
            route: "/dashboard",
            icon: faDashboard
        }
    ]
    const managments = [
        {
            name: "Divisons administratives",
            route: "/dashboard/services/divisions",
            icon: faFolderOpen
        }
    ]
    return (
        <div className="p-4 text-sm">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-[44px] h-[44px] rounded-full bg-gray-200"></div>
                <div>
                    <p className=" text-xs font-normal uppercase">Editeur catégorisé </p>
                    <p className=" font-medium">User User </p>
                </div>
            </div>
            <hr></hr>
            <div className="my-7">
                <p className="uppercase text-[#6B7280] font-medium text-xs">Accueil</p>
                {
                    dashboards.map((route) =>
                        <Link href={route.route} key={route.name}
                            className="flex items-center gap-3 p-3 font-medium text-[#8E95A2] hover:text-[#4EC1B1]">
                            <FontAwesomeIcon icon={route.icon} className="w-5" />
                            <p>{route.name}</p>
                        </Link>
                    )
                }
            </div>
            <hr></hr>
            <div className="my-7">
                <p className="uppercase text-[#6B7280] font-medium text-xs">Gestion</p>
                {
                    managments.map((route) =>
                        <Link href={route.route} key={route.name}
                            className="flex items-center gap-3 p-3 font-medium text-[#8E95A2] hover:text-[#4EC1B1]">
                            <FontAwesomeIcon icon={route.icon} className="w-5" />
                            <p>{route.name}</p>
                        </Link>
                    )
                }
            </div>
        </div>
    );
}
