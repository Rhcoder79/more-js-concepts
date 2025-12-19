//set item,get item,clear,remove,localStorage.length,localstorage.key
const handleAddToStorage=()=>{
    const nameCatch=document.getElementById('nameId').value;
        //const emailCatch=document.getElementById('email').value;
  //  console.log(nameCatch);
 // localStorage.setItem(emailCatch,nameCatch);
 const idCatch=document.getElementById('id').value;
const data={idCatch,nameCatch};
//console.log(data);
// localStorage.setItem(idCatch,data)
localStorage.setItem(idCatch,JSON.stringify(data));
}

const storedItems=localStorage.getItem('33');
//console.log(storedItems)
console.log(JSON.parse(storedItems));

const clearHandler=()=>{
    localStorage.clear();
}
//bracket notation in object
 const person={
    name:'rh',
    age:21,
    country:'bd',
    friend:['rakib','siam','rk'],
    family:{
        fNAME:'KORIM',
        mName:'shi'
    }
}
const herName=person['name';
]
console.log(herName);