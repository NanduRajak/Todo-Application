const inputText = document.getElementById("task-text");
const taskBtn = document.getElementById("add-task-btn");
const listOftasks = document.getElementById("task-list");

function saveTasks() {
  tasks = [];
  document.querySelectorAll("#task-list li").forEach((createList) => {
    tasks.push({
      text: createList.firstChild.textContent,
      completed: createList.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const createList = document.createElement("li");
    createList.textContent = task.text;

    if (task.completed) {
      createList.classList.add("completed");
    }

    const delBtn = document.createElement("button");
    delBtn.textContent = "delete";
    delBtn.addEventListener("click", () => {
      listOftasks.removeChild(createList);
      saveTasks();
    });

    createList.addEventListener("click", () => {
      createList.classList.toggle("completed");
      saveTasks();
    });

    createList.appendChild(delBtn);
    listOftasks.appendChild(createList);
  });
}

function addTasks() {
  const taskText = inputText.value.trim();

  if (taskText === "") {
    alert("Please add a task");
    return;
  }

  const createList = document.createElement("li");
  createList.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "delete";
  delBtn.addEventListener("click", () => {
    listOftasks.removeChild(createList);
    saveTasks();
  });

  createList.addEventListener("click", () => {
    createList.classList.toggle("completed");
    saveTasks();
  });

  createList.appendChild(delBtn);
  listOftasks.appendChild(createList);

  inputText.value = "";
  saveTasks();
}

taskBtn.addEventListener("click", addTasks);

inputText.addEventListener("keypress", (event) => {
  if (event.key === "enter") {
    addTasks();
  }
});

document.addEventListener("DOMContentLoaded", loadTasks);
