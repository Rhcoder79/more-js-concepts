function one(){
    two()
    console.log(1);
}
function two(){
    three()
    console.log(2);
}
function three(){
    setTimeout(()=>{
        console.log('inside three',0)
    },4000)
    four()
    console.log(3);
}
function four(){
    five()
    console.log(4);
}
function five(){
    six()
    console.log(5);
}
function six(){
setTimeout(() => {
   console.log('inside 5') 
},0 );
    console.log(6);
}

    one();

