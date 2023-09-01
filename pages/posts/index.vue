<template>
  <h1>Hello Posts Page</h1>

  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>

  <h3>{{ post.title }}</h3>
</template>

<script setup>

const posts = ref([])

onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => posts.value = data)
})

const { pending, data: post } = await useFetch('https://jsonplaceholder.typicode.com/posts/1', {
  lazy: true,
  pick: ['title']
})
</script>