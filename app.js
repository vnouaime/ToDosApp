const toDoForm = document.querySelector("#todoform");
const task = document.querySelector("input[name='task']");
const toDoList = document.querySelector("#todolist");

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
        task.value = '';
        toDoItem.appendChild(removeButton);
        return toDoItem;
    }
}

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


localStorage.setItem("list", JSON.stringfy)
// make object and parse items in 
// loop through list first
// add set item everytime
// JSON.parse local t









