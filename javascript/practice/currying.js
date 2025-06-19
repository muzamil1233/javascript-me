function curry(a) {
    return function (b) {
        return function (c) {
            return a+b+c;
    };
  };
};

//For the purpose of user debugging.
//pass appropriate input in below function call
console.log(curry(2)(3)(4));
module.exports = curry



////// infinte currying 

function curry(a) {
    return function (b) {
        if(b != undefined ){
            return curry(a+b);
        }else{
            return a;
        }
       
  };
};

//For the purpose of user debugging.
//pass appropriate input in below function call
console.log(curry(2)(3)(4)());
module.exports = curry