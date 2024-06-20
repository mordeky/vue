<template>
  <v-container>

<!--
    <v-app-bar :elevation="6">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Application Bar</v-app-bar-title>
    </v-app-bar>
-->

    <!--<v-navigation-drawer :width="215">
      <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
      <v-divider></v-divider>
      <v-list-item link title="List Item 1"></v-list-item>
      <v-list-item link title="List Item 2"></v-list-item>
      <v-list-item link title="List Item 3"></v-list-item>
    </v-navigation-drawer>
    -->

    <v-banner>
      <template v-slot:actions>
        <v-btn text @click="dismissBanner">Dismiss</v-btn>
      </template>
      Welcome to our application!
    </v-banner>

    <br>
    <v-tooltip bottom>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">
          Hover over me
        </v-btn>
      </template>
      <span>Tooltip information WaWu!</span>
    </v-tooltip>

    <br><br>
    <v-btn color="primary"
           v-tooltip.bottom="{ value: true, text: 'This is a tooltip' }">
      Hover over me
    </v-btn>

    <v-alert type="success" dismissible>
      This is a success alert.
    </v-alert>
  </v-container>
</template>

<script setup>
function dismissBanner() {
  console.log('Banner dismissed');
}
</script>
