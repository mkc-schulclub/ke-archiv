<template>
  <transition name="page" mode="out-in">
    <div id="content">
      <HomeNavbar/>
      <HomeHeader/>
      <HomeAusgaben v-if="error === false"/>
      <HomeFetchError v-else/>
    </div>
  </transition>
</template>

<script setup>
const { error } = useAusgaben()
</script>