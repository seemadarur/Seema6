async function fetchproducts() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let products = await response.json();
        console.log(products)

        let productContainer = document.getElementById('product-list');
        productContainer.innerHTML = "";

        products.forEach(products => {
            let productCard = `
            <div>
            <img src ="${products.image}" width="100">
            <h3>${products.title}</h3>
            <p>$${products.price}</p>
            <div>
            `;
            productContainer.innerHTML += productCard;
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}
fetchproducts();