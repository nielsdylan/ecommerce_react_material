import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Box, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography, CardActionArea, IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { getProducts } from "../../Services/Products";
import { TYPES } from "../../Actions/ShoppingAction";


const Products = ({dispatch}) => {
    const [products, productsSet] = useState([]);
    useEffect(() => {
        Products();
    }, []);

    const Products = async () =>{
        let response = await getProducts();
        productsSet(response.data);
    }

    // const [state, dispatch] = useReducer(ShoppingReducers, shoppingInitialState)
    const addToCart = (id) =>{
        dispatch({type:TYPES.ADD_TO_CART, payload:id, data:products});
    };
    return ( 
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {
                    products.map((product)=>(
                        <Grid item xs={12} md={4} key={product.product_id}>
                            <Paper elevation={3} >
                                <Card>
                                    <CardActionArea component={Link} to={"/producto"} sx={{ textDecoration: "none" }}>
                                        <CardMedia
                                            // sx={{backgroundImage: "https://storage.contextoganadero.com/s3fs-public/cronica_de_la_semana/field_image/2022-03/cronica-origen-hamburguesas.jpg"}}
                                            component="img"
                                            alt={product.name}
                                            height="170"
                                            image={product.image}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {product.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">S/{product.price}</Typography>
                                        </CardContent>
                                    </CardActionArea>

                                    <CardActions>
                                        <IconButton color="primary" sx={{ marginLeft: "auto" }} onClick={()=>addToCart(product.product_id)}>
                                            <AddShoppingCartIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>
                    ))
                }

                {/* <Grid item xs={12} md={4}>
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
                                <IconButton color="primary" sx={{ marginLeft: "auto" }}>
                                    <AddShoppingCartIcon />
                                </IconButton>
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
                                <IconButton color="primary" sx={{ marginLeft: "auto" }}>
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
                                <IconButton color="primary" sx={{ marginLeft: "auto" }}>
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid> */}
            </Grid>
        </Box>
     );
}
 
export default Products;