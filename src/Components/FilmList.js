import React from 'react';
import Film from './Film';

function FilmList({filmsData}){
    
    const filmNodes = filmsData.map(function (film){
        return(
            <Film key={film.id} url={film.url}>{film.name}</Film>
        )

    })

    return(
    <>
    <li>
       {filmNodes}
    </li>
    </>
    )

}

export default FilmList;