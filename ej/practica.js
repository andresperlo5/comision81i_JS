const productos = [
    {
        id: 1,
        nombre: 'Coca-Cola',
        precio: 800,
        deleted: false
    },
    {
        id: 2,
        nombre: 'Pepsi',
        precio: 700
    },
    {
        id: 3,
        nombre: 'Torasso',
        precio: 600
    },
]

/* CRUD o ABM ->
C -> Create -> Creamos
R -> Read -> Obtengo - todos - uno
U -> Update -> Actualizo
D -> Delete -> Borro -> Logico (booleano: true, false) - Fisico

A -> Alta
B -> Baja
M -> Modificacion
*/

const addProduct = () => {
    const productLs = JSON.parse(localStorage.getItem('productos')) || []

    const nombre = prompt('Ingrese producto')
    const precio = prompt('Asigne el valor del producto')

    if (nombre && precio) {
        if (productLs.length > 0) {
            const id = productLs[productLs.length - 1].id + 1
            productLs.push({
                id,
                nombre,
                precio: parseInt(precio)
            })

            localStorage.setItem('productos', JSON.stringify(productLs))
        } else {
            const id = productos[productos.length - 1].id + 1
            productos.push({
                id,
                nombre,
                precio: parseInt(precio)
            })

            localStorage.setItem('productos', JSON.stringify(productos))
        }

    }

}

const getProducts = () => {
    const productLs = JSON.parse(localStorage.getItem('productos')) || []

    if (productLs.length > 0) {
        productLs.forEach(product => {
            const { id, nombre, precio } = product

            document.write(`
            id:${id}
            nombre: ${nombre}
            precio: ${precio}
            <br>
            `)

        });
    } else {
        productos.forEach(product => {
            const { id, nombre, precio } = product

            document.write(`
            id:${id}
            nombre: ${nombre}
            precio: ${precio}
            <br>
            `)
        });
    }
}

const getProduct = (id) => {
    const productLs = JSON.parse(localStorage.getItem('productos')) || []

    if (productLs.length > 0) {
        const product = productLs.filter((prod) => prod.id === id)
        
        product.forEach(product => {
            const { id, nombre, precio } = product

            document.write(`
            id:${id}
            nombre: ${nombre}
            precio: ${precio}
            <br>
            `)

        });
    } else {
        const product = productos.filter((prod) => prod.id === id)

        product.forEach(product => {
            const { id, nombre, precio } = product

            document.write(`
            id:${id}
            nombre: ${nombre}
            precio: ${precio}
            <br>
            `)
        });
    }
}

const updateProduct = (id) => {
    const productLs = JSON.parse(localStorage.getItem('productos')) || []

    if (productLs.length > 0) {
        const getProduct = productLs.filter((product) => product.id === id)
        const newPrice = prompt('Ingrese el nuevo precio')
        getProduct[0].precio = parseInt(newPrice)

        localStorage.setItem('productos', JSON.stringify(productLs))
    } else {
        const getProduct = productos.filter((product) => product.id === id)
        const newPrice = prompt('Ingrese el nuevo precio')
        getProduct[0].precio = parseInt(newPrice)

        localStorage.setItem('productos', JSON.stringify(productos))
    }
}

const deleteProduct = (id) => {
    const productLs = JSON.parse(localStorage.getItem('productos')) || []

    if (productLs.length > 0) {
        const positionUser = productLs.findIndex((product) => product.id === id)
        productLs.splice(positionUser, 1)

        localStorage.setItem('productos', JSON.stringify(productLs))
    } else {
        const positionUser = productos.findIndex((product) => product.id === id)
        productos.splice(positionUser, 1)

        localStorage.setItem('productos', JSON.stringify(productos))
    }
}


