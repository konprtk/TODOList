function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task!");
  } else {
    const li = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
    li.appendChild(taskText);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function toggleTask(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
}

document
  .getElementById("taskInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
