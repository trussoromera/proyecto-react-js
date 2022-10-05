import { Form, Button } from 'react-bootstrap'

function CartForm({ confirmarCompra }){
    return(
        <Form id="form" action="#" onSubmit={confirmarCompra} className='d-flex flex-column m-auto text-white fw-bold col-12 col-md-4'>
            <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Apellido y Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ex. Juan Perez" />                    
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Direccion de mail</Form.Label>
                <Form.Control type="email" placeholder="exmple@gmail.com" />                    
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTel">
                <Form.Label>Numero de telefono</Form.Label>
                <Form.Control type="tel" placeholder="Ex. 4567-4582" />
            </Form.Group>
            
            <Button variant="primary" className='fs-5' type="submit">Comprar</Button>
        </Form>
    );
}

export default CartForm;