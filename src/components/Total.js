import React from 'react'
import accounting from 'accounting'
import { Button } from '@mui/material'


const Total = () => {


    return (
        <div  sx={{ display: "flex", flexDirection:"column", justifyContent:"center",  alignItems: "center", height:"20vh"}}>
            <h5>Total items: 3</h5>
            <h5>{accounting.formatMoney(50, "$", 0)}</h5>
            <Button sx={{marginTop: "2rem"}} variant='contained' color='error'>Check Out</Button>
        </div>
    )
}

export default Total