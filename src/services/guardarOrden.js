import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../firebase/config"

const guardarOrden = (cart, orden) => {
    console.log("Guardar orden");
    const batch = writeBatch(db)
    
    const outOfStock = []
    
    //chequear el stock del producto en nuestra db y restarlo a la cantidad, si corresponde
    cart.forEach((productoEnCart) => {
        getDoc(doc(db, 'products', productoEnCart.id))
        .then(async (documentSnapshot) => {
            //generamos los datos del producto en tiempo real. Obtenemos el stock justo antes de guardar.
            const producto = {...documentSnapshot.data(), id: documentSnapshot.id};

            //hacemos un update en caso que el stock supere a la cantidad.
            if (producto.stock >= productoEnCart.quantity) {
                batch.update(doc(db, 'products', producto.id) ,{
                    stock: producto.stock - productoEnCart.quantity
                })
            } else {
                outOfStock.push(producto)
            }
            
            console.log("Productos fuera de stock:");
            console.log(outOfStock);
    
            if (outOfStock.length === 0) {
                addDoc(collection(db, 'orders'), orden).then(({ id }) => {
                    //recién hacemos el commit una vez que se genera la order
                    batch.commit().then(() => {
                        alert("Se genero la order con id: " + id)
                    })
                }).catch((err) => {
                    console.log(`Error: ${err.message}`);
                })
            //si tenemos productos fuera de stock al momento de generar la order avisamos al usuario
            } else {
                let mensaje = ''
                for (const producto of outOfStock) {
                    mensaje += `${producto.title}`
                }
                alert(`Productos fuera de stock: ${mensaje}`)
            }
        })
    })
}

export default guardarOrden;