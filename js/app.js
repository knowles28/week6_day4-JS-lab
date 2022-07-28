document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', formHandler);

  const body = document.querySelector('body');
  const button = document.createElement('button');
  button.innerText = "Delete all";
  button.addEventListener('click', deleteList);
  body.appendChild(button);
});


const deleteList = function () {
   const all = document.querySelector('')
   all.forEach(item => {
     list = document.querySelector('ul li');
      list.remove();
    })

}


const formHandler = function (event) {
  event.preventDefault()
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;
  
  const newItem = document.createElement('li');
  newItem.textContent = `Title: ${title} Author: ${author} Category: ${category}`;

  const list = document.querySelector('ul');
  list.appendChild(newItem);

  const form = document.querySelector('#new-item-form');
  form.reset();


}

