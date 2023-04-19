import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import { useStateValue } from '../StateProvider';


export default function CheckoutPage() {

    const [{ basket }, dispatch] = useStateValue();
    
    function FormRow() {
        return (
            <React.Fragment>
                {basket?.map((item) => (
                    <Grid item xs={12} sm={8} md={6} lg={4} key={item.id}>
                        <CheckoutCard product={item} />
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    return (


        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography align="center" gutterBottom variant="h4">
                    Shopping Cart
                </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} container spacing={4}>
                <FormRow />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Typography align="center" gutterBottom variant="h4">
                    <Total />
                </Typography>
            </Grid>
        </Grid>
    )

}