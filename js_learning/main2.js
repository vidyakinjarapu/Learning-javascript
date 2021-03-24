/*console.log(window);

Single element selector
used this function as my page is not rendering overall html
window.onload = (function (){
  console.log(document.getElementById('my-form'))
  console.log(document.querySelector('#my-form'))
  console.log(document.querySelector('.container'))

});

//Multiple element selector
window.onload = (function(){
  console.log(document.querySelectorAll('.item')); //returns node list
  console.log(document.getElementsByClassName("item")) //returns html collection we can't apply methods on them
  console.log(document.getElementsByTagName('li'))
})

window.onload = (function(){
  const items = document.querySelectorAll('.item')
  items.forEach((item) => console.log(item))
});

console.log(document.getElementById('my-form'))


const ul = document.querySelector('.items');
console.log(ul)

// ul.remove()
// ul.lastElementChild.remove()
ul.firstElementChild.textContent = 'hello'
ul.children[1].innerText = 'vijju'
ul.lastElementChild.innerHTML = '<h2>hello<h2>'


//events ----> click, mouseover, mouseout
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log('click');
  //console.log(e.target.className);
  document.querySelector('#my-form').style.background = "#ffebcc";
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
});
*/

const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myform.addEventListener('submit', onsubmit);

function onsubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 2000);
  } else {

    //add the list item into empty ul
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li)

    //clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
