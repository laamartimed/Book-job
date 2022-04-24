import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import AddEntreprise from "./components/AddEntreprise/AddEntreprise";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const user = localStorage.getItem("token");
	/*fetch('http://localhost:8080/api/auth', {
		method: 'POST',
		headers: {
    		'Authorization': user
  		}
	})*/

	//console.log('user ' + user);   
	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/add-entreprise" exact element={<AddEntreprise />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
