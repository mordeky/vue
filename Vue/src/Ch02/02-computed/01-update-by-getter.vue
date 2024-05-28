<!-- https://vuejs.org/guide/essentials/computed#writable-computed -->

<!---->
<template>
  <span>{{ fullName }}</span>
</template>

<script setup>
import {ref, computed} from 'vue'

/**
 * `source data`在被`<template>`使用时需要用到`ref()` / `reactive()`，
 *              在被`computed()`用到时，也需要用到`ref()` / `reactive()`。
 *  其内在逻辑都是：“数据驱动更新”，即：
 *    只要是需要响应数据的改变（数据事件）而进行更新操作，都需要用到`ref()` / `reactive()`
 * 测试：用`let lastName = 'Doe'` 替换 `const lastName = ref('Doe')`
 */
const firstName = ref('John')
const lastName = ref('Doe')
// let lastName = 'Doe'

/**
 * 从这个例子也可以看出，computed() 往往需要用在：
 *   (1) 某个数据(CP)的更新需要依赖于多个其它数据的更新；
 *   (2) 某个数据(CP)只依赖于单个数据，但需要通过对其所依赖的数据进行处理/计算，才能得到该CP数据时。
 */
const fullName = computed(() => {
  console.log(`fullName is updated by "${getLastName()}": its getter() is called!\n\n`)
  return firstName.value + ' ' + getLastName()
  // return firstName.value + ' ' + lastName.value
})

/**
 * 1. `CP`中的数据是未解包的（unwrapped），因此，
 *     在`<script>`中 使用`CP`中的数据 或 对`CP`中的数据进行赋值，
 *     都需要用到 `CP.value` 或 `CP.value = newValue`
 * 2. 上面定义的`fullName`是`readonly`的（没有为其定义`set()`方法）,
 *    直接使用`CP.value = newValue`将会触发运行时警告：computed value is readonly.
 */
fullName.value = 'John Smith!'
console.log(fullName)
console.log(fullName.value)

console.log('--------------------------------\n\n')

/**
 * 测试：对CP所依赖的数据进行赋值，是否会触发器getter()方法？
 */
/*for(lastName.value of ['Liu', 'Lee', 'Wang', 'Li', 'Zhao'])
  console.log(`After setting lastName.value = '${getLastName()}'`)*/

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
async function updateByLastName(){
  for(lastName.value of ['Liu', 'Lee', 'Wang', 'Li', 'Zhao']){
    console.log(`After setting lastName.value = '${getLastName()}'`)
    await sleep(1000)
  }
}

updateByLastName()

/**
 * 测试：对CP所依赖的数据进行赋值，是否会触发器getter()方法：
 * Test Case 1:`lastName.value = 'Doe'`   // 未对`lastName`做任何更改
 * Test Case 2:`lastName.value = 'Smith'` // 对`lastName`进行了更改
 */
/*
lastName.value = 'Doe'
console.log(`After setting lastName.value = '${getLastName()}'`)

lastName.value = 'Smith'
console.log(`After setting lastName.value = '${getLastName()}'`)
*/

// 问题：如果将<template>部分删除，还会触发fullName的getter()方法吗？
// console.log(lastName.value)
// console.log(fullName.value)

function getLastName(){
  if(lastName instanceof Object)
    return lastName.value
  return lastName
}
</script>
