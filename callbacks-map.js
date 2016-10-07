function map(arr, callback){
  arr.forEach(function(item){
    console.log(callback(item));
  });
}

map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });


// result1 = array.map(function)
// result2 = map(array, function)
// result1 === result 2


//    (elm) => {return elm.length;}
//     ...this is the same thing as...
//    function(elm){ return elm.length;}
