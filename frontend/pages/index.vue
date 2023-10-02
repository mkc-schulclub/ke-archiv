<template>
  <transition name="page" mode="out-in">
    <div id="content">

      <Navbar />

      <Header/>
      
      <Scrolls/>

      <Ausgaben v-if="error === false"/>
      <FetchError v-else/>
      
      <Footer/>
    </div>
  </transition>
</template>

<script setup>
const { ausgaben, error } = useAusgaben()
</script>