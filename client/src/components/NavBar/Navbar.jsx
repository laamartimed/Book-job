import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const NavBar = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("role");
		window.location.reload();
	};

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const role = localStorage.getItem("role");
  
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = (event) => {
		setAnchorElNav(null);
	};


	return (
		<>
			<AppBar  position="static" >
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
						>
							ESISA
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left"
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left"
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" }
								}}
							>
								{
									role === 'admin' ?
										<>
											<Link to="/" style={{ textDecoration: 'none' }}>
												<MenuItem onClick={handleCloseNavMenu}>
													<Typography textAlign="center">Entreprises</Typography>
												</MenuItem>
											</Link>

											<Link to="/add-entreprise" style={{ textDecoration: 'none' }}>
												<MenuItem onClick={handleCloseNavMenu} >
													<Typography textAlign="center">Add Entreprises</Typography>
												</MenuItem>
											</Link>
										</>
									: 
									<MenuItem onClick={handleCloseNavMenu} >
										<Typography textAlign="center">Map Entreprises</Typography>
									</MenuItem>
								}
							</Menu>
						</Box>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
						>
							ESISA
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							{
								role === 'admin' ?
								<>
									<Link to="/" style={{ textDecoration: 'none' }}>
										<Button
											sx={{ my: 2, color: "white", display: "block" }}
										>
											Entreprises
										</Button>
									</Link>
									
									<Link to="/add-entreprise/-1" style={{ textDecoration: 'none' }}>
										<Button
											sx={{ my: 2, color: "white", display: "block" }}
										>
											Add Entreprises
										</Button>
									</Link>	
								</>
								:
									<Link to='/map' style={{ textDecoration: 'none' }}>
										<Button
											sx={{ my: 2, color: "white", display: "block" }}
										>
											Map Entreprises
										</Button>
									</Link>
							}
								
						</Box>

						<Button color="inherit" onClick={handleLogout}>Logout</Button>
					</Toolbar>
				</Container>
			</AppBar>
		</>
		
	);
};

export default NavBar;
