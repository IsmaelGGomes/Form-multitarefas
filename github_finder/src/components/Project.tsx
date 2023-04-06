import React from "react";
import { ProjectProps } from "../types/project";


export const Project = ({
    name_repositorio,
    language,
    star_count,
    size
}: ProjectProps) => {
    console.log(name_repositorio)
    return (

        <>
            <div className=""><p>{language}</p></div>
        </>
    );
}