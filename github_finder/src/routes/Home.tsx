import React, { useState } from "react";
import { UserProps } from "../types/user";

import Search from "../components/Search";
import {Erro} from "../components/Erro";
import { User } from "../components/User";



export const Home = ( ) => {
    const [user, SetUser] = useState<UserProps | null>(null);
    const [error, SetError] = useState(false)
    
    const loadUser = async (userName:String) => {
        
        SetError(false);
        SetUser(null);
        
        const res = await fetch(`https://api.github.com/users/${userName}`)
        
        const data = await res.json();

        if (res.status === 404) {
            SetError(true);
            return;
        }

        const { avatar_url, login, location, followers, following} = data;

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        };

        SetUser(userData);
    }
    return (
        <div className="">
            <Search loadUser={loadUser} />
            {user && <User {...user}/>}
            {error && <Erro />}
        </div>
    );
}