import { Container, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Box, Grid, Avatar, TableHead, TextField } from "@mui/material";
import { useState } from "react";
const initialValues ={
    quantity:null
}
const ListCartShopping = ({cart}) => {
    
    const [number, setNumber] = useState(initialValues);
    const handleChange = (e) =>{
        setNumber({...number,[e.target.name]:e.target.value});
    }
    return ( 
        <Container>
            <Box sx={{ flexGrow: 1, pt: 5 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={12}>
                        <TableContainer >
                            <Table sx={{minWidth: 650}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Imagen</TableCell>
                                        <TableCell>Descripción</TableCell>
                                        <TableCell>Cantidad</TableCell>
                                        <TableCell>Precio</TableCell>
                                        <TableCell>Total</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {cart.map((row) => (
                                    <TableRow key={row.product_id} >
                                        <TableCell> 
                                            <Avatar
                                                alt={row.name}
                                                src={row.image}
                                                sx={{ width: 56, height: 56}}
                                                variant="square"
                                            />
                                        </TableCell>
                                        <TableCell >{row.name}</TableCell>
                                        <TableCell >{row.price}</TableCell>
                                        <TableCell >
                                            <TextField
                                                // id="outlined-number"
                                                onChange={(e)=> handleChange(e)}
                                                label="Number"
                                                type="number"
                                                // InputLabelProps={{
                                                //     shrink: true,
                                                // }}
                                                value={row.quantity}
                                            />
                                        </TableCell>
                                        <TableCell>{row.quantity * row.price}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    
                </Grid>
            </Box>

            
        </Container>
     );
}
 
export default ListCartShopping;