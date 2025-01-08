let p = new Promise((res,rej)=>{
    let a = 1+2;
    if(a == 2){
        res(true)
    }else{
    rej(false)
    }
        
    
})
p.then((res)=> console.log(res))
.catch((rej)=> console.log("error happened"))


///

// example 2

let complete=true;
        let prom = new Promise((res,rej)=>{
            if(complete) res("its completed successfully");
            else rej("some error has occurred!");
        });
        console.log("prom :",prom); //try this and see its result

        let onResolve = (result) => console.log("result:",result);
        let onReject = (error) => console.log("error:",error);

        prom.then(onResolve);
        prom.catch(onReject);
