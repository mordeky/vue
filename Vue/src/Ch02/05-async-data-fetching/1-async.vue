<template>
  <span>Hello World!</span>
</template>

<script setup>
// Ref: https://juejin.cn/post/7053000710056574990

function Test1() {
  async function test() {
    return '张三'
  }

  /**
   * `async`函数返回的是一个`promise`对象。
   *  如果`async`函数没有设置返回值，则返回一个`undefined`的`promise`对象。
   */
  test().then(res => {
    console.log(res);//张三
  })
}
// Test1()

function Test2(){
  async function async1() {
    await async2()
    console.log('async1 end')
  }

  async function async2() {
    console.log('async2 end')
  }

  async1()

  setTimeout(function () {
    console.log('setTimeout')
  }, 0)
//console.log('setTimeout')

  new Promise((resolve) => {
    console.log('Promise1')
    resolve()
  }).then(function () {
    console.log('Promise2')
  })
}
// Test2()

function Test3() {
  function test() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // console.log('a')
        resolve(1)
        /*if (a === 1) {
          resolve(2)
        } else {
          reject(3)
        }*/
      }, 1)
    })
  }

  function testPromise() {
    let i = 0, arr = []
    for (; i < 20; i++)
      arr.push(test())
    return Promise.all(arr)
  }

  async function testAsync() {
    let i = 0
    for (; i < 20; i++)
      await test() // 大量的await的promises相继发生，会使程序变慢
    return null
  }

  console.time('Timer1')
  testPromise().then(e => {
    console.timeEnd('Timer1') // 3ms
  }).catch(err => console.log(err))

  console.time('Timer2')
  testAsync().then(e => {
    console.timeEnd('Timer2') // 89ms
  }).catch(err => console.log(err))
}
Test3()

</script>
