import { AppBar, Toolbar, Container, IconButton, styled, Typography, Badge } from "@mui/material";
import { NavLink, Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const AppBarCss = styled(AppBar)({
    backgroundColor: '#fff',
});
function notificationsLabel(count: number) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
}

const NavBar = ({quantity}) => {
    return ( 
        <AppBarCss position="static">
            <Container>
                <Toolbar style={{ color: "white" }}>
                    
                    <Typography variant="h6" component="div" color="primary">
                        Ecommerce
                    </Typography>
                    <NavLink to="/" sx={{ marginLeft: "auto" }}> LISTA DE PRODUCTOS</NavLink>
                    <IconButton color="primary" sx={{ marginLeft: "auto" }} aria-label={notificationsLabel(quantity)} component={Link} to={"/carrito"}>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartIcon></ShoppingCartIcon>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBarCss>
     );
}
 
export default NavBar;