// =================================
// PRODUCT SYSTEM
// =================================


let products = [];




// 加载商品数据

fetch("data/products.json")

.then(response => response.json())

.then(data => {

    products = data;

    renderProducts("all");

});





// =================================
// PRODUCT LIST
// =================================


function renderProducts(filter = "all"){


    const grid = document.getElementById(
        "product-grid"
    );


    if(!grid) return;



    grid.innerHTML="";



    let list = products;



    if(filter !== "all"){

        list = products.filter(product =>

            product.category === filter

        );

    }





    list.forEach(product => {



        let card = document.createElement("div");


        card.className="product-card";



        card.innerHTML = `

        <img src="${product.image}"
        alt="${product.name}">


        <div class="product-info">


        <h3>
        ${product.name}
        </h3>


        <p>
        ${product.desc || ""}
        </p>


        <span>
        ￥${product.price}
        </span>


        <button
        onclick="showProduct('${product.id}')">

        View Detail

        </button>


        </div>

        `;



        grid.appendChild(card);



    });


}








// =================================
// FILTER
// =================================


document.addEventListener(
"click",

function(e){


    if(
        e.target.dataset.filter
    ){


        renderProducts(
            e.target.dataset.filter
        );


    }


});








// =================================
// PRODUCT DETAIL
// =================================



function showProduct(id){



    const product = products.find(

        p => p.id === id

    );



    if(!product) return;



    const box =
    document.getElementById(
        "detail-container"
    );



    box.innerHTML = `



    <div class="detail-image">

    <img src="${product.image}">

    </div>




    <div class="detail-info">


    <h1>
    ${product.name}
    </h1>


    <h2>
    ￥${product.price}
    </h2>



    <p>
    ${product.desc || ""}
    </p>



    <table>


    <tr>
    <td>Material</td>
    <td>${product.material || "-"}</td>
    </tr>


    <tr>
    <td>Process</td>
    <td>${product.process || "-"}</td>
    </tr>


    <tr>
    <td>PCD</td>
    <td>${product.pcd || "-"}</td>
    </tr>


    <tr>
    <td>Offset</td>
    <td>${product.offset || "-"}</td>
    </tr>


    </table>


    </div>


    `;



    location.hash="product-detail";


}
