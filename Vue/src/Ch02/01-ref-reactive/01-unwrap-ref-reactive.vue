<script setup>
import {ref, reactive} from 'vue'

const count = ref(1)

{
  // const refObj = ref(0)
  const refObj = ref()
  refObj.value = count
  console.log(refObj.value.value) // 1
  console.log(refObj.value.value === count.value) // true
}

{
  const refObj = ref(count)
  console.log(refObj.value) // 1
  console.log(refObj.value === count.value) // true
}

{
  const reactObj = reactive({})
  reactObj.count = count
  console.log(reactObj.count) // 1
  console.log(reactObj.count === count.value) // true
}

{
  const reactObj = reactive({count})
  console.log(reactObj.count) // 1
  console.log(reactObj.count === count.value) // true
}

{
  // const refObj = ref(count)
  const refObj = ref()
  refObj.value = count
  const reactObj = reactive({count: refObj})
  // reactObj.count = refObj
  console.log(reactObj.count.value)  // 1
}

console.log('debug')

</script>

