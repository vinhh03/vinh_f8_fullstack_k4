var todo = document.querySelector(".todo");
var todoForm = document.querySelector("form");
var todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var inputEl = this.children[0];
  var name = inputEl.value;
  //   var html = `<p>${name} <span>Xóa</span></p>`;
  //   todoList.innerHTML += html;

  var p = document.createElement("p");
  p.innerText = name;
  var span = document.createElement("span");
  span.innerText = "Xóa";
  p.append(span);
  todoList.append(p);
  inputEl.value = "";
  span.addEventListener("click", function () {
    handleRemove(p);
  });
});

var handleRemove = function (todo) {
  todo.remove();
};

// Comment node
var comment = document.createComment("Todo List");
todo.append(comment);

/*
- childNodes
- parentNode
- nextSibling
- previousSibling
- firstChild
- lastChild

-> Trả về Node: text, comment, element,...
*/
