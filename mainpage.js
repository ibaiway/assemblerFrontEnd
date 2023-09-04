async function loadProducts(){
try {
                // Make a GET request to the endpoint
                const response = await fetch('https://assemblerproducts-prod-dev.fl0.io/product'); // Replace with your endpoint URL

                // Check if the response status is OK (200)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the JSON response
                const data = await response.json();

                // Get the ul element where we will display the data
                const dataList = document.getElementById('product-list');

                // Clear any existing data
                dataList.innerHTML = '';

                // Iterate through the array and create list items
                data.forEach(item => {
                    const li = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = `product.html?id=${item._id}`; // Replace with the link property from your data
                    link.textContent = item.name; // Replace with the name property from your data
                    li.appendChild(link);
                    dataList.appendChild(li);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }

}

loadProducts()