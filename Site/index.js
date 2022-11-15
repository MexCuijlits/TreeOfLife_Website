var images = document.getElementsByClassName("cloudimage-360");
var image1 = document.getElementsByName("product-1.png")

switch (images.data - filename) {
    case "product-1.png":
        console.log("Hello world!");
        break;
    case "product-2.png":
        console.log("Hello world!!");
        break;
    case "product-3.png":
        console.log("Hello world!!!");
        break;
    case "product-4.png":
        console.log("Hello world!!!!");
        break;
    case "product-5.png":
        console.log("Hello world!!!!!");
        break;
    case "product-6.png":
        console.log("Hello world!!!!!!");
        break;
    case "product-7.png":
        console.log("Hello world!!!!!!!");
        return;
}


// if (image1.style.hidden == true) {
//     console.log("Hello world!");
// }


// window.addEventListener("load", images => {
//     images = document.querySelector('product-1.png');
//     var isLoaded = images.complete && images.naturalHeight !== 0;
//     alert(isLoaded);
// });