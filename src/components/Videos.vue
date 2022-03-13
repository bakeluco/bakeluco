<script setup>
import { videos } from "../assets/links";
</script>
<template>
  <!-- VIDEOS -->
  <section class="p-5 bg-neutral-900">
    <div
      class="bg-local text-white"
      style="
        background-image: url(https://f4.bcbits.com/img/a0923095039_10.jpg);
      "
    ></div>
    <header class="sm:my-32">
      <p class="text-6xl divide-y text-gray-200 text-center">Videos</p>
      <div class="flex justify-center py-5">
        <div class="border-t border-white w-24"></div>
      </div>
    </header>
    <main class="grid 2xl:grid-cols-4 xl:grid-cols-2 grid-cols-1 gap-4">
      <div
        v-for="(video, i) in videos"
        class="grid place-items-center p-2 rounded-lg bg-black"
      >
        <iframe
          :key="i"
          :src="video"
          class="rounded shadow w-full lg:w-3/4 my-5 aspect-video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </main>
  </section>
</template>
