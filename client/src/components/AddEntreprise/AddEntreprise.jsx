import React, {useState} from 'react';
import NavBar from "../NavBar/Navbar";
import {Card, Col, Form, Row} from 'react-bootstrap';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './add.css';

const AddEntreprise = () => {

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

	const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/entreprise/create";
			const { data: res } = await axios.post(url, data);
            navigate("/");
            console.log(res.message);
        } catch (error) {
            console.log(error);
        }
    };

    return (
    <>
        <NavBar />
        
        <Card style={{ width: '40rem' }} onSubmit={handleSubmit} className="addContainer border border-dark bg-dark text-white">
            <Card.Header>
                Add Entreprise
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
                     save
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