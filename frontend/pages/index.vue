<template>
  <transition name="page" mode="out-in">
    <div id="content">

      <Navbar />

      <Header/>
      
      <Scrolls/>

      <Ausgaben v-if="error === false"/>
      <Error v-else/>
      
      <Footer/>
    </div>
  </transition>
</template>

<script setup>
const { error } = useAusgaben()
</script>