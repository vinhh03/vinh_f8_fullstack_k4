// Template
var root = document.querySelector("#root");
var template = document.querySelector("template");
var templateNode = template.content.cloneNode(true);
root.append(templateNode);
console.log(templateNode);
var html = `<h1>F8 - Fullstack</h1>
<button>Click me</button>`;
root.innerHTML = html;

var templateNode2 = template.content.cloneNode(true);
root.append(templateNode2);

// var F8 = {
//   render: function (rootEl, option = {}) {
//     var root = document.querySelector(rootEl);

//     var templateEl = document.createElement("template");
//     templateEl.innerHTML = option.template;
//     var templateNode = templateEl.content.cloneNode(true);
//     Array.from(templateNode.children).forEach(function (element) {
//       var length = element.getAttribute("v-length");
//       if (length) {
//         var count = length;
//         for (var index = 0; index < length; index++) {
//           count--;
//           var elementNode = element.cloneNode(true);
//           elementNode.innerHTML = elementNode.innerHTML.replaceAll(
//             "{index}",
//             count
//           );
//           templateNode.insertBefore(elementNode, element.nextElementSibling);
//         }
//         element.remove();
//       }
//     });
//     root.append(templateNode);
//     // root.innerHTML = option.template;
//   },
// };

// F8.render("#root", {
//   template: `
//   <h1 v-length="5">Sản phẩm {index}</h1>
//   <h2 v-length="4">Bài viết</h2>
//   <div v-length="3">
//     <p>Hello</p>
//     <p>Nihao</p>
//   </div>
//   `,
// });
