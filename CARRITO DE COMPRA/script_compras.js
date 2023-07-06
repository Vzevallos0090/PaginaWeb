let carrito = [];

function agregarProducto(idProducto) {
    const cantidadInput = document.getElementById(`cantidad-${idProducto}`);
    const cantidad = parseInt(cantidadInput.value);

    const producto = {
        id: idProducto,
        cantidad: cantidad
    };
    carrito.push(producto);

    cantidadInput.value = 1;

    alert("Producto añadido al carrito");
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    let subtotal = 0;
    let detalle = "Detalles de la compra:\n\n";
    carrito.forEach((producto) => {
        let valor = 0;
        switch (producto.id) {
            case 1:
                valor = 20;
                break;
            case 2:
                valor = 55;
                break;
            case 3:
                valor = 65;
                break;
            case 4:
                valor = 350;
                break;
        }
        subtotal += valor * producto.cantidad;
        detalle += `Producto ${producto.id}: ${producto.cantidad} \n`;
    });


    const iva = subtotal * 0.12;
    const total = subtotal + iva;

    const ticket = `Detalles de la compra:\n\n${detalle}\nSubtotal: $${subtotal.toFixed(
    2
  )}\nIVA (12%): $${iva.toFixed(2)}\nTotal a pagar: $${total.toFixed(2)}`;

    alert(ticket);

    carrito = [];
}