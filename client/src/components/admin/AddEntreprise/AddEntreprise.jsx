import React, {useState, useEffect} from 'react';
import EntrepriseService from '../../../services/EntrepriseServices.js';
import NavBar from "../../NavBar/Navbar";
import {Card, Col, Form, Row} from 'react-bootstrap';
import Button from '@mui/material/Button';
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from "axios";
import './add.css';

const AddEntreprise = () => {

    const [data, setData] = useState({
		name: "",
		secteur: "",
		ville: "",
		tel: "",
        address: "",
        website: "",
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

	const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(id == -1){


                const url = "http://localhost:8080/api/entreprise/create";
                const { data: res } = await axios.post(url, data);
                navigate("/");
                console.log(res.message);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'New Entreprise has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            }else{
                console.log('data : ' + JSON.stringify(data));
                EntrepriseService.updateEntreprise(id, data)
                    .then((result) => {
                        console.log('result : ' + result);
                        navigate("/");
                    })
                    .catch((err) => {
                        console.log('err : '  + err);
                })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Entreprise has been updated',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
    <>
        <NavBar />
        
        <Card style={{ width: '40rem' }} onSubmit={handleSubmit} className="addContainer border border-dark bg-dark text-white">
            <Card.Header>
                {
                    id == -1 ?
                        <div> Add Entreprise </div>
                    :
                        <div> Update Entreprise </div>
                }
                
            </Card.Header>

            <Form>
                <Card.Body>   
                            <Row>
                                <Form.Group className="mb-3" as={Col}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="test" name="name" value={data.name} onChange={handleChange} placeholder="Enter Entreprise Name" className={"bg-dark text-white"} />
                                </Form.Group>
                                <Form.Group className="mb-3" as={Col}>
                                        <Form.Label>Secteur</Form.Label>
                                        <Form.Control type="test" name="secteur" value={data.secteur} onChange={handleChange} placeholder="Enter Entreprise Secteur" className={"bg-dark text-white"} />
                                </Form.Group>
                            </Row>
                            
                            <Row>
                                <Form.Group className="mb-3" as={Col}>
                                    <Form.Label>Ville</Form.Label>
                                    <Form.Control type="test" name="ville" value={data.ville} onChange={handleChange} placeholder="Enter Entreprise Ville" className={"bg-dark text-white"} />
                                </Form.Group>
                                <Form.Group className="mb-3" as={Col}>
                                        <Form.Label>Tel</Form.Label>
                                        <Form.Control type="test" name="tel" value={data.tel} onChange={handleChange} placeholder="Enter Entreprise Tel" className={"bg-dark text-white"} />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" as={Col}>
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="test" name="address" value={data.address} onChange={handleChange}  placeholder="Enter Entreprise Address" className={"bg-dark text-white"} />
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col}>
                                <Form.Label>Web Site</Form.Label>
                                <Form.Control type="test" name="website" value={data.website} onChange={handleChange}  placeholder="Enter Entreprise Web Site" className={"bg-dark text-white"} />
                            </Form.Group>

                            <Row>
                                <Form.Group className="mb-3" as={Col}>
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control type="test" name="Longitude" value={data.Longitude} onChange={handleChange}  placeholder="Enter Entreprise Longitude" className={"bg-dark text-white"} />
                                </Form.Group>
                                <Form.Group className="mb-3" as={Col}>
                                    <Form.Label>Latitude</Form.Label>
                                    <Form.Control type="test" name="Latitude" value={data.Latitude} onChange={handleChange}  placeholder="Enter Entreprise Latitude" className={"bg-dark text-white"} />
                                </Form.Group>
                            </Row>
                            <Form.Group controlId="formFileSm" className="mb-3 ">
                                <Form.Label>Upload Image</Form.Label>
                                <Form.Control type="file" name="image" value={data.image} onChange={handleChange} size="sm" />
                            </Form.Group>
                </Card.Body>
            </Form>

            <Card.Footer style={{textAlign:'right'}}>
                <Button variant="contained" onClick={handleSubmit} color="primary" >
                    {
                        id == -1 ?
                            <span>Save</span>
                        :
                            <span>Update</span>
                    }
                     
                </Button>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary"  style={{ marginLeft:'15px'}}>
                        Cancel
                    </Button>
                </Link>
            </Card.Footer>
        </Card>
        
    </>
  );
};

export default AddEntreprise;