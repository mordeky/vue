<template>
  <div class="modal">
    <div class="modal-header">
      <slot name="header">
        Default Header Content
      </slot>
    </div>

    <div class="modal-body">
      <slot :bodyVal="42">
        Default Body Content
      </slot>
    </div>

    <div class="modal-footer">
      <slot name="footer" :btnText="OK">
        Default Footer Content
      </slot>
    </div>
  </div>
</template>

<script setup>
const OK = 'OK'
</script>