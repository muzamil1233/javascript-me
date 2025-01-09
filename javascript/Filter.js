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
  
  const output = students.filter((x)=> x.marks< 40).map(x=> x.name + "-"+ x.enroll)
  console.log(output)