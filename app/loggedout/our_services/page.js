import "./style.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";
export default function OurServices() {
    const divigions = [
        { name: "Urbanisme & développement régional", route: "/" },
        { name: "La finance et l'économie", route: "/" },
        { name: "Urbanisme & développement régional", route: "/" },
        { name: "Urbanisme & développement régional", route: "/" },
        { name: "La finance et l'économie", route: "/" },
        { name: "Urbanisme & développement régional", route: "/" },
        { name: "Urbanisme & développement régional", route: "/" },
        { name: "La finance et l'économie", route: "/" },
        { name: "Urbanisme & développement régional", route: "/" },

    ]
    return (
        <div className="">
            <div className="flex flex-col justify-center items-center h-80 bg-gray-100 ">
                <h1 className=" text-3xl primary-text font-semibold">Nos Services Municipaux</h1>
                <p className="max-w-xl text-xl font-medium mt-6 text-center">
                    Bienvenue sur la page des services municipaux de Kouba Municipalité. Nous nous engageons à fournir un éventail de services essentiels pour répondre aux besoins de nos citoyens. Explorez ci-dessous pour en savoir plus sur nos services.
                </p>
            </div>
            <div className="p-12">
                <div className="relative w-full bg-[#F7F8F8] p-3 rounded-md">
                    <div className="absolute left-0 inset-y-0 flex justify-center items-center ml-2">
                        <FontAwesomeIcon icon={faSearch} className="w-4 text-[8px] text-[#349F8B]" />
                    </div>
                    <input type="text" className="bg-[#F7F8F8] text-sm w-full pl-6 " placeholder="Recherchez nos services par nom ou par mots-clés" />
                </div>
                <div className="mt-10">
                    <h2 className="text-2xl font-medium">Divisions administratives :</h2>
                    <div className="grid grid-cols-3 gap-3 mt-6">
                        {
                            divigions.map(item => (
                                <Link href={item.route} className="bg-[#F7F8F8] text-[#383A42] text-sm text-center py-3">{item.name}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
