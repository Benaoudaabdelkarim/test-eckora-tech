import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function SideNavbar() {
  const fastLinks = [
    { name: "Services", route: "/" },
    { name: "Événements", route: "/" },
    { name: "Actualités ", route: "/" },
    { name: "Contactez-Nous", route: "/" },
  ];
  const usefullLinks = [
    { name: "Plan du Site", route: "/" },
    { name: "Politique de Confidentialité", route: "/" },
    { name: "Conditions d'Utilisation ", route: "/" },
    { name: "ContacteFoire Aux Questionsz-Nous", route: "/" },
    { name: "Aide et Support", route: "/" },
  ];
  const resources = [
    { name: "Documents Officiels", route: "/" },
    { name: "Galerie de Photos", route: "/" },
    { name: "Vidéos Communautaires ", route: "/" },
    { name: "Règlements Municipaux", route: "/" },
    { name: "Signaler un Problème", route: "/" },
  ];
  const partners = [
    { name: "Partenaires Locaux", route: "/" },
    { name: "Entreprises Partenaires", route: "/" },
    { name: "Organisations Communautaires ", route: "/" },
    { name: "Écoles et Établissements", route: "/" },
    { name: "Programmes de Volontariat", route: "/" },
  ];
  return (
    <div>
      <div className="grid md:grid-cols-5 p-8 md:p-12 gap-8 md:gap-0 bg-white">
        <div className="">
          image
          <p className="text-[#6B7280] mt-4 pr-4 text-sm md:text-base">
            Kouba est une banlieue située sur une hauteur juste au sud-est de la
            ville centrale d'Alger, dans le nord de l'Algérie.
          </p>
        </div>
        <div className="">
          <h3 className="text-[#349F8B] font-semibold text-xs">
            Liens Rapides
          </h3>
          <div className="flex flex-col gap-2 mt-4">
            {fastLinks.map((item) => (
              <Link href={item.route} className="text-sm text-[#383A42]">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <h3 className="text-[#349F8B] font-semibold text-xs">Liens Utiles</h3>
          <div className="flex flex-col gap-2 mt-4">
            {usefullLinks.map((item) => (
              <Link href={item.route} className="text-sm text-[#383A42]">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <h3 className="text-[#349F8B] font-semibold text-xs">Ressources</h3>
          <div className="flex flex-col gap-2 mt-4">
            {resources.map((item) => (
              <Link href={item.route} className="text-sm text-[#383A42]">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <h3 className="text-[#349F8B] font-semibold text-xs">Partenaires</h3>
          <div className="flex flex-col gap-2 mt-4">
            {partners.map((item) => (
              <Link href={item.route} className="text-sm text-[#383A42]">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[#349F8B] px-12 py-6 flex flex-col md:flex-col gap-4 justify-between items-center">
        <span className="text-[#349F8B]">© 2024 Municipalié du Kouba.</span>
        <div className="flex justify-end items-center gap-3">
            <div className="w-8 h-8 bg-gray-300"></div>
            <div className="w-8 h-8 bg-gray-300"></div>
            <div className="w-8 h-8 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
