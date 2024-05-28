<script setup>
/*
 https://vuejs.org/api/reactivity-core#reactive
 The reactive conversion is "deep": it affects all nested properties.
   A reactive object also deeply unwraps any properties that are refs
    while maintaining reactivity.

 It should also be noted that there is no ref unwrapping performed
  when the ref is accessed as an element of a reactive array or a native collection type like Map.
 */
import {ref, reactive} from 'vue'

const count = ref(ref(12345))
const proxy_obj = reactive({count})
const proxy_arr = reactive([count])

console.log(count.value)
console.log(proxy_obj.count)
console.log(proxy_arr[0].value)

</script>

