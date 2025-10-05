function emailValidate(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return  emailRegex.test(email)
}

const result = emailValidate("muzamiln213@gmail.com");
console.log(result)
