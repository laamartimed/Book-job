import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Map from "./components/user/map/map";
import DetailEntr from "./components/user/entrprisedetails/detailEntr";
import AddEntreprise from "./components/admin/AddEntreprise/AddEntreprise.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const user = localStorage.getItem("token");
	
	return (
		<Routes>
			{user && <Route path="/" exact element={<Main /> } />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/map" exact element={<Map />} />
			<Route path="/entreDetail/:id" exact element={<DetailEntr />} />
			<Route path="/add-entreprise/:id" exact element={<AddEntreprise />} />
			<Route path="/" element={<Navigate replace to="/login" />} />

		</Routes>
	);
}

export default App;
