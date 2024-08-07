import React from "react";


interface ButtonHeaderProps {
    name: string;
}

const ButtonHeader : React.FC<ButtonHeaderProps> = ({name}) => {
    return (
        <button className="button-header">
            {name}
        </button>
    )
}

export default ButtonHeader;