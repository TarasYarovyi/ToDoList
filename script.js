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
}

function addNewTask() {
  const newTask = document.createElement("li");
  newTask.textContent = $todoInput.value;
  newTask.id = ++$idNumber;
  newTask.innerHTML += `<div class="tools">
  <button class="complete" onclick="completeTask(${newTask.id})"><i class="fas fa-check"></i></button><button class="edit" onclick="editTask(${newTask.id})">Edit</button><button class="delete" onclick="deleteTask(${newTask.id})"><i class="fas fa-times"></i></button>
</div>`;

  $ulList.appendChild(newTask);
  $todoInput.value = "";
  $alertInfo.textContent = "";
}
function completeTask(taskId) {
  document.getElementById(`${taskId}`).classList.toggle("completed");
}

function deleteTask(taskId) {
  document.getElementById(`${taskId}`).remove();
}

// function editTask(taskId) {
//   $popup.style.display = "flex";

//   $addPopupBtn.addEventListener("click", () => {
//     document.getElementById(`${taskId}`).textContent = $popupInput.value;

//     $popupInput.value = "";
//     $popup.style.display = "none";
//   });

//   $closeTodoBtn.addEventListener("click", () => {
//     $popupInput.value = "";
//     $popup.style.display = "none";
//   });
// }

document.addEventListener("DOMContentLoaded", main);
