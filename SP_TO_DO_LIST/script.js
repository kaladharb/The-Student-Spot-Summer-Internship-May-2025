const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskTime = document.getElementById("task-time");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = taskInput.value;
  const taskDateTime = taskTime.value;
  addTask(taskText, taskDateTime);
  taskInput.value = "";
  taskTime.value = "";
});

function addTask(taskText, taskDateTime) {
  const li = document.createElement("li");
  li.innerHTML = `
        <span>${taskText} <small>(${new Date(
    taskDateTime
  ).toLocaleString()})</small></span>
        <div>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
  taskList.appendChild(li);

  const deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => li.remove());

  const editBtn = li.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => {
    taskInput.value = taskText;
    taskTime.value = taskDateTime;
    li.remove();
  });

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
}
