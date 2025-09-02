const formArea = document.getElementById("form-area");
const mainInput = document.getElementById("main-input");
const submitButton = document.getElementById("submit-button");
const listArea = document.getElementById("list-area");

formArea.addEventListener("submit", function (e) {
  e
    .preventDefault /*avoids the webpage from resetting*/
    ();

  const task = mainInput.value
    .trim /*trim removes the extra spaces from back and front*/
    ();
  if (task == "") {
    return;
  }

  const newTask = document.createElement("li");
  newTask.textContent = task;

  const doneButton = document.createElement("button");
  doneButton.innerText = "Completed ✅";
  doneButton.classList.add("done-button");
  doneButton.addEventListener("click", function (e) {
    if (e.target.matches("button")) {
      e.target.parentNode.parentNode.remove();
    }
  });

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove ❌";
  removeButton.classList.add("remove-button");
  removeButton.addEventListener("click", function (e) {
    if (e.target.matches("button")) {
      e.target.parentNode.parentNode.remove();
    }
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  buttonContainer.appendChild(doneButton);
  buttonContainer.appendChild(removeButton);

  newTask.appendChild(buttonContainer);
  listArea.appendChild(newTask);

  listArea.appendChild(newTask);
});
