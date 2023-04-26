import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Product from './Product';
import { useStateValue } from '../StateProvider';



export default function Products() {
    let [{ produ }, dispatch] = useStateValue();


    let products = produ.filter(product => product.state === 1);
    return (
        <Box sx={{ flexGrow: 1 }} padding={8} mb={10}>
            <Grid container spacing={2}>
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
