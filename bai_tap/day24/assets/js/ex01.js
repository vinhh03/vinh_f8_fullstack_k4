let todoBtn = document.querySelector(".todo-btn");
let todoInput = document.querySelector(".todo-input");
let todoForm = document.querySelector(".todo-form");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

let todoList = getTodoListFromLocalStorage();

renderTodo(todoList);

todoBtn.addEventListener("click", function () {
  if (!todoInput.value.trim()) {
    alert("Vui lòng nhập thông tin");
    return false;
  }
  let todoList = getTodoListFromLocalStorage();
  todoList.push({ name: todoInput.value });
  todoInput.value = "";
  localStorage.setItem("todoList", JSON.stringify(todoList));
  renderTodo(todoList);
});

function editTodoList(id) {
  let todoList = getTodoListFromLocalStorage();

  if (todoList.length > 0) {
    document.querySelector(
      `.todo-item-${id}`
    ).outerHTML = `<form class="edit-form">
    <input
      type="text"
      class="edit-input-${id}"
      placeholder="Now! You can edit a task."
      value="${todoList[id].name}"
    />
    <button class="edit-btn-${id}">Edit Task</button>
  </form>`;
    let editBtn = document.querySelector(`.edit-btn-${id}`);
    let editInput = document.querySelector(`.edit-input-${id}`);
    let editForm = document.querySelector(".edit-form");
    editForm.addEventListener("submit", function (e) {
      e.preventDefault();
    });

    editBtn.addEventListener("click", function () {
      if (!editInput.value.trim()) {
        alert("Vui lòng nhập thay đổi");
        return false;
      }
      todoList[id] = { name: editInput.value };
      todoInput.value = "";
      localStorage.setItem("todoList", JSON.stringify(todoList));
      renderTodo(todoList);
    });
  }
}

function deleteTodoList(id) {
  if (confirm("Bạn chắc chắn muốn xóa?")) {
    let todoList = getTodoListFromLocalStorage();
    todoList.splice(id, 1);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    renderTodo(getTodoListFromLocalStorage());
  }
}

function renderTodo(todoList = []) {
  let content = "";

  todoList.forEach((todo, index) => {
    content += `<li class="todo-item-${index}">
    <p>${todo.name}</p>
    <div>
    <i onclick="editTodoList(${index})" class="fa-solid fa-pen-to-square"></i>
    <i onclick="deleteTodoList(${index})" class="fa-solid fa-trash"></i>
    </div>
    </li>`;
  });
  document.querySelector(".todo-list").innerHTML = content;
}

function getTodoListFromLocalStorage() {
  return localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : [];
}
