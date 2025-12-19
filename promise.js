const getData1=new Promise((resolve,reject)=>{
    const num=Math.random()*20;
    console.log('now1:',num);
    if(num>5){
        resolve({num:num})
    }
    else{
        reject({err:'not fill requirement 1'})
    }
})


const getData2=new Promise((resolve,reject)=>{
    const num=Math.random()*20;
    console.log('now2:',num);
    if(num>5){
        resolve({num:num})
    }
    else{
        reject({err:'not fill requirement 2'})
    }
})

const getData3=new Promise((resolve,reject)=>{
    const num=Math.random()*20;
    console.log('now3:',num);
    if(num>5){
        resolve({num:num})
    }
    else{
        reject({err:'not fill requirement 3'})
    }
})
Promise.all([getData1,getData2,getData3])
.then(res=>console.log(res))
.catch(error =>console.log(error))