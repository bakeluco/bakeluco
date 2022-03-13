<script setup>
import { links } from "../assets/links";
</script>

<template>
  <section
    class="grid place-items-center h-screen bg-gradient-to-b from-neutral-400 to-neutral-900"
  >
    <main class="grid place-items-center">
      <img
        src="../assets/bakeluco_logo.png"
        alt="Bakeluco Logo"
        class="w-2/3 lg:w-3/4 xl:mb-20 md:mb-15 sm:mb-10 mb-5"
      />
      <div class="flex flex-row mb-6">
        <div v-for="(link, i) in links">
          <a
            :key="i"
            :href="link.href"
            target="_blank"
            class="mx-3 xl:text-8xl lg:text-6xl md:text-4xl sm:text-3xl text-neutral-900 hover:text-orange-300"
          >
            <i :class="link.icon"></i>
          </a>
        </div>
      </div>
    </main>
  </section>
</template>
