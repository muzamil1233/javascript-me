function shuffle(array) {
    for (let i = array.length; i > 0; i--){
        const j = Math.floor(Math.random( ) * i + 1);
    }

    [arr[i], arr[j]] =  [arr[j], arr[i]]
}
 return array;

//For the purpose of user debugging.
shuffle([1, 2, 3, 4, 5]);

module.exports = shuffle