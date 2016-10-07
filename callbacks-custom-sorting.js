var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 3, name: "alex",     age: 22 }
];

students.sort(function(student1,student2){      //sort is a loop!
  if(student2.name === student1.name){
    return student2.age < student1.age;
  }
  return student2.name < student1.name;
});

console.log(students);
