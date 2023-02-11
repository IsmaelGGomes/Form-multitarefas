import { BsSearch } from "react-icons/bs";
import React, { useState , KeyboardEvent } from "react";

import classes from './Search.module.css';

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
};

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUsername] = useState("");
    
    const handleKeydDown = (e: KeyboardEvent) => {
        if (e.key == "Enter") {
            loadUser(userName);
        }
    }

    return (
        <div className={classes.search}>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhores repositórios</p>
            <div className={classes.search_container}>
                <input type="text" name="" id="" 
                placeholder="Digite o nome do usuário" 
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeydDown}
                />
                <button type="button" onClick={()=> loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    );
};

export default Search;