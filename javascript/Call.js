let name = {
    firstname : "muzamil",
    lastname : "nabi",
    printFullName:function(){
       console.log(this.firstname+ "" + this.lastname);
    }
}
name.printFullName();


let name2= {
    firstname: "muazim",
    lastname : "maqbool"
}

name.printFullName.call(name2);
