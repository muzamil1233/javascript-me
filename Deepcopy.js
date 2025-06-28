m//if we want to make a object(json) string then  we will do this 
var a = {a: "1", b:"2"};
var b = JSON.stringify(a);
console.log(b); //op : "{a: "1", b:"2"}";


//if we want to make a json object from a string then we will do this
var a = {a: "1", b:"2"};
var c = JSON.parse(JSON.stringify(a));
console.log(c); //op : {{a: "1", b:"2}"
// but now we  can change the nested object as it is not passed as a reference
    function makeDeepCopy(obj){
        if(typeof obj !== "object"|| obj === null){
            return obj;
        }
        var capval = Array.isArray(obj)?[]:{};
        var keys = Object.keys(obj); // a ,b
        for( var i =0; i<keys.length;i++){
            capval[keys[i]] = makeDeepCopy(obj[keys[i]]);
        }
        return capval
    }
    makeDeepCopy({name: "muzamil", age :25})



    for (var i =0 ; i < 3; i++){
        setTimeout(()=>{
            console.log(i)
        },1000)
    }