<script setup>
import { links } from "../assets/links";
</script>

<template>
  <footer class="bg-neutral-900 md:pt-32">
    <div class="grid place-items-center">
      <div class="flex flex-row mb-5">
        <div v-for="(link, i) in links">
          <a
            :key="i"
            :href="link.href"
            target="_blank"
            class="mx-3 md:text-4xl sm:text-3xl text-white hover:text-orange-300"
          >
            <i :class="link.icon"></i>
          </a>
        </div>
      </div>
    </div>
    <p class="text-white text-center bg-neutral-800">© 2022 Bakeluco</p>
  </footer>
</template>
