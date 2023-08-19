var content = `ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur lorem adipisicing elit. Obcaecati dicta deleniti quos LoRem quia beatae quod! Odio esse in, Lorem dignissimos porro culpa LOREM dicta amet dolorem cupiditate eum ab iste nostrum neque consequatur nulla qui. Optio eligendi asperiores, sapiente ut iusto exercitationem eaque, voluptate nisi unde at ex, recusandae excepturi reiciendis quia.`;

var keyword = "lorem";

var result = "";
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var count = 0;

while (position !== -1) {
  result +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;

  content = content.slice(position + keyword.length);

  position = content.toLowerCase().indexOf(keyword.toLowerCase());

  count++;
}
result += content;

var heading = `<p>Tìm kiếm với từ khóa: ${keyword}</p>`;

var footer = `<p>Đã tìm thấy ${count} kết quả với từ khóa: ${keyword}</p>`;

document.write(heading + result + footer);
