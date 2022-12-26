import  React from "react";
import NavBar from "../NavBar/Navbar";
import ListEntreprise from '../admin/ListEntreprise/listEntreprise';
import Map from "../user/map/map";

const Main = () => {
	
    const role = localStorage.getItem('role');
	

	return (
		<>
			<NavBar />
            {
                role === 'admin' ?
                    <ListEntreprise/>
                :
                    <Map />
            }
		</>
	);
};

export default Main;
