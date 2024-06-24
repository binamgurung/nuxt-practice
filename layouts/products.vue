<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Nuxt</NuxtLink>
      </nav>
    </header>
  </div>
  <div>
    <slot />
  </div>
  <footer>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/products">Product</NuxtLink></li>
    </ul>
  </footer>
</template>
<style>
.router-link-active,
.router-link-exact-active {
  color: #43b883;
}
</style>
