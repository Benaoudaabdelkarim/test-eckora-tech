import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";



export default function SideNavbar() {
    const fastLinks = [
        { name: "Services", route: "/" },
        { name: "Événements", route: "/" },
        { name: "Actualités ", route: "/" },
        { name: "Contactez-Nous", route: "/" },
    ]
    const usefullLinks = [
        { name: "Plan du Site", route: "/" },
        { name: "Politique de Confidentialité", route: "/" },
        { name: "Conditions d'Utilisation ", route: "/" },
        { name: "ContacteFoire Aux Questionsz-Nous", route: "/" },
        { name: "Aide et Support", route: "/" },
    ]
    const resources = [
        { name: "Documents Officiels", route: "/" },
        { name: "Galerie de Photos", route: "/" },
        { name: "Vidéos Communautaires ", route: "/" },
        { name: "Règlements Municipaux", route: "/" },
        { name: "Signaler un Problème", route: "/" },
    ]
    const partners = [
        { name: "Partenaires Locaux", route: "/" },
        { name: "Entreprises Partenaires", route: "/" },
        { name: "Organisations Communautaires ", route: "/" },
        { name: "Écoles et Établissements", route: "/" },
        { name: "Programmes de Volontariat", route: "/" },
    ]
    return (
        <div className="flex items-center justify-between h-full px-4 max-w-4xl lg:max-w-7xl mx-auto">
            <div className="">

            </div>
        </div>
    );
}
