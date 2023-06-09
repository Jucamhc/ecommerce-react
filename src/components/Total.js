import React from 'react'
import accounting from 'accounting'
import { Button } from '@mui/material'
import { getBasketTotal } from '../reducer'
import { useStateValue } from '../StateProvider';
import { Link, useNavigate } from 'react-router-dom';

const Total = () => {

    const [{ basket, login }, dispatch] = useStateValue();
    return (
        <div sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "20vh" }}>
            <br/>
            <br/>
            <h5>Total items: {basket?.length}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket), "$", 0)}</h5>
            {login != null ? 
            <Link to="/Checkout">
                <Button sx={{ marginTop: "2rem" , bgcolor: '#ff6961 ', borderRadius: '15%' }} variant='contained' color='error'>Verificar Compra</Button>
            </Link>
            : ""}
        </div>
    )
}

export default Total