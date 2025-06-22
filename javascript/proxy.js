const newEmployee = {
    name :"the script style",
    age:"24",
    adharCard :"876548957320351",
    accountNumber:"0986604200000355",
    emailId :"muzamiln213@gmail.com"

}

const employe = new proxy(newEmployee,{
    get(target,props){
        if(props === adharCard){
            console.log("warning || sensitive info")
            return "xxxxxxxxxxxxxxxxxx0351"
        }
         if(props === accountNumber){
            console.log("warning || sensitive info")
            return "xxxxxxxxxxxxxxxxxx0355"
        }
       return  Reflect.get({...arguments});
    }
})