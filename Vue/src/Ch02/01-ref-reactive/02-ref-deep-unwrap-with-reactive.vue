<script setup>
/*
 https://vuejs.org/api/reactivity-core#ref
 If an object is assigned as a ref's value,
   the object is made deeply reactive with reactive().
   This also means if the object contains nested refs,
   they will be deeply unwrapped.
 */
import {reactive, ref} from 'vue'

const y = ref(123)
const obj = {x: ref({y})}

const r1 = ref(obj);
const r2 = reactive(r1)
const r3 = reactive(obj)

// console.log(obj.x)
/*console.log(obj.x.value)
console.log(r1.value.x)
console.log(r2.value.x)
console.log(r3.x)*/

console.log(obj.x.value.y)
console.log(r1.value.x.y)
console.log(r2.value.x.y)
console.log(r3.x.y)
</script>

