function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        const GroupKey = obj[key];
        if (!acc[GroupKey]){
            acc[GroupKey] = [];
            
        }
        acc[GroupKey].push(obj);
        return acc;
  },{})
}
const data = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' },
  { name: 'David', role: 'user' },
];

//For the purpose of user debugging.
//pass your array and key in function call
console.log(groupBy(data, 'role'));
module.exports = groupBy;