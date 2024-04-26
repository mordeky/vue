<template>
  <div id="app">
    <div v-for="todo in todos" :key="todo.id">
      <ul>
        <li>Title: {{ todo.title }}</li>
        <li>Status: {{ todo.completed ? "Completed" : "Not Completed" }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
const person1 = {
  name: "John",
  age: 30,
  country: "USA"
};

const { age } = person1;
console.log(age); // 输出: "Doe"

const person = {
  firstName: "John",
  lastName: "Doe"
};
const { lastName: last } = person;

// console.log(first); // 输出: "John"
console.log(last); // 输出: "Doe"

export default {
  inject: ['axios'],
  async mounted() {
    const { data: todos } = await this.axios(
      "https://jsonplaceholder.typicode.com/todos"
    );
    this.todos = todos;
  },
  data() {
    return { todos: [] };
  },
};
</script>
