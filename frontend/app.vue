<template>
  <title>Ausgaben-Archiv - MKC-Schulclub</title>
  <link href="https://fonts.cdnfonts.com/css/youtube-sans" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">

  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  
</template>
<script setup>

</script>

<style>
@import './assets/main.css';
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: rotate(0deg);
}
</style>