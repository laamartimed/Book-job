import React, { Component } from 'react';
import EntrepriseService from '../../../services/EntrepriseServices.js';
import { Link } from 'react-router-dom';
import '../AddEntreprise/add.css';
import {Card, Table, ButtonGroup} from 'react-bootstrap';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';


export default class listEntreprise extends Component {
    constructor(props){
        super(props)

        this.state = {
            entreprise : []
        }

        this.deleteEntreprise = this.deleteEntreprise.bind(this);
    }

    componentDidMount(){
        EntrepriseService.getEntreprises()
            .then((res) => {
                this.setState({entreprise: res.data});
            })
            .catch((err) => console.log('error : ' + err));
    }

    deleteEntreprise = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                EntrepriseService.deleteEntreprise(id)
                .then((res) => {
                    this.setState({entreprise : this.state.entreprise.filter(entr => entr._id !== id)});
                })
                .catch((err) => console.log('error : ' + err));
                Swal.fire(
                'Deleted!',
                'Your Entreprise has been deleted.',
                'success'
                )
            }
        })
        
    }

    render() {
        return (
        <>
            
                <Card style={{ width: '75rem' }} className="container2 border border-dark bg-dark text-white">
                    <Card.Header>
                            <span style={{marginRight:'5px'}}></span> Entreprise List
                            <Link to="/add-entreprise/-1" style={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="primary"  style={{marginLeft:'880px'}}>Add Entreprise</Button>
                            </Link>
                            
                    </Card.Header>

                    <Card.Body>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Secteur</th>
                                    <th>Ville</th>
                                    <th>Address</th>
                                    <th>Tel</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.entreprise.length === 0 ?
                                        <tr align="center">
                                            <td colSpan="5"> No Entreprise Available </td>
                                        </tr>
                                    :
                                    this.state.entreprise.map(entr => 
                                        <tr key={entr._id}>
                                            <td>{entr.name}</td>
                                            <td>{entr.secteur}</td>
                                            <td>{entr.ville}</td>
                                            <td>{entr.address}</td>
                                            <td>{entr.tel}</td>
                                            <td>
                                                <ButtonGroup>
                                                    <Link to={`/add-entreprise/${entr._id}`} style={{ textDecoration: 'none' }}>
                                                        <IconButton variant="contained" size="large" color="primary" style={{marginRight:'10px'}}>
                                                            <EditIcon />
                                                        </IconButton>
                                                    </Link>
                                                    
                                                    <IconButton variant="contained" size="large" color="error" onClick={() => this.deleteEntreprise(entr._id)} style={{ marginRight:'-180px'}}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            
        </>
        )
    }
}
