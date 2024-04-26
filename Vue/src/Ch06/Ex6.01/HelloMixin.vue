<template>
  <div>{{ greet('World') }}</div>
</template>

<script>
import greeter from './mixins/greeter.js'

export default {
  mixins: [greeter],
  // mixins: [greeter, firstMixin],
  /**
   * `mixins` is an array that accepts any mixin as its element,
   *  while a `mixin` is in fact a component’s `option` object.
   *  Mixins allow multiple components to share common data and logic definitions independently.
   */
  data() {
    return {greeting: 'Hi, Hi, Hi'}
  }
}
</script>
