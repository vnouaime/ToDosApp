const toDoForm = document.querySelector("#todoform");
const task = document.querySelector("input[name='task']");
const toDoList = document.querySelector("#todolist");


const storedToDos = JSON.parse(localStorage.getItem("items")) || [];

for (let i = 0; i < storedToDos.length; i++) {
    let newTodo = document.createElement("li");
    newTodo.innerText = storedToDos[i].li;
    newTodo.isCompleted = storedToDos[i].isCompleted ? true : false;
    if (newTodo.isCompleted) {
      newTodo.style.textDecoration = "line-through";
    }
    toDoList.appendChild(newTodo);
}

toDoForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    const newTask = list(task.value);
    toDoList.appendChild(newTask);
   
})

function list(item) {
    if (task.value === '') {
        return alert("Please Enter Task");
    }
    else {
        const toDoItem = document.createElement("li");
        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        toDoItem.innerText = item;
        toDoItem.isCompleted = false;
        task.value = '';
        toDoItem.appendChild(removeButton);
        storedToDos.push({ li: item, isCompleted: false });
        localStorage.setItem("items", JSON.stringify(storedToDos));
        return toDoItem;
    }
}

toDoForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

})

const allTasks = document.querySelectorAll("#todolist");

for (let i of allTasks) {
    i.addEventListener("click", function(event) {
        const singleItem = event.target.tagName;
        if (singleItem === "LI") {
            event.target.style.textDecoration = "line-through";
        } 
        if (singleItem === "BUTTON") {
            event.target.parentElement.remove();
        }
    })
}

