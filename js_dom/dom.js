//Gives everything with in the document to access //
//console.dir(document.all)
// console.log(document.all)
// console.log(document.URL)

// console.log(document.title)
// document.title = 123 -- to change the stuff of the title
// console.log(document.all[10])
// document.all[10].textContent = 'Vidya js practice';
// h1 = document.querySelector('h1')
// h1.textContent = 'Vidya js practice';

// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header')

// console.log(headerTitle)
// headerTitle.textContent = 'hello';
// headerTitle.innerText= 'Good bye';
// console.log(headerTitle.textContent)
// console.log(headerTitle.innerText)
// headerTitle.innerHTML = '<h3>Hello</h3>'
// headerTitle.style.borderBottom = '5px solid blue'
//header.style.borderBottom = '5px solid blue'

// GETELEMENTSBYCLASSNAME //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[2].textContent = 'Hello2'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'pink'

// items.forEach(function(item){
// 	console.log(item)
// });

// items.forEach(item => console.log(item));

// for(i = 0; i < items.length; i++) {
// 	console.log(items[i].style.backgroundColor = 'pink')	
// }

// // GETELEMENTBTTAGNAME //
// var items = document.getElementsByTagName('li');
// console.log(items);
// items[2].textContent = 'Hello2'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'pink'

// // items.forEach(function(item){
// // 	console.log(item)
// // });

// //items.forEach(item => console.log(item));

// for(i = 0; i < items.length; i++) {
// 	console.log(items[i].style.backgroundColor = 'pink')	
// }

// QUERYSELECTOR //
// var header = document.querySelector('header');
// header.style.borderBottom = '3px solid pink';

// var input = document.querySelector('input');
// input.value = 'Hello World!'

// var submit = document.querySelector('input[type = "submit"]');
// console.log(submit);
// submit.value = 'SEND';

// // var item = document.querySelector('.list-group-item');
// // item.style.color = 'red';

// // var lastItem = document.querySelector('.list-group-item:last-child');
// // lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';


// QUERYSELECTORALL //

// var titles = document.querySelectorAll('.title');
// console.log(titles)
// titles[0].textContent = 'hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)')
// for(var i = 0; i < odd.length; i++) {
// 	odd[i].style.backgroundColor = 'pink';
// 	even[i].style.backgroundColor = '#ddd'
// }


// TRAVERSING THE DOM //
// var itemList = document.querySelector('#items');

// PARENTNODE PROPERTY //
// console.log(itemList);
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = 'pink'
// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.parentNode.style.backgroundColor = 'skyblue';
// itemList.parentNode.parentNode.parentNode.style.backgroundColor = '#000';

// CHILDNODE //
// console.log(itemList.childNodes)

// //CHILDREN
// console.log(itemList.children)
//itemList.children[1].style.backgroundColor = '#03fcad'

// // FIRSTCHILD //
// console.log(itemList.firstChild);

// //firstElementChild //
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello world!'

// //lastElementChild //
// itemList.lastElementChild.textContent = 'Hello world2!'

//NEXTSIBILING
// console.log(itemList.nextSibling)
// console.log(itemList.nextElementSibling)

// //PREVIOUSSIBILING
// console.log(itemList.previousElementSibling)

// CREATE ELEMENT USING DOM //
//create div
// var newDiv = document.createElement('div');
// //create class //
// newDiv.className = 'hello'
// //add Id
// newDiv.id = 'hello1'
// //add attribute
// newDiv.setAttribute('title', 'Hello Div');
// //create text node
// newDivText = document.createTextNode('Hello World!')
// //Add text to div
// newDiv.appendChild(newDivText)

// //Add div to header-->container and before h1 element
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv, h1);

// newDiv.style.fontSize = '30px';

// console.log(newDiv)



// <--DOM part-3 : Event listners-->

// var button = document.querySelector('#button');

// button.addEventListener('click', function(){
// 	console.log(123)
// })

// Adding Named functions
// button.addEventListener('click', buttonClick);

// // function buttonClick(){
// // 	// alert('button clicked');
// // 	document.getElementById('header-title').textContent = 'Hello DOM!';
// // 	document.querySelector('#main').style.backgroundColor = 'pink';

// // }
// function buttonClick(e){
// 	// console.log(e);
// 	// console.log(e.target);
// 	// console.log(e.target.id);
// 	// console.log(e.target.className);
// 	// console.log(e.target.classList);

// 	// var output = document.getElementById('output');
// 	// output.innerHTML = '<h3>'+e.target.classList+'</h3>'

// 	// console.log(e.type)
// 	// console.log(e.clientX); //click on x axis
// 	// console.log(e.clientY); //click on y axis
// 	//console.log(e.offsetX)
// 	// console.log(e.offsetY)

// 	// console.log(e.altKey);
// 	// console.log(e.ctrlKey);
// 	// console.log(e.shiftKey)

// }


// RUNEVENT --> TYPES OF EVENTS//

var button = document.querySelector('#button');
var box = document.querySelector('#box');
var output = document.querySelector('#output');

// button.addEventListener('click', runevent);
//button.addEventListener('dblclick', runevent);
//  button.addEventListener('mousedown', runevent);
// button.addEventListener('mouseup', runevent)

// box.addEventListener('mouseenter', runevent);
// box.addEventListener('mouseleave', runevent);

// // box.addEventListener('mouseover', runevent); //inside element
// box.addEventListener('mouseout', runevent); //inside element

// box.addEventListener('mousemove', runevent);

// function runevent(e) {
// 	console.log('Event Type: '+e.type)
// 	// output.innerHTML = '<h3>mouseX: '+e.offsetX+'</h3><h3>mouseY: '+e.offsetY+'</h3>'
// 	//box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 20)";
// 	document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 30)";
// }



// KEYBOARD EVENTS //

var itemInput = document.querySelector('input[type = "text"]');
var form = document.querySelector('.form');
var select = document.querySelector('select')

// itemInput.addEventListener('keydown', runevent);
// itemInput.addEventListener('keyup', runevent);
// itemInput.addEventListener('keypress', runevent);

// itemInput.addEventListener('focus', runevent);
// itemInput.addEventListener('blur', runevent);

// itemInput.addEventListener('cut', runevent);
// itemInput.addEventListener('paste', runevent);

// itemInput.addEventListener('input', runevent);

// select.addEventListener('change', runevent);
// select.addEventListener('input', runevent);

form.addEventListener('submit', runevent);

function runevent(e) {
	e.preventDefault();
	console.log('Event Type: '+e.type)
	console.log(e.target.value)
	// output.innerHTML = '<h3>'+e.target.value+'</h3>'
}

