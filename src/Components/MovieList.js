import React from 'react';
import ReactStars from "react-rating-stars-component";
import Logo from '../Logo.png'
import { Link } from 'react-router-dom';



const MovieList =({movies,searchmovie,rating, movie})=> {
                    
                    return (
                                        <>

                                                            {movies.filter(movie=> movie.title.toLowerCase().includes(searchmovie.toLowerCase()) && movie.rate>=rating)
                                                            .map((movie, index) => (  
                                                            <div key ={index} className='caontainer-liste d-flex justify-content-between'>
                                                            <img src={movie.posterUrl} alt='movies' style={{width:'200', height:'200px'}} />
                                                            <h4> {movie.title} </h4>
                                                            <p>{movie.description}</p>
                                                            {/* ici je met un lien  */}
                                                            <Link to={`/DescriptionMovie/${movie.title}`} >  
                                                                                <div className='d-flex flex-column align-items-center'> 
                                                                                <img src={Logo} alt='see more' width='35px'/>
                                                                                <span style={{color:'white' ,fontSize:'1.2em', textDecoration:'none'}}> See More ? </span>
                                                                                </div>
                                                            </Link>
                                                            <ReactStars
                                                            classNames='reactStars'
                                                            style={{marginBottom:'5px'}}
                                                            count={5}
                                                            value={movie.rate}
                                                            size={24}
                                                            activeColor="#ffd700"
                                                            />
                                                            </div>
                                                            
                                                            ))}                                
                                        </>
                    );


};
export default MovieList;



//                                                             