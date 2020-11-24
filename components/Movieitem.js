import React from 'react'
import './Movieitem.css'

    function Movieitem({items}) {

        const baseurl="https://image.tmdb.org/t/p/w500/";


    return (
        <div className="card col-lg-4 moviecard">
            <img src={`${baseurl}${items.poster_path}`} className="img-fluid" alt="img" />
           <div className="card-body">
    <h3>Rating:{items.vote_average}</h3>
    <h5>Release Date : {items.release_date}</h5>
               </div>
        </div>
    )
}

export default Movieitem
