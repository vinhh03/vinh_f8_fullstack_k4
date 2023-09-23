var root = document.querySelector("#root");
var h1 = document.createElement("h1");
h1.innerText = `Count: `;
var textNode = document.createTextNode(0);
h1.append(textNode);
root.append(h1);

var minusBtn = document.createElement("button");
minusBtn.innerText = "-";
minusBtn.id = "minus";
root.append(minusBtn);

var plusBtn = document.createElement("button");
plusBtn.id = "plus";
plusBtn.innerText = "+";
root.append(plusBtn);

var mousedown = false;
var handleIncrement = function () {
  textNode.data++;
  if (mousedown) {
    setTimeout(function () {
      handleIncrement();
    }, 100);
  }
};

var handleReduce = function () {
  textNode.data--;
  if (mousedown) {
    setTimeout(function () {
      handleReduce();
    }, 100);
  }
};

minusBtn.addEventListener("mousedown", function () {
  mousedown = true;
  handleReduce();
});

minusBtn.addEventListener("mouseup", function () {
  mousedown = false;
  handleReduce();
});

plusBtn.addEventListener("mousedown", function () {
  mousedown = true;
  handleIncrement();
});

plusBtn.addEventListener("mouseup", function () {
  mousedown = false;
  handleIncrement();
});
