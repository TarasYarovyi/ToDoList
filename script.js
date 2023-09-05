let $todoInput;
let $alertInfo;
let $addBtn;
let $ulList;
let $newTask;
let $popup;
let $popupInfo;
let $popupInput;
let $addPopupBtn;
let $closeTodoBtn;
let $editedTodo;
let $idNumber = 0;

function main() {
  prepareDOMElements();
  prepareDOMEvents();
}

function prepareDOMElements() {
  $todoInput = document.querySelector(".todo-input");
  $alertInfo = document.querySelector(".alert-info");
  $addBtn = document.querySelector(".add-btn");
  $ulList = document.querySelector(".todo-list ul");
  $allTasks = document.getElementsByTagName("li");
  $popup = document.querySelector(".popup");
  $popupInfo = document.querySelector(".popup-info");
  $popupInput = document.querySelector(".popup-input");
  $addPopupBtn = document.querySelector(".accept");
  $closeTodoBtn = document.querySelector(".cancel");
}

function prepareDOMEvents() {
  $addBtn.addEventListener("click", addNewTask);
  $closeTodoBtn.addEventListener("click", closeTodoBtn);
  $addPopupBtn.addEventListener("click", addPopupBtn);
  $ulList.addEventListener("click", handleToolAction);
}

function addNewTask() {
  const newTask = document.createElement("li");
  newTask.innerHTML = $todoInput.value;
  newTask.id = $idNumber;
  newTask.innerHTML += `<div class="tools">
  <button class="complete"><i class="fas fa-check"></i></button><button class="edit"><i class="fas fa-pencil"></i></button><button class="delete"><i class="fas fa-times"></i></button>
</div>`;

  $ulList.appendChild(newTask);
  $todoInput.value = "";
  $alertInfo.textContent = "";
  $idNumber++;
}
function handleToolAction(e) {
  const handledTask = e.target.closest("li");
  const handledBtn = e.target.closest("button");

  if (handledBtn.classList.contains("complete")) {
    handledTask.classList.toggle("completed");
  } else if (e.target.closest("button").classList.contains("delete")) {
    handledTask.remove();
  } else if (e.target.closest("button").classList.contains("edit")) {
    $popup.style.display = "flex";
    $editedTodo = handledTask.id;
    $popupInput.value = handledTask.textContent;
  }
}

function addPopupBtn() {
  document.getElementById($editedTodo).firstChild.textContent =
    $popupInput.value;

  $popup.style.display = "none";
}

function closeTodoBtn() {
  $popup.style.display = "none";
  $popupInput.value = "";
}

document.addEventListener("DOMContentLoaded", main);
