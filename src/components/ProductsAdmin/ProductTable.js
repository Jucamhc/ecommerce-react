//import produ from './../../product-data';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { IconButton, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useStateValue } from '../../StateProvider';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import accounting from 'accounting';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};




export default function BasicTable() {

    let [{ produ, showUpProdu, login }, dispatch] = useStateValue();
    // Monstrar los productos activos
    let products = produ.filter(product => product.state === 1)
    const navigate = useNavigate();

    React.useEffect(() => {
        if (login === null) {
            navigate('/SignIn');
        }
    }, [login, navigate]);



    const statusProduct = (id) => {
        dispatch({ type: 'DELETE_PRODUCT', products: id });
    }


    const [open, setOpen] = React.useState(false);
    const handleOpen = (id) => {
        if (typeof (id) == "number") {
            const editPro = products.filter(product => product.id === id)
            dispatch({ type: 'OPEN_MODAL_EDIT_PRODUCT', product: editPro });
        } if ((id === "new") || id === "string" || id === "undefined") {
            dispatch({ type: 'OPEN_MODAL_EDIT_PRODUCT', product: [] });
        }
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };

    const updateProduct = () => {

        const id = document.getElementById("savePro").value;
        const name = document.getElementById("name").value;
        const productType = document.getElementById("productType").value;
        const price = document.getElementById("price").value + ".";
        const rating = document.getElementById("rating").value;
        const imagen = document.getElementById("imagen").value;
        const description = document.getElementById("description").value;
        const state = 1

        if (name === "" || productType === "" || price === "" || rating === "" || imagen === "" || description === "") {
            return alert("Faltan algunos dotos para ternimar")
        }

        dispatch({ type: 'EDIT_PRODUCT', product: { id, name, productType, price, rating, imagen, description, state } });
        setOpen(false);
    }


    return (

        <Container fixed sx={{ mt: 5 }}>
            <Typography align="center">
                <h2> Productos del Ecommers
                    <IconButton onClick={() => { handleOpen("new") }} sx={{ bgcolor: '#FCBD00 ', borderRadius: '40%', ml: 5 }} aria-label="add items" >
                        <AddIcon fontSize='medium' />
                    </IconButton>
                </h2>
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 2, mb: 15, }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Nombre</TableCell>
                            <TableCell align="right">Tipo Producto</TableCell>
                            <TableCell align="right">Precio</TableCell>
                            <TableCell align="right">Raquin</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.id}
                                </TableCell>
                                <TableCell align="right">{product.name}</TableCell>
                                <TableCell align="right">{product.productType}</TableCell>
                                <TableCell align="right">{accounting.formatMoney(product.price, "$", 0)}</TableCell>
                                <TableCell align="right">{product.rating}</TableCell>
                                <TableCell align="center">
                                    <IconButton tabindex={product.id} aria-label="Edit items" >
                                        <EditIcon onClick={() => { handleOpen(product.id) }} fontSize='medium' />
                                    </IconButton>

                                    <IconButton aria-label="Delete items" >
                                        <DeleteIcon onClick={() => { statusProduct(product.id) }} fontSize='medium' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box component="form"
                    sx={{ ...style, width: 600, '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <h2 id="parent-modal-title"> {typeof (showUpProdu[0]?.id) == "number" ? "Editar" : "Crear"} </h2>

                    <div>
                        <TextField
                            label="Nombre"
                            id="name"
                            size="small"
                            defaultValue={showUpProdu[0]?.name}
                            variant="standard"
                        />
                        <TextField
                            label="Tipo Producto"
                            id="productType"
                            size="small"
                            defaultValue={showUpProdu[0]?.productType}
                            variant="standard"
                        />
                        <TextField
                            label="Precio"
                            id="price"
                            type="number"
                            size="small"
                            defaultValue={showUpProdu[0]?.price}
                            variant="standard"
                        />

                        <TextField
                            label="Ranking"
                            type="number"
                            id="rating"
                            size="small"
                            defaultValue={showUpProdu[0]?.rating}
                            variant="standard"
                        />
                        <TextField
                            label="Imagen URL"
                            id="imagen"
                            size="small"
                            defaultValue={showUpProdu[0]?.imagen}
                            variant="standard"
                        />
                        <TextField
                            id="description"
                            label="Descripcion"
                            defaultValue={showUpProdu[0]?.description}
                            multiline
                            rows={4}
                            variant="standard"
                        />
                    </div>
                    <Button id="savePro" onClick={() => { updateProduct() }} value={showUpProdu[0]?.id ? showUpProdu[0]?.id : "undefined"} variant="contained">Guardar</Button>
                </Box>
            </Modal>

        </Container>

    );
}