<template>
  <span>Hello World!</span>
</template>

<script setup>
// Ref: https://juejin.cn/post/7053000710056574990

async function fetchData(){
  // await sleep(2000)
  console.log('fetchData(): start ...')
  const response = await fetch("https://api.adviceslip.com/advice")
  const data = await response.json()
  console.log(`fetchData(): ${data.slip.advice}`)
  console.log('fetchData(): end.')
}
async function testFetchData() {
  console.log('testFetchData(): start ...')
  // 函数执行的时候，一旦遇到`await fun()`，就会启动异步操作fun()，并跳出`async`函数，
  //   等到异步操作fun()执行完，再接着执行`async`函数体内后面的语句。
  // `await`后面的函数执行完毕时，
  //   `await`会产生一个微任务（`promise.then`也会产生微任务）,
  //   执行完`await`之后，直接跳出`async`函数，执行其他代码。
  await fetchData()
  console.log('testFetchData(): end.')
}
testFetchData()
console.log('Hello First!')

async function test(){
  console.log('test() is called!')
  return 'test(): return!'
}

test().then(res => {
  console.log(res);
})
console.log('Hello Second!')
</script>
