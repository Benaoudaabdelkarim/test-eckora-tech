import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'



export default function SideNavbar() {
    return (
        <div className="flex items-center justify-between h-full px-4">
            <div className="">
                <p className="text-2xl font-semibold">Bonjour USER,</p>
            </div>
            <div>
                <p>image</p>
            </div>
        </div>
    );
}
