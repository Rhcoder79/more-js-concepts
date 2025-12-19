async function loadData(){
    console.log('one');
    console.log('two');
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res=>res.json())
    // .then(data=>console.log('data got'));
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    console.log('four');
 console.log('data got await',data.slice(0,1));
   console.log('data await index',data[6]);
     console.log('five');
}
//loadData();
const loadData2=async()=>{
    console.log(2);
    console.log(3);
    try{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
       const data=await res.json();
       console.log('got data',data.length)
    }
    catch(error){
   console.log('error happened')
    }
    console.log(4);
    console.log(5);
}
loadData2();
