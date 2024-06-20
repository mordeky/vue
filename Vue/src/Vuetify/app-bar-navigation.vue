<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" temporary>
        <v-list :items="items"></v-list>
      </v-navigation-drawer>

      <v-main style="height: 500px">
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size
          screens.
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import {ref, watch} from "vue";

const drawer = ref(false)
const group = ref(null)

const items = [
  {
    title: 'Foo',
    value: 'foo',
  },
  {
    title: 'Bar',
    value: 'bar',
  },
  {
    title: 'Fizz',
    value: 'fizz',
  },
  {
    title: 'Buzz',
    value: 'buzz',
  },
]

watch(group, () => {
  drawer.value = false
})
</script>
