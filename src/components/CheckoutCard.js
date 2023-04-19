import * as React from 'react';
import { makeStyles, styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from 'accounting'
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


export default function CheckoutCard({ product: { id, name, productType, imagen, price, rating, description } }) {
    
    const [{ basket }, dispatch] = useStateValue();

    const removeItem = () => dispatch({
        type: actionTypes.REMOVE_ITEM,
        id: id,
    })

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                action={
                    <Typography

                        variant='h5'
                        color='textSecondary'
                    >
                        {accounting.formatMoney(price, "$", 0)}
                    </Typography>
                }
                title={name}
                subheader={productType}
            />
            <CardMedia
                component="img"
                height="194"
                image={imagen}
                title={name}
            />

            <CardActions disableSpacing>
                <Grid container justifyContent="space-between">
                    <Grid item sx={{ display: "flex", alignItems: "center" }}>
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>&#11088;</p>
                            ))}
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <DeleteIcon fontSize='large' onClick={removeItem} />
                        </IconButton>
                    </Grid>
                </Grid>
            </CardActions>

        </Card>
    );
}


