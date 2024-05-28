<template>
  <span>{{react}}</span>
</template>

<script setup>
import {ref, reactive, watch} from 'vue'

{
  const target = {a: 1, b: 2}
  const source = {b: 4, c: 5}
  Object.assign(target, source)

  const reactTarget = reactive(target)
  Object.assign(reactTarget, source)
}

{
  const obj = {product: 'juice'}
  // obj = {item: 'fruit'}  // 不能直接对const object赋值
  obj.item = 'fruit'  // 但是可以直接为obj增加新的字段(field)
  delete obj.product  // 如果原来的字段`product`不需要保留，可以直接删除之
}
// {
let react = reactive([])
watch(
    react,
    ()=>{
      console.log('react changed!')
      console.log(react)
    }
)
// react = [1, 2, 3]
react = reactive([4, 5, 6])
// react.splice(0, react.length, ...[1, 2, 3])
// }
{
  const obj = {product: 'juice'}
  const reactObj = reactive(obj)
  reactObj.item = 'fruit'  // 注意，此时，`obj`中也增加了一个新的字段`product`
  delete reactObj.product
}

{
  const obj = ref({product: 'juice'})
  // obj.value = {item: 'fruit'}  // 注意，这一行等价于下面两行
  Object.assign(obj.value, {item: 'fruit'})
  delete obj.value.product
}

{
  const obj = ref(123)

  const x = 888
  Object.assign(obj.value, x)  // Object.assign()的`source`(第2个参数)不是object，不起作用
  console.log(obj.value)  // => 123

  Object.assign(obj.value, {x}) // Object.assign()的`target`(第1个参数)不是object，不起作用
  console.log(obj.value.x)  // => undefined
  {
    const obj = ref({})
    Object.assign(obj.value, {x})
    console.log(obj.value.x)  // => 888
  }

  obj.value = 999
  console.log(obj.value)  // => 999
}

</script>

