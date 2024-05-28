<template>
  <div>
    <p>{{ fullName }}</p>
    <p>{{ totalEntries }}</p>
    <p>{{ featuredEntries }}</p>
  </div>
</template>

<script setup>
import {computed} from "vue";

const post = {
  fields: {
    author: {
      firstName: "John",
      lastName: "Doe",
    },
    entries: [
      {
        title: "Entry 1",
        content: "Entry 1's content",
        featured: true,
      },
      {
        title: "Entry 2",
        content: "Entry 2's content",
        featured: false,
      },
    ],
  },
}

const fullName = computed(() => {
  const {firstName, lastName} = post.fields.author;
  return `${firstName} ${lastName}`;
})

const totalEntries = computed(() => {
  return post.fields.entries.length;
})

const featuredEntries = computed(() => {
  const {entries} = post.fields; // 提问: 这里的`{entries}`是何意？
  // const entries = post.fields.entries;
  return entries.filter((entry) => !!entry.featured);
})

</script>

<!--
<script>
export default {
  data() {
    return {
      post: {
        fields: {
          author: {
            firstName: "John",
            lastName: "Doe",
          },
          entries: [
            {
              title: "Entry 1",
              content: "Entry 1's content",
              featured: true,
            },
            {
              title: "Entry 2",
              content: "Entry 2's content",
              featured: false,
            },
          ],
        },
      },
    };
  },
  computed: {
    fullName() {
      const { firstName, lastName } = this.post.fields.author;
      return `${firstName} ${lastName}`;
    },
    totalEntries() {
      return this.post.fields.entries.length;
    },
    featuredEntries() {
      const { entries } = this.post.fields;
      return entries.filter((entry) => !!entry.featured);
    },
  },
};
</script>
-->
