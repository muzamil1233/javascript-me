const students = [
    { name: "Syed Danish", enroll: "6671", marks: "40" },
    { name: "Muazim Maqbool", enroll: "6655", marks: "39" },
    { name: "Mezy Jan", enroll: "6631", marks: "42" },
    { name: "Aabida Farooq", enroll: "6645", marks: "41" },
    { name: "Danish Gul", enroll: "6644", marks: "37" },
    { name: "Amir Suahil", enroll: "6656", marks: "48" },
    { name: "Syed Muntazir", enroll: "6636", marks: "39" },
    { name: "Shariq Rafiq", enroll: "6657", marks: "39" },
    { name: "Haseeb Nabi", enroll: "6499", marks: "40" },
  ];
   //so, here we have task to find how many students have a particular marks
      // we want o/p like this ["40:2","39:3",...] // we have 2 students with 40 marks and similarly 3 students with 39 marks ,...
      // so, here we are going to use reduce() function, because we need to find one value inside array
      // we want one value/object with its count so for that we are going to use reduce function here
  
  const output = students.reduce(function(marks,curr){
      if(marks[curr.marks]){
          marks[curr.marks]++
      }else{
          marks[curr.marks] =1
      }
      return marks
  },{})
  console.log(output)


//   const output = students.reduce(function(result,curr){
//     if(curr.marks< 40){
//         result.push(curr.name + curr.enroll)
//     }
//     return result;
// },[]);
// console.log(output)