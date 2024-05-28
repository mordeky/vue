<template>
  <sidebar-menu
      v-model:collapsed="collapsed"
      :menu="menu"
      :theme="selectedTheme"
      :show-one-child="true"
      @update:collapsed="onToggleCollapse"
      @item-click="onItemClick"
  />
<!--  <div-->
<!--      v-if="isOnMobile && !collapsed"-->
<!--      class="sidebar-overlay"-->
<!--      @click="collapsed = true"-->
<!--  />-->
  <div id="demo" :class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]">
    <div class="demo">
      <!--<div class="container">-->
      <router-view/>
      <!--</div>-->
    </div>
  </div>
</template>

<script setup>
import {menu} from '../menu-routes.js'

const collapsed = false
const themes = [
  {
    name: 'Default theme',
    input: '',
  },
  {
    name: 'White theme',
    input: 'white-theme',
  },
]
const selectedTheme = 'white-theme'
const isOnMobile = false

// this.onResize()
// window.addEventListener('resize', this.onResize)

function onToggleCollapse(collapsed) {
  console.log('onToggleCollapse')
}

function onItemClick(event, item) {
  console.log('onItemClick')
  // console.log(event)
  // console.log(item)
}

function onResize() {
  if (window.innerWidth <= 767) {
    this.isOnMobile = true
    this.collapsed = true
  } else {
    this.isOnMobile = false
    this.collapsed = false
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  background-color: #f2f4f7;
  color: #262626;
}

#demo {
  padding-left: 290px;
  transition: 0.3s ease;
}

#demo.collapsed {
  padding-left: 65px;
}

#demo.onmobile {
  padding-left: 65px;
}

.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}

.demo {
  padding: 15px;
}

.container {
  max-width: 900px;
}
</style>
