import { AppBar, Toolbar, Container, IconButton, styled, Typography } from "@mui/material";
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const AppBarCss = styled(AppBar)({
    backgroundColor: '#fff',
});
const NavBar = () => {
    return ( 
        <AppBarCss position="static">
            <Container>
                <Toolbar style={{ color: "white" }}>
                    
                    <Typography variant="h6" component="div" color="primary">
                        Ecommerce
                    </Typography>
                    <NavLink to="/" sx={{ marginLeft: "auto" }}> LISTA DE PRODUCTOS</NavLink>
                    <IconButton color="primary" sx={{ marginLeft: "auto" }}>
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBarCss>
     );
}
 
export default NavBar;