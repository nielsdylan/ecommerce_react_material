import { AppBar, Toolbar, Container, IconButton, styled, Typography, Box } from "@mui/material";
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
                    
                    <Box sx={{ flexGrow: 1, }}>
                        <Typography variant="h6" component="div" color="primary">
                            Ecommerce
                        </Typography>
                    </Box>
                    <NavLink to="/" sx={{ flexGrow: 1 }}> LISTA DE PRODUCTOS</NavLink>
                    <IconButton color="primary">
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBarCss>
     );
}
 
export default NavBar;