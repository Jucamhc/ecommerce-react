import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import { useStateValue } from '../StateProvider';
import Box from '@mui/material/Box';


export default function CheckoutPage() {

    const [{ basket }, dispatch] = useStateValue();

    function FormRow() {
        return (
            <React.Fragment>
                {basket?.map((item) => (
                    <Grid item xs={12} sm={8} md={6} lg={4} key={item.id}>
                        <CheckoutCard product={item} key={item.id} />
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    return (

        <Box sx={{ flexGrow: 1 }} padding={6} mb={10}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography align="center" gutterBottom variant="h5">
                        <h3>Carrito de Compra</h3>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={4}>
                    <FormRow />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align="center" gutterBottom variant="h5">
                        <Total />
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )

}