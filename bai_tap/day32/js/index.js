new F8.create("counter-app", {
  data: () => {
    return {
      count: 0,
      title: "Counter App",
    };
  },
  template: `
    <h2>{{title}}</h2>
    <h2>Đã đếm: {{count}} lần</h2>
    <button v-on:click="count--">-</button>
    <button v-on:click="count++">+</button>
    <button v-on:dblclick="title='Hello cả nhà'">Change title</button>
    `,
});
