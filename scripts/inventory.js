let prod = JSON.parse(localStorage.getItem("products"));

console.log(prod)

prod.map(function(elem){
    let name = document.createElement("p");
    name.innerText = elem.name;

    let price = document.createElement("p");
    price.innerText = elem.price;

    let type = document.createElement("p");
    type.innerText = elem.type;

    let image = document.createElement("img");
    image.setAttribute("src",elem.image);

    let button = document.createElement("button");
    button.innerText= "Remove Product";
    button.addEventListener("click",function(){
        remove(elem)
    })

    let div1 = document.createElement("div");
    div1.setAttribute("id","div1")

    div1.append(name,price,type,image,button);
    document.querySelector("#products_data").append(div1)
})

function remove(elem){
    document.querySelector("#div1").innerHTML=""
    localStorage.setItem("products", JSON.stringify(arr))
}