<template>
  <v-layout>
    <v-app-bar :elevation="6">
      <!--<template v-slot:prepend>-->
      <v-app-bar-nav-icon/>
      <!--</template>-->

      <v-app-bar-title>Application Bar</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-banner>
          <template v-slot:actions>
            <v-btn text @click="dismissBanner">Dismiss</v-btn>
          </template>
          <h2>Welcome to our application!</h2>
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

        <br/><br/>
        <v-btn color="primary"
               v-tooltip.bottom="{ value: true, text: 'This is a tooltip' }">
          Hover over me
        </v-btn>

        <br><br>
        <v-alert type="success" dismissible>
          This is a success alert.
        </v-alert>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
function dismissBanner() {
  console.log('Banner dismissed');
}
</script>
