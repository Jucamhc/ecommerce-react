import React from 'react'
import accounting from 'accounting'
import { Button } from '@mui/material'
import { getBasketTotal } from '../reducer'
import { useStateValue } from '../StateProvider';

const Total = () => {

    const [{ basket }, dispatch] = useStateValue();
    return (
        <div sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "20vh" }}>
            <h5>Total items: {basket?.length}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket), "$", 0)}</h5>
            <Button sx={{ marginTop: "2rem" }} variant='contained' color='error'>Check Out</Button>
        </div>
    )
}

export default Total