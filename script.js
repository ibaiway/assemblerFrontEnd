// script.js

// Function to load product information based on the ID from the URL
async function loadProductInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    // You can fetch the product data from a server or use a predefined object
    const products = [
        { id: 1, name: "Product 1", description: "Description for Product 1" },
        { id: 2, name: "Product 2", description: "Description for Product 2" },
        { id: 3, name: "Product 3", description: "Description for Product 3" }
    ];

    const product = products.find(p => p.id === parseInt(productId));

    const response = await fetch(`https://assemblerproducts-prod-dev.fl0.io/product/${productId}`)

    if (response.status === 200) {
        const realProduct = await response.json()
        console.log(realProduct)
        const productInfo = document.getElementById("product-info");
        productInfo.innerHTML = `
            <h2>${realProduct.name}</h2>
            <p>${realProduct.description}</p>
            <p>${realProduct.price}€</p>
        `;
    } else {
        window.location.href = "index.html";
    }
}

loadProductInfo();
