import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styles.scss'



function CartForm() {
    return (
        <Form className='contenedora'>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="ingresar nombre completo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Ingrese Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTelephone">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="number" placeholder="Ingresar Telefono" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default CartForm;

