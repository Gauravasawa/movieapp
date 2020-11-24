import React, { useState,useEffect } from 'react'
import Movieitem from './Movieitem';
import axios from "axios";

const Movielist=()=> {

        const [items,setitems]= useState([])

        useEffect(() => {
          
            const key = "5f0af74e9e48ac099b16b8276c1678c8";

            const getmoviedata = async () => {

                const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`);

                setitems(res.data.results);
            };

            getmoviedata();

        }, []);

        

    return (
        <div>
            <div className="container">

                <div className="row">

{items.map( (items)=>(

<Movieitem key={items.id} items={items} />

))}


                </div>
            </div>
            
        </div>
    )
}

export default Movielist
