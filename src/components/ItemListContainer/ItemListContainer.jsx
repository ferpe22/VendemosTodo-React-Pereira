//Consulta a mis productos (al json o db).Consulta a un array de productos (objetos). Y se los envia a ItemList
import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
const BDD = [
    {
        "id": 1,
        "idCategoria": 1,
        "nombre": "Caminadora",
        "marca": "Randers",
        "modelo": "ARG490",
        "descripcion": "Buen estado. Sin mucho uso😂",
        "precio": 60000,
        "stock": 1,
        "imagen": "caminadora.jpg"
    },
    {
        "id": 2,
        "idCategoria": 2,
        "nombre": "Consola",
        "marca": "Microsoft",
        "modelo": "XBOX One S",
        "descripcion": "Con 3 juegos, un control, y Kinect",
        "precio": 125000,
        "stock": 1,
        "imagen": "xbox.jpg"
    },
    {
        "id": 3,
        "idCategoria": 3,
        "nombre": "Pochoclera",
        "marca": "Yelmo",
        "modelo": "PO3700",
        "descripcion": "De aire caliente. Un solo uso.",
        "precio": 4000,
        "stock": 1,
        "imagen": "pochoclera.jpg"
    },
    {
        "id": 4,
        "idCategoria": 4,
        "nombre": "Cinturones",
        "marca": "Nike",
        "modelo": "",
        "descripcion": "Pack x3 hebilla intercambiable",
        "precio": 1000,
        "stock": 1,
        "imagen": "cinturones.jpg"
    },
    {
        "id": 5,
        "idCategoria": 5,
        "nombre": "Juego Mesa",
        "marca": "Maldon",
        "modelo": "El Cinefilo",
        "descripcion": "Casi nuevo. Solo una jugada😱.",
        "precio": 4000,
        "stock": 1,
        "imagen": "cinefilo.jpg"
    },
    {
        "id": 6,
        "idCategoria": 6,
        "nombre": "Notebook",
        "marca": "Compaq",
        "modelo": "14IN3245",
        "descripcion": "14in 4GB RAM 256GB SSD",
        "precio": 50000,
        "stock": 1,
        "imagen": "notebook.jpg"
    },
    {
        "id": 7,
        "idCategoria": 7,
        "nombre": "Raqueta",
        "marca": "Head",
        "modelo": "Titanium 3000",
        "descripcion": "Buen estado. Encordado nuevo",
        "precio": 8000,
        "stock": 1,
        "imagen": "raqueta.jpg"
    },
    {
        "id": 8,
        "idCategoria": 8,
        "nombre": "Paleta",
        "marca": "Marcraft",
        "modelo": "Reactive",
        "descripcion": "Buen estado. Con detalles de uso",
        "precio": 10000,
        "stock": 1,
        "imagen": "paleta.jpg"
    },
    {
        "id": 9,
        "idCategoria": 9,
        "nombre": "Valija",
        "marca": "",
        "modelo": "Grande 75x45x30 cm",
        "descripcion": "Impecable. Un solo uso",
        "precio": 40000,
        "stock": 1,
        "imagen": "valija.jpg"
    },
    {
        "id": 10,
        "idCategoria": 10,
        "nombre": "Sillon",
        "marca": "",
        "modelo": "2 cuerpos",
        "descripcion": "Almohadones renovados",
        "precio": 12000,
        "stock": 1,
        "imagen": "sillon.jpg"
    },
    {
        "id": 11,
        "idCategoria": 11,
        "nombre": "Mesa + 4 sillas",
        "marca": "",
        "modelo": "Escandinavo",
        "descripcion": "Buen estado. Sin almohadones",
        "precio": 45000,
        "stock": 1,
        "imagen": "mesaSillas.jpg"
    },
    {
        "id": 12,
        "idCategoria": 12,
        "nombre": "Biblioteca",
        "marca": "",
        "modelo": "2 modulos",
        "descripcion": "Impecable estado",
        "precio": 16000,
        "stock": 1,
        "imagen": "biblioteca.jpg"
    }
]


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    
    // useEffect(() => {
    //     const promesa = (condicional) => new Promise((resolve,reject) => {
    //         if(condicional) {
    //             resolve(BDD)
    //         }
    //         reject("No posee los permisos necesarios")
    //     })
    //     promesa(true)
    //         .then(productos => {
    //             const productosFiltrados = productos.filter(prod => prod.stock > 0) //Paso primero por un filtro de stock 0
    //             const items = <ItemList productos={productosFiltrados}/> //Envio los productos consultados
    //             setProductos(items)
    //         })
    //         .catch(error => console.error(error))

    // }, [])

    useEffect(() => {
        fetch('./json/productos.json')
        .then(response => response.json())
        .then(productos => {
            const productosFiltrados = productos.filter(prod => prod.stock > 0) 
            const items = <ItemList productos={productosFiltrados}/> //Envio los productos consultados
            setProductos(items)
        })
    })

    return (
        <div className="row">
            {productos}
        </div>
    )
}