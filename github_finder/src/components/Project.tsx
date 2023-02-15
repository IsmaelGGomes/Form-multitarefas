import React from "react";
import { ProjectProps } from "../types/project";

export const Project = ({
    name_repositorio,
    language,
    size,
    star_count
}:ProjectProps) => {
    console.log(language);
    return (

        <>
            <div className=""><p>{size}</p></div>
        </>
    );
}