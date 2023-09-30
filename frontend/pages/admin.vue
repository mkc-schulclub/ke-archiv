<template>
  <transition>
  <div>
    <div>
        Counter: {{ counter }}
        <div>
            <button @click="counter++">++</button>
            <button @click="counter--">--</button>
        </div>
    </div>
    <nuxt-link to="/">zurück</nuxt-link>
  </div>
</transition>
</template>

<script setup>
    const { counter } = useCounter()
</script>