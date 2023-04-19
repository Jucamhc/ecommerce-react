import * as React from 'react';
import { styled } from '@mui/material/styles';
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


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Product({ product: { id, name, productType, imagen, price, rating, description } }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {productType}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>

                <IconButton aria-label="add to Cart" >
                    <AddShoppingCartIcon />
                </IconButton>

                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>&#11088;</p>
                    ))}

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>{description}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
