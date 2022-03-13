<script setup>
const bio = [
  "Welcome to my space. Here you'll find some of my releases.",
  "I've been on a break for a while now.",
  "Life took an unexpected turn and I had to deal with new challenges, leaving me unable to continue my music journey.",
  "However, I'll be returning to it whenever I can.",
  "There's a pile of unfinished work for me to polish up and release.",
  "Everything is done by myself at the moment.",
  "Hopefully, in the future I'll be able to add more people to the project.",
  "Thanks for your time.",
  "🎵 🎵 🎵",
];
</script>
<template>
  <section class="bg-neutral-900 grid place-items-center text-neutral-100">
    <article class="text-center m-10 lg:w-1/2 w-3/4">
      <p class="text-6xl divide-y">Bio</p>
      <div class="flex justify-center py-5">
        <div class="border-t border-white w-24"></div>
      </div>
      <p v-for="line in bio" class="text-xl my-2">
        {{ line }}
      </p>
    </article>
  </section>
</template>
