import React from 'react';
import { useCarritoContext } from '../../context/CartContext';

//Plantilla (card) para mostrar los productos en el carrito.
export const ItemCart = ({ item }) => {
    const { removeItem } = useCarritoContext()
    return (
        <div className="card mb-3 cardCart">
            <div className="row g-0">
                    <div className="col md-4 imgCart">
                        <img src={item.imagen} className="img-fluid m-2 rounded" alt={`Imagen de ${item.nombre}`} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                            <p className="card-text">Cantidad: {item.quantity}</p>
                            <p className="card-text">Precio Unitario: ${item.precio}</p>
                            <p className="card-text">Subtotal: ${item.quantity * item.precio}</p>
                            <button className="btn btn-danger" onClick={()=> removeItem(item.id)}><i className="fas fa-trash"></i></button>
                        </div>
                    </div>
            </div>        
        </div>
    )
}

