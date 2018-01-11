let products = [{
        name: "Puma Golf Raglan Tech Polo Tee",
        image: "img/1.jpg",
        color: "#8A2BE2",
        size: "XXL",
        price: 72,
        quantity: 3
    },
    {
        name: "Nike Men's Running Shoes",
        image: "img/2.jpg",
        color: "#007698",
        size: "XXL",
        price: 129,
        quantity: 1
    },
    {
        name: "DC Mens's Axis Snowboard Jacket",
        image: "img/3.jpg",
        color: "#1c376a",
        size: "XXL",
        price: 89,
        quantity: 2
    },
];

function load() {
    // var page = `<thead>
    // <tr>
    //     <th></th>
    //     <th>Name</th>
    //     <th>Price</th>
    //     <th>Quantity</th>
    //     <th>Total</th>
    // </tr>
    // </thead>`;
    var page ="";
    var total = 0;

    var tableIdName = "table-products"
    var totalIdName = "general-total";
    var tableElement = document.getElementById(tableIdName);
    var totalElement = document.getElementById(totalIdName);


    products.forEach(function (element) {
        var totalItem = element.quantity * element.price;
        total += totalItem;

        page += `<tr>
        <tr><td class="align-middle"><span class="delete-item">x</span></td>
        <td class="align-middle"><div class="box"><img src="${element.image}" alt="" srcset=""class="img-red">                
        <div class="name-box"><b>${element.name}</b>
        <div class="name-box__ball"> cor: <div class="ball" style="background-color:${element.color}"></div>
        Tamanho: <span class="name-box__size">${element.size}</span></div></div></td>
        <td class="align-middle">$<b>${element.price}</b></td>
        <td class="align-middle"><div class="qty"><div class="qty__left">-</div><div class="qty__middle">${element.quantity}</div><div class="qty__right">+</div></div></td>
        <td class="align-middle">$<b>${totalItem}</b></td>
        </tr>`;
    }, this);

    tableElement.innerHTML = page;
    totalElement.innerHTML = `<td colspan="5" class="text-right">Subtotal: <h4 class="text-inline">$<b>${total}</b></h4></td></tr>`;
}


load();