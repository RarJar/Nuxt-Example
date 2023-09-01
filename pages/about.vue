<template>
  <Title>Example Blog | About</Title>
  <h1>Hello About Page</h1>

  <div>
    <ul v-for="product in products" :key="product.id">
      <li>{{ product.title }}</li>
    </ul>
  </div>
</template>

<script setup>
const {data: products } = await useFetch('/api/products', {
  lazy: true,
})
</script>