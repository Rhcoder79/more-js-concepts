const addNumber=()=>{
    const num=Math.ceil( Math.random()*10)
    console.log(num);
localStorage.setItem('give value',num)
}

const setObjectTols=()=>{
    const customer={name:'rohim khalu',products:3,price:75}
    const customerJSON=JSON.stringify(customer)
    localStorage.setItem('customer',customerJSON)
}
const readObject=()=>{
 const customerJSON=localStorage.getItem('customer')
// console.log( customerJSON);
//console.log(typeof customerJSON)
const customer=JSON.parse(customerJSON);
// console.log(customer)
console.log(customer.name)
}
const getNumbersFromLS=()=>{
    const num=localStorage.getItem('give value');
    
    console.log('from saved local storage',num)
}  