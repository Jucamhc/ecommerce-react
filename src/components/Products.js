import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Product from './Product';
import { useStateValue } from '../StateProvider';
import Input from '@mui/material/Input';
import { Label } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';


export default function Products() {
    let [{ produ }, dispatch] = useStateValue();


    let products = produ.filter(product => product.state === 1);
    const [name, setName] = useState("")
    const [productsFil, setProductsFil] = useState(products)
    const [rating, setRating] = useState(0)

    //let products = produ.filter(product => product.name === "");
    const handelclickBuscarpornombre = () => {
        const searchName = name.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchName));
        setProductsFil(filteredProducts);
    }

    const handelclickLimpiarFiltro = () => {
        setProductsFil(products)
        setName("")
    }

    const handelclickRating = () => {
        const filteredProducts = products.filter(product => product.rating >= rating);
        setProductsFil(filteredProducts);
    }


    return (
        <Box sx={{ flexGrow: 1, padding: 8, marginBottom: 10 }}>
            <label>Buscar por nombre</label>
            <div style={{ margin: 30 }}>
              
                {/* Cliente encontrar los ítems por nombre. */}
                <Input
                    style={{ width: 500 }}
                    type="text"
                    id="InputName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Escribe el nombre del producto..."
                />
                <Button variant="contained" onClick={handelclickBuscarpornombre} sx={{ marginLeft: 2 }}>
                    Buscar
                </Button>
                <Button variant="outlined" onClick={handelclickLimpiarFiltro} sx={{ marginLeft: 2 }}>
                    Limpiar Filtro
                </Button>


                <label style={{ paddingLeft: 20 }} htmlFor="rating">Selecciona el rating:</label>
                <input

                    type="range"
                    min="0"
                    max="5"
                    id="rating"
                    value={rating - 1}  // Restar 1 para ajustar visualmente de 0 a 5 a internamente de 1 a 5
                    onChange={(e) => {
                        const visualValue = Number(e.target.value);
                        const normalizedRating = visualValue + 1;
                        setRating(normalizedRating);
                        handelclickRating();
                    }}
                    sx={{ marginTop: 2 }}
                />
                <label style={{ paddingLeft: 20 }}>Rating seleccionado: {rating}</label>


            </div>

            <Grid container spacing={2}>
                {productsFil.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        {/* Asumiendo que Product es un componente que renderiza un producto */}
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
