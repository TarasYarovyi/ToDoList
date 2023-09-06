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

document.addEventListener("DOMContentLoaded", main);

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
  $todoInput.addEventListener("keypress", enterTodoInput);
  $addPopupBtn.addEventListener("click", addPopupBtn);
  $closeTodoBtn.addEventListener("click", closeTodoBtn);
  $ulList.addEventListener("click", handleToolAction);
}

function addNewTask() {
  if ($todoInput.value) {
    const newTask = document.createElement("li");
    newTask.innerHTML = $todoInput.value;
    newTask.id = $idNumber;
    newTask.innerHTML += `<div class="tools"><button class="complete"><i class="fas fa-check"></i></button><button class="edit"><i class="fas fa-pencil"></i></button><button class="delete"><i class="fas fa-times"></i></button></div>`;
    $ulList.appendChild(newTask);
    $todoInput.value = "";
    $alertInfo.textContent = "";
    $idNumber++;
  } else {
    $alertInfo.textContent = "Please, enter some content.";
  }
}

function enterTodoInput(e) {
  if (e.key === "Enter") {
    addNewTask();
  }
}

function handleToolAction(e) {
  const handledTask = e.target.closest("li");
  const handledBtn = e.target.closest("button");

  if (handledBtn.classList.contains("complete")) {
    handledTask.classList.toggle("completed");
    handledBtn.classList.toggle("completed");
  } else if (e.target.closest("button").classList.contains("delete")) {
    handledTask.remove();
    if (!$allTasks[0]) {
      $alertInfo.textContent = "No tasks on the list.";
    }
  } else if (e.target.closest("button").classList.contains("edit")) {
    $popup.style.display = "flex";
    $editedTodo = handledTask.id;
    $popupInput.value = handledTask.textContent;
  }
}

function addPopupBtn() {
  if ($popupInput.value) {
    document.getElementById($editedTodo).firstChild.textContent =
      $popupInput.value;

    $popup.style.display = "none";
    $popupInfo.textContent = "";
  } else {
    $popupInfo.textContent = "Please, enter some content.";
  }
}

function closeTodoBtn() {
  $popup.style.display = "none";
  $popupInput.value = "";
  $popupInfo.textContent = "";
}
