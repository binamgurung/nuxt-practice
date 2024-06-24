<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Nuxt</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Product</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </div>
  <div>
    <slot />
  </div>
</template>
<style>
.router-link-active,
.router-link-exact-active {
  color: #43b883;
}
</style>
