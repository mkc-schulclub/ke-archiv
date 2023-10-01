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
    <input type="date" name="date" id="date" v-model="date">
    <button @click="console.log(date)"></button>
  </div>
</transition>
</template>

<script setup>
    const { counter } = useCounter()
    let date;
</script>