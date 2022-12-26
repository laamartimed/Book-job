import React, { Component, useState, useEffect } from 'react'
import NavBar from '../../NavBar/Navbar'
import './details.css'
import EntrepriseService from '../../../services/EntrepriseServices'
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';

const DetailEntr = () => {
    const [data, setData] = useState({
		name: "",
		secteur: "",
		ville: "",
		tel: "",
        address: "",
		Longitude: "",
		Latitude: "",
		image: "",
	});

    const {id} = useParams();

    useEffect(() => {
        EntrepriseService.getEntrepriseById(id)
            .then((result) => {
                
                setData({
                    name: result.data.name,
                    secteur: result.data.secteur,
                    ville: result.data.ville,
                    tel: result.data.tel,
                    address: result.data.address,
                    website: result.data.website,
                    Longitude: result.data.Longitude,
                    Latitude : result.data.Latitude,
                    //image: result.data.image
                })
            })
            .catch((err) => console.log('err : ' + err));
    }, []);

    
    return (
        <>
            <NavBar/>
            <div class="page-content page-container" id="page-content">
                <div class="padding">
                    <div class="row container d-flex justify-content-center">
                        <div class="col-xl-6 col-md-12">
                            <div class="card user-card-full">
                                <div class="row m-l-0 m-r-0">
                                        <div class="col-sm-4 bg-c-lite-green user-profile">
                                            <div class="card-block text-center text-white">
                                                <div class="m-b-25">
                                                    <img src={require('../../../img/téléchargé (1).png')} class="img-radius" alt="User-Profile-Image"/>
                                                </div>
                                                    <h6 class="f-w-600">{data.name}</h6>
                                                    <p>{data.secteur}</p>
                                                    <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                            </div>
                                        </div>
                                <div class="col-sm-8">
                                    <div class="card-block">
                                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600">information Entreprise</h6>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Email</p>
                                                <h6 class="text-muted f-w-400">entreprise@gmail.com</h6>
                                            </div>
                                            <div class="col-sm-6">
                                            <p class="m-b-10 f-w-600">Phone</p>
                                            <h6 class="text-muted f-w-400">{data.tel}</h6>
                                            </div>
                                        </div>
                                        <br/>
                                       
                                        <br/>
                                           {/**  <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">description</h6>*/}
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">ville</p>
                                                    <h6 class="text-muted f-w-400">{data.ville}</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Address</p>
                                                    <h6 class="text-muted f-w-400">{data.address}</h6>
                                                </div>
                                            </div>
                                            <ul class="social-link list-unstyled m-t-40 m-b-10">
                                            <footer>
                                                <section class="links">
                                                    <div>
                                                        <Button variant="contained" color="primary" >
                                                            <a style={{textDecoration: 'none', color: 'white'}} href={data.website} target='_blank'  rel="noreferrer">Contact me</a>
                                                        </Button>
                                                    </div>
                                                </section>
                                            </footer>                                             
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
  }

export default DetailEntr;