const Productos = function(nombre, stock, precio) {
    this.name = nombre;
    this.stock = stock;
    this.precio = precio;
}

let producto1 = new Productos("camiseta", 200, 20000);
let producto2 = new Productos("zapatillas", 20, 30000);
let producto3 = new Productos("buzos", 300, 25000);
let producto4 = new Productos("campera", 250, 50000);
let producto5 = new Productos("medias", 150, 2500);
let producto6 = new Productos("cinturon", 200, 14000);
let producto7 = new Productos("malla", 30, 17000);
let producto8 = new Productos("lentes", 200, 40000);

let lista = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8];


if (localStorage.getItem("productos")) {
    lista = JSON.parse(localStorage.getItem("productos"));
} else {
    lista = lista;
}

function filtrar() {
    const body = document.querySelector("body");
    const input = document.getElementById("filtrar2").value;
    const clave = input.trim().toUpperCase();
    const resultado = lista.filter((producto) => producto.name.toUpperCase().includes(clave));

    if (resultado.length > 0) {
        const container = document.createElement("div");
        resultado.forEach((producto) => {
            const card = document.createElement("div");
            const nombre = document.createElement("h2");
            nombre.textContent = "Producto: " + producto.name;
            card.appendChild(nombre);
            const precio = document.createElement("p");
            precio.textContent = "Valor: $" + producto.precio;
            card.appendChild(precio);
            const stock = document.createElement("p");
            stock.textContent = "En stock: " + producto.stock;
            card.appendChild(stock);

            container.appendChild(card);
        });

        body.appendChild(container);
    } else {
        alert("No se encuentra el resultado buscado");
    }
}

const filtrarButt = document.getElementById("filtrar");
filtrarButt.addEventListener("click", filtrar);
