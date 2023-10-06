<template>
  <transition>
    <div>
    <h2>Anzahl von Nutzern: {{ users.length }}</h2>
    <h2>Anzahl von Ausgaben: {{ ausgaben.length }}</h2>
  </div>  
  </transition>
</template>

  <script setup>
  const { ausgaben } = useAusgaben()
  const { users } = useUsers()
  definePageMeta({
    layout: "admin",
  });
  </script>