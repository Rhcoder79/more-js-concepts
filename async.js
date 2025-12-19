console.log('ome');
console.log('two');
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())
// .then(data=>console.log(data))
//callThree();
setTimeout(callThree,5000);
setTimeout(()=>{
    console.log('new three')
},4000)
console.log('four');
console.log('five');
//console.log('three');
function callThree(){
    console.log('three');
}