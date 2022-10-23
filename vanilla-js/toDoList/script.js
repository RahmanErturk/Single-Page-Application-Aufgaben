const taskList = document.querySelector(".task-list");
const form = document.querySelector(".adding-task");
const formInput = document.getElementById("adding-task-input");
const resetBtn = document.getElementById("tasks-reset_btn");
let removeButtons;
let checkboxes;

function addHTML(todo) {
  const taskListItem = document.createElement("li");
  taskListItem.classList.add("task-list-item");

  const listItemContainer = document.createElement("div");
  listItemContainer.classList.add("list-item-container");

  const checkContainer = document.createElement("div");
  checkContainer.classList.add("check-container");

  const listItemContent = document.createElement("p");
  listItemContent.classList.add("list-item-content");

  const listItemCheck = document.createElement("input");
  listItemCheck.type = "checkbox";
  listItemCheck.checked = todo.isCompleted;
  listItemCheck.classList.add("todoCheckBox");

  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add("btns-container");

  const listItemRemove = document.createElement("button");
  listItemRemove.classList.add("remove-btn");
  listItemRemove.innerText = "Remove";

  taskList.append(taskListItem);
  taskListItem.append(listItemContainer);
  listItemContainer.append(checkContainer, btnsContainer);
  checkContainer.append(listItemCheck, listItemContent);
  btnsContainer.append(listItemRemove);

  listItemContent.innerText = todo.text;
}

const startConfig = () => {
  // initial settings

  const todos = JSON.parse(localStorage.getItem("todos"));
  if (!todos) {
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
    todos.forEach((todo) => {
      addHTML(todo);
    });
    removeButtons = document.querySelectorAll(".remove-btn");
    checkboxes = document.querySelectorAll(".todoCheckBox");
  }
};

startConfig();

const addTask = (event) => {
  event.preventDefault();

  if (formInput.value !== "") {
    const todo = {
      text: formInput.value,
      isCompleted: false,
    };

    const todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(todos);

    addHTML(todo);
    form.reset();
  } else {
    const warning = document.createElement("p");
    warning.innerText = "You should type a task!!!";
    form.append(warning);

    const event = form.addEventListener("submit", (event) => {
      event.preventDefault();
      warning.remove();
    });
  }
};

const removeTodo = (e) => {
  const removeTodoListItem = e.target.parentElement.parentElement.parentElement;
  console.log(removeTodoListItem);
  const text = removeTodoListItem.firstChild.firstChild.children[1].textContent;
  console.log(text);

  let todos = JSON.parse(localStorage.getItem("todos"));
  todos = todos.filter((td) => td.text != text);
  localStorage.setItem("todos", JSON.stringify(todos));

  removeTodoListItem.remove();
};

const completeTodo = (e) => {
  const checkTodoListItem = e.target.parentElement;
  console.log(checkTodoListItem);
  const text = checkTodoListItem.children[1].textContent;
  console.log(text);
  let todos = JSON.parse(localStorage.getItem("todos"));
  todos.forEach((td) =>
    td.text === text ? (td.isCompleted = !td.isCompleted) : td.isCompleted
  );
  localStorage.setItem("todos", JSON.stringify(todos));
};

const resetAllTasks = (e) => {
  let allListItems =
    e.target.parentElement.parentElement.children[1].childNodes;
  for (let index = 0; index < allListItems.length; index++) {
    allListItems[index].remove();
  }

  let todos = JSON.parse(localStorage.getItem("todos"));
  todos = [];
  localStorage.setItem("todos", JSON.stringify(todos));
};

form.addEventListener("submit", addTask);
removeButtons.forEach((btn) => btn.addEventListener("click", removeTodo));
checkboxes.forEach((check) => check.addEventListener("click", completeTodo));
resetBtn.addEventListener("click", resetAllTasks);
