//variable
//let and const
//if else


//const friends=['hero','jre','sed','good'];
//console.log(friends)
//console.log(friends.length);
//console.log(friends[2]);
//friends.pop();
//friends.push('rakib');
//friends.shift();
//friends.unshift('rh');
//console.log(friends);
//console.log(friends.slice(2));
//console.log(friends.slice(1,4));
//console.log(friends.splice(1,4));
// for (let index = 0; index < friends.length; index++) {
//     const element = friends[index];
//     console.log(element)
    
// }

// function sum(a,b){
//     console.log(...arguments)
//     const result=a+b;
   
//     return result
// }
// const output= sum(22,'a');
// console.log(output);


// const coll=['hero','jre','sed','good','fahad'];
// const person={
//     name:'rh',
//     age:20,
//     friends:coll
// }
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.friends);
// console.log(person.friends[3]);
// person.age=21;
// console.log(person)

//template string

// const fName='robiul';
// const lName='hasan';
// console.log(`i am Md ${fName} ${lName} `);

// console.log(add);
// function add(){
//     console.log(arguments);
// }


// const add=(a,b)=>a+b;


// const sum=(...rest)=>{
// console.log(rest);
// };
// sum(1,2,3,4,5);


// you can not find arguments in array function

// const sum=(a,b,c)=>{
// console.log(a+b+c)
// };
// sum(13,22,14)


// const sum=(a,b,c)=>a+b+c;
// const result=sum(11,24,45);

//  const sum=(a,b,c)=>{
//     const add=a+b+c;
//     return add;
//  };
//  const result=sum(133,3,4);
//  console.log(result);

//spread operator
// const numbers=[1,2,4,5,6,7,8,8,4,23,44,55,51];
// //console.log(...numbers);
// const newNum=[...numbers,22,44];
// console.log(newNum);

//array method
//we have learn map,forEach,filter,find in this code from 95 to 129 line
// const products=[
//     {name:'tecno',brand:'xiomi',price:12000,color:'transparent'},
//     {name:'itel',brand:'apple',price:16000,color:'white'},
//     {name:'walton',brand:'bd',price:10000,color:'black'},
//     {name:'vivo',brand:'xiomi',price:18000,color:'transparent'},
//     {name:'iphone',brand:'apple',price:120000,color:'white'},
//     {name:'oppo',brand:'bd',price:18000,color:'black'}
// ]
// const result=products.map(pro=>pro.price);
// const br=products.map(pro=>pro.color);
// console.log(result);
// console.log(br);
// const result=products.map(pro=>{
//     //console.log(pro);
//     console.log(pro.brand);
//     //return result;
// })
// const result=products.map(pro=>pro.price);
// console.log(result);

// products.forEach(pro=>console.log(pro));
//products.forEach(pro=>console.log(pro.brand)) 
//products.forEach(pro=>console.log(pro.brand==='apple'));

//  const result=products.filter(pro=>pro.brand==='apple');
//  console.log(result);

//  const result=products.filter(pro=>pro.price>=16000);
//  console.log(result);
  
// const result=products.find(pro=>pro.brand==='apple');
//   console.log(result);

//  const result=products.find(pro=>pro.price>=16000);
//  console.log(result);


//destructuring array
// const friend=['raki','soh','taj','rock','brock','les'];
// // const el1=friend[0];
// // const el2=friend[1];
// const [el1,el2,el3,el4,el5,el6]=friend;
// console.log(el1,el2,el3,el4,el5);

// const person={
//     name:'rh',
//     age:21,
//     country:'bd',
//     friend:['rakib','siam','rk'],
//     family:{
//         fNAME:'KORIM',
//         mName:'shi'
//     }
// }
// const {name,country,friend,age}=person;
// console.log(friend);
//fetch
//const jsonData=JSON.stringify(person);
//console.log(jsonData);

//const planData=JSON.parse(jsonData);
//console.log(planData)

// fetch('url')
// .then(res=>res.json())
// .then(data=>console.log(data))

// const person={
//     name:'rh',
//     age:21,
//     country:'bd',
//     friend:['rakib','siam','rk'],
//     family:{
//         fNAME:'KORIM',
//         mName:'shi'
//     }
// }
// const pro=Object.keys(person);
// console.log(pro);

// const values=Object.values(person);
// console.log(values)

// const products=[
//     {name:'tecno',brand:'xiomi',price:12000,color:'transparent'},
//     {name:'itel',brand:'apple',price:16000,color:'white'},
//     {name:'walton',brand:'bd',price:10000,color:'black'},
//     {name:'vivo',brand:'xiomi',price:18000,color:'transparent'},
//     {name:'iphone',brand:'apple',price:120000,color:'white'},
//     {name:'oppo',brand:'bd',price:18000,color:'black'}
// ]
// const newProducts={
//     name:'redmi',
//   brand:'xiomi',
//   price:13500,
//   color:'yellow'
// }
// // const newArray=[...products,newProducts];
// // console.log(newArray);

// const remainingProducts=products.filter(p=>p.brand!=='apple' )
// // console.log(remainingProducts);

//  const newArray2=[...remainingProducts,newProducts];
//  console.log(newArray2)

//false value
//0, -0, "", false, null, undefined etc search on gemini
//true value
//'ed', 3333, {},[],true

// const test=[];
// console.log(test)
// if(test){
// console.log('its truth');
// }else{
// console.log('its false');
// }

//test?console.log('its truth'): console.log('its false');

// const num=10;
// const result=(num>=10 && num<20)?'true':'false';
// console.log(result)

// const isActive=true;
// console.log(!isActive);
//console.log(!!isActive);

// const showUser=()=>console.log('show user');
// const hideUser=()=>console.log('hide user');
//isActive?showUser():hideUser();
//isActive && showUser();// && means isActive need to  be true
// isActive || hideUser();// || means isActive need to be false

//type conversion
// let num='19';
// console.log(typeof num)
// //const result= -num;
// const result=+num;
// console.log(typeof result);


