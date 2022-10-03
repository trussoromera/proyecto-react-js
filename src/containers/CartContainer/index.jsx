import { useContext } from 'react'
import { Shop } from '../../context/ShopProvider';
import { DataGrid } from '@mui/x-data-grid';
import { Button, CircularProgress } from "@mui/material";
import './style.scss';

const Cart = () => {

  const { cart, removeItem, clearCart } = useContext(Shop);

  const renderImg = (image) => {
    return (
      <img src={image.value} alt= "cart-prod" style={{height: "100px"}}></img>
    )
  }

  const renderRemover = (item) => {
    const product = item.value;
    return (
      <Button
      onClick={() => removeItem (product)} variant ="contained" color="error">
        
      </Button>
    )
  }


  const columns = [
    { field: 'image', headerName: 'Image', width: 400, renderCell: renderImg },
    { field: 'title', headerName: 'Product', width: 450 },
    { field: 'quantity', headerName: 'Quantity', width: 80 },
    {field: 'remove', headerName: '',width: 120, renderCell: renderRemover},
    
  ];
  // asignamos un array con cada fila de la tabla, utilizando el cart
  const filas = []
  cart.forEach(item => {
    filas.push({
      id: item.id,
      image: item.image,
      title: item.title,
      quantity: item.quantity
    })
  })



  return (
    <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={filas}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                rowHeight={150}
            />
            <Button onClick={clearCart} color="error" variant="outlined">
                Clear cart
            </Button>
            {loading ? (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                    }}
                >
                    <CircularProgress/>
                </div>
            ) : (
                <Button onClick={handleBuy}>Confirmar compra</Button>
            )}
        </div>
  );
}



export default Cart