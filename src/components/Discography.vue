<script setup>
import { albums } from "../assets/links";
</script>

<template>
  <section class="p-5 bg-neutral-900">
    <header class="sm:my-32">
      <p class="text-6xl divide-y text-gray-200 text-center">Releases</p>
      <div class="flex justify-center py-5">
        <div class="border-t border-white w-24"></div>
      </div>
    </header>

    <main
      class="flex flex-col sm:grid 2xl:grid-cols-3 lg:grid-cols-2 sm:justify-items-center text-xl text-neutral-200"
    >
      <article
        v-for="(album, i) in albums"
        :key="i"
        class="bg-black rounded-lg p-5 m-5 flex flex-col sm:flex-row overflow-hidden sm:h-60 max-w-lg"
      >
        <!-- xl:w-3/6 lg:w-4/6 md:w-5/6 -->
        <img
          :src="album.cover"
          class="rounded shadow-lg sm:mr-10 mb-5 sm:mb-0"
        />
        <div class="grid place-items-center">
          <p class="mb-6">{{ album.title }}</p>
          <div class="flex flex-row mb-6 flex justify-center">
            <div v-for="(link, idx) in album.links">
              <a
                :key="idx"
                :href="link.href"
                target="_blank"
                class="mx-3 hover:text-orange-300"
              >
                <i :class="link.icon"></i>
              </a>
            </div>
          </div>
          <iframe
            :src="album.iframe"
            width="280"
            height="80"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
            class="rounded w-full"
          ></iframe>
        </div>
      </article>
    </main>
  </section>
</template>
