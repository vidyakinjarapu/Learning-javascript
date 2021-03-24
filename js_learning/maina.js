todos = [
  {
    id : 1,
    text : 'Take out trash',
    iscompleted : true
  },
  {
    id : 2,
    text : 'Meet boss',
    iscompleted : true
  },
  {
    id : 3,
    text : 'dentist appt',
    iscompleted : false
  }
]
// for loops

for(let i=0; i < todos.length; i++) {
  console.log(todos[i].text);
}

for(let todo of todos) {
  console.log(todo.text)
}
//Higher order array methods -- foreach, filter, map
//forEach
todos.forEach(function(todo){
  console.log(todo.text)
});
//map
const todotext = todos.map(function(todo){
  return todo.text
})
console.log(todotext)
//filter
const todocompleted = todos.filter(function(todo){
  return todo.iscompleted === true;
}).map(function(todo){
  return todo.text;
});
console.log(todocompleted);
