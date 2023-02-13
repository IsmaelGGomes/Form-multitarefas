import React from 'react';
import { useLocation } from 'react-router-dom';
import {ProjectProps} from '../types/project';


export const ListProject = () => {
    let { state } = useLocation();

    async () => {

        const res = await fetch(`https://api.github.com/users/${state}/repos`)
        
        const data = await res.json();

        const {name_repositorio, language, star_count, size} = data;

        const userData: ProjectProps = {
            name_repositorio,
            language,
            star_count,
            size
        }
    }

    return (

        <div className="">
            <p>Cheguei até aqui meu jovem {state}</p>
        </div>
    );
}