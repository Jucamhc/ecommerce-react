//import produ from './../../product-data';
import * as React from 'react';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { IconButton, Typography } from '@mui/material';
import { Link as RouteLink, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useStateValue } from '../../StateProvider';

export default function BasicTable() {

    let [{ produ }, dispatch] = useStateValue();

    const statusProduct = (id) => {
        dispatch({ type: 'DELETE_PRODUCT', products: id });
    }

    let products = produ.filter(product => product.state === 1)

    return (

        <Container fixed sx={{ mt: 5 }}>
            <Typography align="center">
                <h2> Productos del Ecommers
                    <IconButton sx={{ bgcolor: '#FCBD00 ', borderRadius: '40%', ml: 5 }} aria-label="add items" >
                        <RouteLink to="/checkout-page">
                            <AddIcon fontSize='medium' />
                        </RouteLink>
                    </IconButton>
                </h2>
            </Typography>

            <TableContainer component={Paper} sx={{ mt: 2, mb: 15, }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Nombre</TableCell>
                            <TableCell align="right">Tipo Producto</TableCell>
                            <TableCell align="right">Precio</TableCell>
                            <TableCell align="right">Raquin</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.id}
                                </TableCell>
                                <TableCell align="right">{product.name}</TableCell>
                                <TableCell align="right">{product.productType}</TableCell>
                                <TableCell align="right">{product.price}</TableCell>
                                <TableCell align="right">{product.rating}</TableCell>
                                <TableCell align="center">
                                    <RouteLink to="/checkout-page">
                                        <IconButton tabindex={product.id} aria-label="Edit items" >
                                            <EditIcon fontSize='medium' />
                                        </IconButton>
                                    </RouteLink>
                                    {/* <RouteLink to="/checkout-page"> */}
                                    <IconButton aria-label="Delete items" >
                                        <DeleteIcon onClick={() => { statusProduct(product.id) }} fontSize='medium' />
                                    </IconButton>
                                    {/* </RouteLink> */}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

