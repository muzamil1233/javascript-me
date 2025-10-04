// in this we have to show how many of the people have like us 
function displaylike(name){
    let length = name.length;
    if(name.length===0){
        return "no one like this "
    }else if (name.length === 1){
        return `${name[0]} like this`
    }else if (name.length === 2){
        return `${name[0]} ,${name[1]} like this`
}else if (name.length === 3){
        return `${name[0]} ,${name[1]} and  ${name[2]} like this`}
        else{
            return `${name[0]} ,${name[1]} ,${length-2} other  like this`
            
        }
         return length;
        }
        const result = displaylike(["muzamil", "arif","hgsuf" , "muxxi"]);
        console.log(result)
       
