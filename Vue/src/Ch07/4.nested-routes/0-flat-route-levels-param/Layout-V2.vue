<template>
  <div :style="divStyle">
    <slot/>

    <span v-if="nextName.length">
      <router-link
          :to="{ name: nextName }"
          @click="onEmits"
      >
        {{ nextTitle }}
      </router-link>
    </span>
    <!--<router-view/> -->
  </div>
</template>

<script setup>
import {getCurrentInstance} from "vue";

// const {nextPtr} = defineProps(['nextName', 'nextPtr', 'nextTitle'])
const {nextPtr, lineStyle} = defineProps({
  nextName: {
    type: String,
    default: ''
  },
  nextPtr:{
    type: Number,
  },
  nextTitle:{
    type: String
  },
  lineStyle:{
    type: String,
    default: 'solid'
  }
})

const divStyle = `border:1px ${lineStyle} #000; padding: 7px`

const emits = defineEmits(['updatePtr'])

const instance = getCurrentInstance();

function onEmits() {
  instance.parent.emit('updatePtr', nextPtr)
}

</script>
