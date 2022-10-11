const taskList = document.querySelector(".task-list");
const form = document.querySelector(".adding-task");
const formInput = document.getElementById("adding-task-input");

const tasks = [];

const event = form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (formInput.value !== "") {
    const taskListItem = document.createElement("li");
    taskListItem.classList.add("task-list-item");

    const listItemContainer = document.createElement("div");
    listItemContainer.classList.add("list-item-container");

    const listItemContent = document.createElement("p");
    listItemContent.classList.add("list-item-content");

    const checkContainer = document.createElement("div");
    checkContainer.classList.add("check-container");

    const listItemCheck = document.createElement("input");
    listItemCheck.type = "checkbox";

    const listItemRemove = document.createElement("button");
    listItemRemove.classList.add("remove-btn");
    listItemRemove.innerText = "Remove";

    taskList.append(taskListItem);
    taskListItem.append(listItemContainer);
    listItemContainer.append(checkContainer, listItemRemove);
    checkContainer.append(listItemCheck, listItemContent);

    listItemContent.innerText = formInput.value;
    form.reset();

    listItemRemove.addEventListener("click", () => {
      taskListItem.remove();
    });
  } else {
    const warning = document.createElement("p");
    warning.innerText = "You should type a task!!!";
    form.append(warning);

    const event = form.addEventListener("submit", (event) => {
      event.preventDefault();
      warning.remove();
    });
  }
});
