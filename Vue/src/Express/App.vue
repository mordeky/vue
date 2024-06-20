<!-- See Also: Example 4.02 -->

<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POST Request Example</title>
  </head>
  <h1>POST Request Example</h1>

  <div>
    <button @click="sendRequest()">
      Send POST Request
    </button>
  </div>
</template>

<script setup>
function sendRequest() {
  const data = {
    name: 'John Doe',
    age: 30
  };

  fetch('http://localhost:3000/user', {
    method: 'POST',
    // mode: 'no-cors', // 绕过CORS检查
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
      .then(response => response.text())
      .then(data => {
        console.log('Success:', data);
        alert(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}

</script>