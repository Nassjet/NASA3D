import React from "react";
import Accueil from "../buttons/Accueil";
import Services from "../buttons/Services";
import Contact from "../buttons/Contact";

interface HeaderProps {
    name: string;
}

const Header : React.FC<HeaderProps> = ({ }) => {
    return (
        <div>
        <Accueil/>
        <Services/>
        <Contact/>
        </div>
    )
}

export default Header;