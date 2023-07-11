import React from 'react';


function Film({children, url}){
    
    return (
        <>
        <li><a href={url}>{children}</a></li>
        </>
    )
};

export default Film;