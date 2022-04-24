import  React, {useState} from "react";
import NavBar from "../NavBar/Navbar";
import {Card, Table, ButtonGroup} from 'react-bootstrap';
import Button from '@mui/material/Button';
import './styles.module.css';

const Main = () => {
	
	const [entreprises, setEntreprises] = useState({});

	

	return (
		<>
			<NavBar />
			{/* 
			<Card style={{ width: '70rem' }} className="container2 border border-dark bg-dark text-white">
                <Card.Header>
                    Entreprise List
                    <Button variant="contained" color="primary"  style={{marginLeft:'820px'}}>Add Entreprise</Button>
                </Card.Header>

                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>Code</th>
                            <th>Libelle</th>
                            <th>Address</th>
                            <th>Ville</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.agences.length === 0 ? 
                                    <tr align="center">
                                        <td colSpan="5"> No Agences Available </td>
                                    </tr>
                                    :
                                    this.state.agences.map(agence =>
                                        <tr key={agence.id}>
                                            <td>{agence.code}</td>
                                            <td>{agence.libelle}</td>
                                            <td>{agence.address}</td>
                                            <td>{agence.ville} </td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button variant="contained" color="primary" onClick={() => this.editAgence(agence.id)} style={{height: '38px', fontSize:'15px', marginRight:'20px'}}></Button>{' '}
                                                    <Button variant="contained" color="secondary" onClick={() => this.deleteAgence(agence.id)} style={{height: '38px', fontSize:'15px', marginRight:'-150px'}}></Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    )
                            }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
			*/}					
		</>
		
	);
};

export default Main;
