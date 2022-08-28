import { Box, Container, Grid } from "@mui/material";
import Categorys from "../Components/Products/Categorys";
import Products from "../Components/Products/Products";

const ListProducts = () => {
    return ( 
        <Container>
            <Box sx={{ flexGrow: 1, pt: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Categorys></Categorys>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Products></Products>
                    </Grid>
                </Grid>
            </Box>
        </Container>
     );
}
 
export default ListProducts;