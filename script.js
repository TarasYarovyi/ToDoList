let $todoInput;
let $alertInfo;
let $addBtn;
let $ulList;
let $newTask;
let $allTasks;
let $idNumber = 0;
let $popup;
let $popupInfo;
let $editedTodo;
let $popupInput;
let $addPopupBtn;
let $closeTodoBtn;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
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
};

const prepareDOMEvents = () => {
  $addBtn.addEventListener("click", addNewTask);
};

const addNewTask = () => {
  const newTask = document.createElement("li");
  newTask.textContent = $todoInput.value;
  newTask.id = ++$idNumber;
  newTask.innerHTML += `<div class="tools">
  <button class="complete"><i class="fas fa-check"></i></button>
  <button class="edit">Edit</button>
  <button class="delete"><i class="fas fa-times"></i></button>
</div>`;

  $ulList.appendChild(newTask);
  $todoInput.value = "";
  $alertInfo.textContent = "";
};

document.addEventListener("DOMContentLoaded", main);
