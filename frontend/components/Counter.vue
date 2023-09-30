<template>
    <div>
      Counter: {{ counter }}
      <div>
        <button @click="plus">++</button>
        <button @click="minus">--</button>
      </div>
    </div>
  </template>
  
<script setup>  
  const { counter, plus, minus } = useCounter();
</script>
  