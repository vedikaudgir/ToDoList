const formArea = document.getElementById("form-area");
const mainInput = document.getElementById("main-input");
const submitButton = document.getElementById("submit-button");
const listArea = document.getElementById("list-area");

formArea.addEventListener("submit", function (e) {
    e.preventDefault();

    const task = mainInput.value.trim();
    if (task == "") 
    {
        return;
    }
    addTasks(task);
    saveTasks();
    mainInput.value = "";
});

function addTasks(task) {
    const newTask = document.createElement("li");
    newTask.textContent = task;
    
    const doneButton = document.createElement("button");
    doneButton.innerText = "Completed ✅";
    doneButton.classList.add("done-button");
    doneButton.addEventListener("click", function (e) {
        if (e.target.matches("button")) {
            e.target.parentNode.parentNode.remove();
        }
        saveTasks();
    });
    
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove ❌";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", function (e) {
        if (e.target.matches("button")) {
            e.target.parentNode.parentNode.remove();
        }
        saveTasks();
    });
    
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    
    buttonContainer.appendChild(doneButton);
    buttonContainer.appendChild(removeButton);
    
    newTask.appendChild(buttonContainer);
    listArea.appendChild(newTask);
    
}

function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#list-area li").forEach((li) => {
        tasks.push(li.firstChild.textContent.trim());
      }
    );

  localStorage.setItem("tasks",JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    addTasks(task);
  });
}

window.addEventListener("load", loadTasks);