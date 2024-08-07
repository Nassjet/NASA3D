import React from "react";
import ButtonHeader from "./ButtonHeader";

interface HeaderProps {
    name: string;
}

const Header : React.FC<HeaderProps> = ({ }) => {
    return (
        <header className="header">
            <div className="header">
                <ButtonHeader name ="Accueil"/>
                <ButtonHeader name ="Services"/>
                <ButtonHeader name ="Qui sommes-nous ? "/>
                <ButtonHeader name ="Contact"/>
            </div>
        </header>
    )
}

export default Header;