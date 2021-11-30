const addForm = document.querySelector('.add');
const list = document.querySelector('.todo')

const generateTemplate = todo => {

    const html = `<li class="list-group-item d-flex justify-content-between alighn-item-center">
    <span>${todo}</span>
    <i class="fas fa-trash-alt"></i>
    </li>`;
    list.innerHTML += html;
};
addForm.addEventListener('submit' , e => {
    e.preventDefault();
    const todo = addForm.add.value.trim(); 
    console.log(todo)
    generateTemplate(todo);

});