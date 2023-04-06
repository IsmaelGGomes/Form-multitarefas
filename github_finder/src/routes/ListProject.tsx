import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Project } from '../components/Project';
import { ProjectProps } from '../types/project';


export const ListProject = () => {

    const [project, SetProject] = useState<ProjectProps | null>(null);

    let { state } = useLocation();

    async (state: String) => {
        SetProject(null)
        const res = await fetch(`https://api.github.com/users/${state}/repos`)

        const data = await res.json();
        console.log(data)
        const { name_repositorio, language, star_count, size } = data;

        const userData: ProjectProps = {
            name_repositorio,
            language,
            star_count,
            size
        }

        SetProject(userData)
    }

    return (

        <div className="">
            {project && <Project {...project} />}
        </div>
    );
}