const handleAddProduct=()=>{
    const productEl=document.getElementById('product');
    const quantityEl=document.getElementById('quantity');
    const product=productEl.value;
    const quantity=parseInt(quantityEl.value);
   // console.log('product add',product,quantity);
    displayProduct(product,quantity);
    addProductToCart(product,quantity);
    productEl.value='';
    quantityEl.value='';
}
const getCart=()=>{
    let cart={};
    const cartJSON=localStorage.getItem('cart');
if(cartJSON){
    cart=JSON.parse(cartJSON)
}
    return cart;
}
const addProductToCart=(product,quantity)=>{
    const cart=getCart();
    if(cart[product]){
 cart[product]=cart[product]+quantity
    }
    else{
        cart[product]=quantity;
    }

    console.log('cardList',cart)
    const cartJson=JSON.stringify(cart);
    localStorage.setItem('cart',cartJson)
}
const displayProduct=(product,quantity)=>{
    const list =document.createElement('li')
    list.innerText=`${product} : ${quantity}`;
    //get the ul
    const unOrder=document.getElementById('products-con');
    unOrder.appendChild(list);
}
//display products from stored local storage
const displayStoredProducts=()=>{
    const cart=getCart();
    for(const product in cart){
        const quantity=cart[product]
        console.log(product,quantity)
        displayProduct(product,quantity)
    }
}
displayStoredProducts();

/**
 * to save object/array in the local storage
 * convert the object to json string by using json.stringify
 * localstorage.setItem()
 */

/**
 * get object/array from the local storage 
 * 1. get the item from the local storage and it will be in json string 
 * convert the json string to js object by using json.parse
 * 
 *
 */
