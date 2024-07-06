
const products = [
    {
        id: 1,
        name: 'Laptop',
        category: 'Electronics',
        price: 1500,
        stock: 10
    },
    {
        id: 2,
        name: 'Smartphone',
        category: 'Electronics',
        price: 800,
        stock: 20
    },
    {
        id: 3,
        name: 'Headphones',
        category: 'Electronics',
        price: 100,
        stock: 30
    },
    {
        id: 4,
        name: 'T-shirt',
        category: 'Clothing',
        price: 20,
        stock: 50
    },
    {
        id: 5,
        name: 'Jeans',
        category: 'Clothing',
        price: 50, stock: 40
    },
    {
        id: 6,
        name: 'Sneakers',
        category: 'Clothing',
        price: 80,
        stock: 30
    },
    {
        id: 7,
        name: 'Backpack',
        category: 'Accessories',
        price: 40,
        stock: 25
    },
    {
        id: 8,
        name: 'Watch',
        category: 'Accessories',
        price: 60,
        stock: 20
    },
    {
        id: 9,
        name: 'Sunglasses',
        category: 'Accessories',
        price: 30,
        stock: 35
    }
];

const tbody = document.querySelector('tbody');

async function displayApi() {
    products.forEach(product => {
        tbody.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>$${product.price}</td>
                <td>${product.stock}</td>
            </tr>
        `
    });
};

displayApi()

//La aplicación debe calcular y mostrar el precio total de todos los productos utilizando el método reduce.

function totalPrice() {
    return products.reduce((total, product) => total + product.price, 0);
}

console.log('Total price:', totalPrice());

//La aplicación debe permitir filtrar productos por categoría utilizando el método filter.

function filterByCategory(category) {
    return products.filter(product => product.category === category);
}

console.log('Products in Electronics:', filterByCategory('Electronics'));

//La aplicación debe permitir buscar un producto específico por su nombre utilizando el método find.

function findProductByName(name) {
    return products.find(product => product.name === name);
}

console.log('Product with name Laptop:', findProductByName('Laptop'));

//La aplicación debe verificar si todos los productos están disponibles utilizando el método every.

function checkStock() {
    return products.every(product => product.stock > 0);
}

console.log('All products in stock:', checkStock());

//La aplicación debe crear una lista con los nombres de todos los productos utilizando el método map.

function productNames() {
    return products.map(product => product.name);
}

console.log('Product names:', productNames());

//Implementar métodos de depuración para el manejo de errores y validación.

