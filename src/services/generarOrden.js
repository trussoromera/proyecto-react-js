//Función auxiliar para generar la orden.
const ordenGenerada = ( cart, total) => {
    return {
        buyer: {
            nombre: document.getElementById("formBasicName").value,
            email: document.getElementById("formBasicEmail").value,
            telefono: document.getElementById("formBasicTelephone").value,
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default ordenGenerada;