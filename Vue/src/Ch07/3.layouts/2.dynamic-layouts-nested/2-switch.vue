<template>
  <div style="text-align: center">
    <h3>Hello World!</h3>
    <button @click="switchLayout">Switch Layout</button>
  </div>
</template>

<script setup>
import Layout1 from './Layout1.vue';
import Layout2 from './Layout2.vue';

// const {curLayout} = defineProps(['curLayout'])
let {curLayout} = defineProps(['curLayout'])

const emits = defineEmits(["update-layout"]);

/*function switchLayout() {
  curLayout.__hmrId === Layout1.__hmrId
      ? emits('update-layout', Layout2)
      : emits('update-layout', Layout1);
}*/

function switchLayout() {
  // if(curLayout === undefined)
  /*if(!curLayout){
    curLayout = Layout2
    return
  }*/

  curLayout = (!curLayout || curLayout.__hmrId === Layout1.__hmrId) ? Layout2 : Layout1
  emits('update-layout', curLayout)
}
</script>
