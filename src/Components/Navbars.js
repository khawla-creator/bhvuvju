import React,{useState} from 'react';
import popMovies from '../Logo.png';
import {Form,FormControl,Button,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

                   



function Navbars({setsearchmovie, setRating,rate}) {
                    const ratingChanged = (newRating) => {
                                       return (  setRating(newRating));
                    };
            

                    return (
                                        <div >
                                        <Navbar className="bg-darck justify-content-between borderBottum">
                                        <div className='Logo-Title'> 
                                        <img src={popMovies} alt= 'logo' height={'45px'} style={{marginLeft:'40px', padding:'8px', borderRadius:'10px'}}/>
                                        <Link className="link active " to='/'> Pop Movies </Link>
                                        </div>
                                        <Form inline>
                                        <FormControl 
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-2"
                                        id='serchbar'
                                        onChange= { e => setsearchmovie(e.target.value)}
                                        />
                                        <Button type="submit" className='btn btn-warning'>Submit</Button>
                                        
                                        </Form>
                                        </Navbar>
                                        <div style={{ display:'flex', justifyContent:'center', margin:'10px' }}>
                                                            <ReactStars
                                                            onChange={ratingChanged}
                                                            style={{textAlign:'center', padding:'50px', whidth:'40px' }}
                                                            count={5}
                                                            size={24}
                                                            activeColor="#ffd700"
                                                            />
                                        </div>
                                        </div>
                                        
                    )
}

export default Navbars
