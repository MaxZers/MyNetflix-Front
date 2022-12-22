import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import BackpackIcon from '@mui/icons-material/Backpack';

const Navbar = ({favoriteMoviesQty}) => {
    const navigate = useNavigate()

    let toShow ="";
    if (favoriteMoviesQty > 0){
        toShow = "!";
    }

    return (
        <AppBar position="static" color="secondary">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        textDecoration: "none",
                        color: "inherit",
                        display: { xs: "none", md: "flex" },
                    }}
                    >
                        My Netflix
                    </Typography>
                    <Box sx={{ flexGrow:1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow:1, display: { xs: "none", md: "flex" } }}>

                        <Link to="/admin" style={{ textDecoration: "none" }}>
                            <Button sx={{ my: 2, color: "white", display: "block" }}>
                                Admin
                            </Button>
                        </Link>

                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Button sx={{ my: 2, color: "white", display: "block" }}>
                            Movies Catalog
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Badge badgeContent={
                            <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                color: "yellow",
                                //display: { xs: "none", md: "flex" },
                            }}
                            >
                                {toShow}
                            </Typography>
                            }>
                            <IconButton sx={{ p: 0}} onClick={() => navigate('/favorites')} >
                                <Button sx={{ my: 0, color: "white", display: "block" }}>
                                    Favorites
                                </Button>
                                <BackpackIcon sx={{ color: "white" }} />
                            </IconButton>
                        </Badge>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
  };

  export default Navbar;