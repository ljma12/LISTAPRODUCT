let divData = document.getElementById("divData");

function getData(){
    const promesa = fetch ("https://freetestapi.com/api/v1/products", {method: "GET"});
    promesa.then(  (response) => {
            response.json().then(
            (data)=>{
                console.log(data);
                createCards(data);
            }).catch((error)=> console.log("Problema del Json", error));
        }).catch((err)=> console.log("Existio un problema con la solicitud", err));
}//getData
    //crear una Card por cada producto con sus datos esenciales
    //de preferencia foreach, name, description, image, price
    function createCards(products){
        console.log(products.length)
        products.forEach(product => {
            let card = `
                <div class="col-md-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text"><strong>Price:</strong> $${product.price}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            `;
            divData.innerHTML += card;
        });
}//createCards
getData();
