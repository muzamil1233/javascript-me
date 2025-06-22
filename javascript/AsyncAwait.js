  async function test(){
     
 
    return "hello";}
  
//   test();

//   here it will return a promise 
// now if i want to return the data of thisthen i have to use like this 
test().then((result)=>{
    console.log(result)
})
    // o/p :"hello"


    // now if  we check the await 
const test = async ()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const response = await data.json();
    return response;
}
test().then((data)=>{
    console.log(data)
}).catch((e)=>{
    console.log(e)
})


// you can also use it more consise way like irrespective of this you can use 
//  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const response = await data.json();
//     return response;

return (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json()


// another method is using try and catch 
const test1 = async ()=>{

    try{
 const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const response = await data.json();
    return response;
    }catch(error){
        console.log(error)
    }
   
}
test1().then((data)=>{
    console.log(data)
})
  