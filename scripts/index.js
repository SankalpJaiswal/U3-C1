//store the products array in localstorage as "products"

document.querySelector("#product_form").addEventListener("submit",formSubmit);

let arr = JSON.parse(localStorage.getItem("products")) || [];

function formSubmit(event){
    event.preventDefault();

    let name= document.querySelector("#name").value;
    let price= document.querySelector("#price").value;
    let type= document.querySelector("#type").value;
    let image= document.querySelector("#image").value;

    // console.log(name,price,type,image)

    let obj = {
        name: name,
        price: price,
        type: type,
        image: image,
    }

    // console.log(obj);

    arr.push(obj);
    console.log(arr)

    localStorage.setItem("products", JSON.stringify(arr))
}
