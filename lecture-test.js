'use strict';

const map = function(data, _transformElm){
  let output = [];

data.forEach(function(current){
  const new_val = _transformElm(current);
  output.push(new_val);
  });
  return output;
}

const result = map([1, 4, 8, 12], function(elm){
// Transform an elm to its double
  return elm * 2;
});

console.log(result);
