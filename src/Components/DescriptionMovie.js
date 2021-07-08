import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'; 
import {Button} from 'react-bootstrap'

function DescriptionMovie(props) {
                    // console.log(props.match.params) 
                    const film =props.movies.find(fi => fi.title=== props.match.params.movie

                    )
                                        return (  

                                 
                    
                                        <div key={film.id} className=' d-flex justify-content-between background'>
                                        <img src={film.posterUrl} alt='movies' style={{width:'300', height:'300px', borderRadius:'7px'}} />
                                                            <div className='description'> 
                                                            <h1> {film.title} </h1>
                                                            <h5>{film.description} </h5>
                                                            <div className='d-flex justify-content-between'>
                                                            <ReactStars
                                                            style={{marginBottom:'5px'}}
                                                            count={5}
                                                            value={film.rate}
                                                            size={30}
                                                            activeColor="#ffd700"
                                                            /> 
                                                            <Link to='/'> 
                                                            <Button className='btn btn-danger' > Go Back ? </Button>
                                                            </Link>
                                                            </div>
                                                            </div> 
                                        </div>
                   
                    
                    )
}
export default DescriptionMovie
