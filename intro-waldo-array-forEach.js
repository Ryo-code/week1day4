findWaldo = ["Alice", "Bob", "Waldo", "Winston"];

findWaldo.forEach(function(current, i){
//  console.log(current, i);   <-- this would show each element & index
  if (current == "Waldo"){
    actionWhenFound(i);
  }
});

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}
