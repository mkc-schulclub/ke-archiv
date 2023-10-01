<template>
  <transition name="page" mode="out-in">
    <div id="content">
      Route: {{ $route.params.ausgabe }}

      <h1>{{ ausgabe.title }}</h1>
      <p>{{ ausgabe.date }}</p>
      <p>{{ ausgabe.description }}</p>

      <div class="container">
        <div class="row">
          <div class="col-sm card mt-1" v-for="(top, index) in Object.entries(ausgabe.tops)" :key="index">
            <h3>{{ top[0] }}</h3>
            <p>{{ top[1] }}</p>
          </div>
        </div>
      </div>

      <div>
        <NuxtLink to="/" class="btn btn-primary">Zurück</NuxtLink>
      </div>
    </div>
  </transition>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

const { id } = useID()
const { ausgaben } = useAusgaben()

const ausgabe = computed(() => ausgaben.value.find(ausgabe => id(ausgabe.title) === id(route.params.ausgabe)) || []);
</script>

<style scoped>
#content {
  background-color: black;
  color: whitesmoke !important;
  height: 100vh;
}
</style>
