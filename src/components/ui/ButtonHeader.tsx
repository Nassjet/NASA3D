import React from "react";


interface ButtonHeaderProps {
    name: string;
}

const ButtonHeader : React.FC<ButtonHeaderProps> = ({name}) => {
    return (
        <button className="button-header">
            <a href="">{name}</a>
        </button>
    )
}

export default ButtonHeader;