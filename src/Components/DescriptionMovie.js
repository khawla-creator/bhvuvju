import React from 'react'
import ReactStars from "react-rating-stars-component";



function DescriptionMovie(props) {
                    // console.log(props.match.params) 
                    const film =props.movies.find(fi => fi.title=== props.match.params.movie

                    )
                                        return (  

                                 

                    <div key={film.id} className='caontainer-liste d-flex justify-content-between'>
                     <img src={film.posterUrl} alt='movies' style={{width:'200', height:'200px'}} />
                    <h4> {film.title} </h4>
                    <p>{film.description}</p>
                    <ReactStars
                    classNames='reactStars'
                    style={{marginBottom:'5px'}}
                    count={5}
                    value={film.rate}
                    size={24}
                    activeColor="#ffd700"
                    /> 
                    </div>
                    )
}


export default DescriptionMovie
