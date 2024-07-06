
const tbody = document.querySelector('tbody');
document.querySelector('#btn-api').addEventListener('click', () => {
    displayApi();
});

async function displayApi() {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await response.json();
    console.log(data);
    data.slice(0, 31).forEach(data => {
        tbody.innerHTML += `
            <tr>
                <td>${data.category.name}</td>
                <td>${data.title}</td>
                <td>$${data.price}</td>
                <td>
                <img src="${data.image}" alt="${data.title}" width="100px">
                </td>
                <td>${data.description}</td>
            </tr>
        `
    });
};


