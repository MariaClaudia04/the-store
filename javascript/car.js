const products = [
    {
        name: 'Bicicleta montaña',
        image: './imagenes/bicicleta.jpg', // modificar por la ruta donde guarden sus
        price: 200,
        quantity: 2,
    },
    {
        name: 'Iphone 7',
        image: './imagenes/iphone7.png', // modificar por la ruta donde guarden sus 
        price: 500,
        quantity: 4,
    },
    {
        name: 'Gafas de sol',
        image: './imagenes/gafas.png', // modificar por la ruta donde guarden sus 
        price: 100,
        quantity: 6,
    },
    {
        name: 'Juego comedor',
        image: './imagenes/mesa.png', // modificar por la ruta donde guarden sus 
        price: 320,
        quantity: 1,
    }
];


let carrito = products.map(function (producto) {
    return (`
            <div class="producto" id="producto">
            <div class="imagen">
            <img src=${producto.image} alt="">
            </div>
            <div>${producto.name}</div>
            <div>$ ${producto.price}</div>
            <div> ${producto.quantity}</div>
            <div class="precio">$ ${producto.price * producto.quantity}</div>
            </div>`)
})
document.getElementById("lista").innerHTML = carrito;
