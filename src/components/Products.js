import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from './Product';
import products from './../product-data';



export default function Products() {
    return (
        <Box sx={{ flexGrow: 1 }} padding={3}>
            <Grid container spacing={3}>

                {
                    products.map(product => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Product key={product.id} product={product} />
                        </Grid>
                    ))
                }

            </Grid>
        </Box>
    );
}
