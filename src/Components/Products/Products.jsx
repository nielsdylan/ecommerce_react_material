import { Link } from "react-router-dom";

import { Box, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography, CardActionArea, IconButton, styled } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// const CardActionsCSS = styled(CardActions)`
//     text-align: left;
//     color: 
// `;
const CardActionsCSS = styled(CardActions)({
    textAlign: 'left',
});
const Products = () => {
    return ( 
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} >
                        <Card>
                            <CardActionArea component={Link} to={"/producto"} sx={{ textDecoration: "none" }}>
                                <CardMedia
                                    // sx={{backgroundImage: "https://storage.contextoganadero.com/s3fs-public/cronica_de_la_semana/field_image/2022-03/cronica-origen-hamburguesas.jpg"}}
                                    component="img"
                                    alt="Hamburgesa"
                                    height="170"
                                    image="https://storage.contextoganadero.com/s3fs-public/cronica_de_la_semana/field_image/2022-03/cronica-origen-hamburguesas.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Hamburgesa
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">S/6</Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActionsCSS>
                                <Box sx={{ flexGrow: 1, }}>
                                </Box>
                                <IconButton color="primary" >
                                    <AddShoppingCartIcon />
                                </IconButton>
                                {/* <Button variant="outlined" startIcon={<AddShoppingCartIcon />} ></Button> */}
                            </CardActionsCSS>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3}>
                        <Card>
                            <CardActionArea component={Link} to={"/producto"} sx={{ textDecoration: "none" }}>
                                <CardMedia
                                    component="img"
                                    height="170"
                                    image="https://cnnespanol.cnn.com/wp-content/uploads/2021/08/CNN-hotdog.jpeg?quality=100&strip=info"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Hotdog
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">S/6</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Box sx={{ flexGrow: 1, }}>
                                </Box>
                                <IconButton color="primary" >
                                    <AddShoppingCartIcon />
                                </IconButton>
                                {/* <Button size="small">AGREGAR</Button> */}
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3}>
                        <Card >
                            <CardActionArea component={Link} to={"/producto"} sx={{ textDecoration: "none" }}>
                                <CardMedia
                                    component="img"
                                    alt="Hamburgesa"
                                    height="170"
                                    image="https://mejorconsalud.as.com/wp-content/uploads/2013/07/patatas-fritas-.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Patatas fritas
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">S/6</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {/* <Button size="small">AGREGAR</Button> */}
                                <Box sx={{ flexGrow: 1, }}>
                                </Box>
                                <IconButton color="primary" >
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} >
                        <Card>
                            <CardActionArea component={Link} to={"/producto"} sx={{ textDecoration: "none" }}>
                                <CardMedia
                                    // sx={{backgroundImage: "https://storage.contextoganadero.com/s3fs-public/cronica_de_la_semana/field_image/2022-03/cronica-origen-hamburguesas.jpg"}}
                                    component="img"
                                    alt="Hamburgesa"
                                    height="170"
                                    image="https://storage.contextoganadero.com/s3fs-public/cronica_de_la_semana/field_image/2022-03/cronica-origen-hamburguesas.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Hamburgesa
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">S/6</Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions>
                                {/* <Button size="small">AGREGAR</Button> */}
                                <Box sx={{ flexGrow: 1, }}>
                                </Box>
                                <IconButton color="primary" >
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Products;