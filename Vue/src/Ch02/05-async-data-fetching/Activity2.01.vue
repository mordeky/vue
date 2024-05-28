<template>
  <div id="app">
    <div v-if="name" class="author">
      <h2>{{ name }}</h2>
      <h3 v-if="title">{{ title }}</h3>
      <p v-if="bio">{{ bio }}</p>
    </div>

    <div class="articles">
      <hr/>
      <h2>Articles</h2>
      <section v-if="posts" class="articles-list">
        <article v-for="(post, i) in posts" :key="i">
          <img
              v-if="post.fields.heroImage"
              width="320"
              height="320"
              class="thumbnail"
              :src="`${post.fields.heroImage.fields.file.url}?fit=scale&w=350&h=196`"
          />
          <div class="article-text">
            <div class="date">
              {{ new Date(post.fields.publishDate).toDateString() }}
            </div>
            <h4>{{ post.fields.title }}</h4>
            <p>{{ post.fields.description }}</p>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<!---->
<script setup>
import {createClient} from "contentful";
import {reactive, computed} from "vue";

const client = createClient({
  space: "hpr0uushokd4", // space ID
  accessToken: "jwEHepvQx-kMtO7_2ldjhE4WMAsiDp3t1xxBT8aDp7U", // contentful 空间的访问令牌
});

const authors = reactive([])
const posts = reactive([])

const name = computed(() => {
  // 注意，这里用的并非是三元运算符`x? x.key1 : x.key2`，而是直接用了`x && x.key1`
  return authors[0] && authors[0].fields.name;
})

const title = computed(() => {
  return authors[0] && authors[0].fields.title;
})

const bio = computed(() => {
  return authors[0] && authors[0].fields.shortBio;
})

async function created() {
  // authors.value = await getPeople();
  // posts.value = await getBlogPosts();
  // Object.assign(authors, await getPeople())
  // Object.assign(posts, await getBlogPosts())
  await getPeople().then(x => authors[0] = x[0])
  await getBlogPosts().then(x => posts.splice(0, posts.length, ...x))
  console.log('\n')
}

async function getPeople() {
  const entries = await client.getEntries({content_type: "person"});
  return entries.items;
}

async function getBlogPosts() {
  const entries = await client.getEntries({
    content_type: "blogPost",
    order: "-fields.publishDate",
  });
  return entries.items;
}

created()
</script>


<!--
<script>
import { createClient } from "contentful";

const client = createClient({
  space: "hpr0uushokd4",
  accessToken: "jwEHepvQx-kMtO7_2ldjhE4WMAsiDp3t1xxBT8aDp7U",
});

export default {
  name: "app",
  data() {
    return {
      authors: [],
      posts: {},
    };
  },
  computed: {
    name() {
      return this.authors[0] && this.authors[0].fields.name;
    },
    title() {
      return this.authors[0] && this.authors[0].fields.title;
    },
    bio() {
      return this.authors[0] && this.authors[0].fields.shortBio;
    },
  },
  async created() {
    this.authors = await this.getPeople();
    this.posts = await this.getBlogPosts();
  },
  methods: {
    async getPeople() {
      const entries = await client.getEntries({ content_type: "person" });
      return entries.items;
    },
    async getBlogPosts() {
      const entries = await client.getEntries({
        content_type: "blogPost",
        order: "-fields.publishDate",
      });
      return entries.items;
    },
  },
};
</script>
-->

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 16pt;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px auto 0;
  //max-width: 600px;
  //width: 600px;
}

.articles-list > article {
  display: flex;
  text-align: left;
  padding-bottom: 15px;
}

.article-text {
  padding: 3px 0;
}

.thumbnail {
  margin-right: 30px;
}

.date {
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
