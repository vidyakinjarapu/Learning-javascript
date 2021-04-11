let form = document.querySelector('#add-form');
let itemlist = document.querySelector('#items');

// FORM SUBMIT EVENT
form.addEventListener('submit', addItem);

//FUNCTION TO ADD ITEM
function addItem(e){
	e.preventDefault();
	//Get input value
	let newItem = document.querySelector('#item').value;

	// Create a new li element
	let li = document.createElement('li');

	//Add class
	li.className = 'list-group-item';

	//Add textnode with input value
	li.appendChild(document.createTextNode(newItem));

	itemlist.appendChild(li);

	//Create delete button element
	let del = document.createElement('button');
	del.className = 'btn btn-danger btn-sm float-right delete';
	del.appendChild(document.createTextNode('X'));
	li.appendChild(del);
}