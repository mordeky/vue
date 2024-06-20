<script setup>
import {computed} from 'vue'
import {useColorStore} from '../stores/color';

const store = useColorStore()

function toHex(color) {
  return Number(color).toString(16).padStart(2, '0')
}

const previewRGB = computed(() => {
  return {
    // backgroundColor: "#" + toHex(store.red) + toHex(store.green) + toHex(store.blue)
    backgroundColor: `#${toHex(store.red)}${toHex(store.green)}${toHex(store.blue)}`
  }
});
</script>

<template>
  <div>
    <h2>Preview Color</h2>
    <div class="previewColor" :style="previewRGB"></div>
    <p>
      CSS color string: {{ previewRGB.backgroundColor }}
    </p>
  </div>
</template>

<style>
.previewColor {
  width: 250px;
  height: 250px;
}
</style>