"use string";

let someInput = document.querySelector('input');
let someButton = document.querySelector('button');
let parent = document.querySelector('.parent');

someButton.onclick = function () {
  
  let newElement = document.createElement('li');

  newElement.classList.add('some-element');
  newElement.textContent = someInput.value;
  someInput.value = '';
  parent.append(newElement);
}

