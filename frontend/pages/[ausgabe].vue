<template>
  <transition name="page" mode="out-in">
    <div class="flex-grow">
      <title>{{ ausgabe.title || "Nicht gefunden" }}</title>
      <div id="content" v-if="ausgabe.tops">
      <div class="container text-center">
        <nuxt-link :to="`${ausgabe.url}`">
          <img src="../assets/example.jpg" alt="Image" class="img-fluid"/>
        </nuxt-link> <br>
        <nuxt-link :to="ausgabe.url" class="btn btn-primary mt-2">Ansehen</nuxt-link>
        <h1>{{ ausgabe.title }}</h1>
        <p>{{ date(ausgabe.date) }}</p>
        <p>{{ ausgabe.description }}</p>
      </div>

      <div class="container">
        <div class="row">
          <div v-if="ausgabe.tops" class="col-sm card mt-1 mx-1" v-for="(top, index) in Object.entries(ausgabe.tops)" :key="index">
            <h3>{{ top[0] }}</h3>
            <p>{{ top[1] }}</p>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center text-center mx-auto d-block mt-2" v-if="ausgabe.tops">
            <nuxt-link v-if="ausgaben[ausgaben.indexOf(ausgabe)+1]" :to="id(ausgaben[ausgaben.indexOf(ausgabe)+1].title)" class="btn btn-primary">Weiter</nuxt-link>
            <nuxt-link v-else :to="id(ausgaben[0].title)" class="btn btn-primary">Weiter</nuxt-link>
            <NuxtLink to="/" class="btn btn-primary">Zurück zur Startseite</NuxtLink>
      </div>
      <footer class="mt-2 text-center">
        <p>Hmmge</p>
      </footer>
    </div>
    <div v-else-if="ausgaben.length && !ausgabe.tops">
      <h3>Diese Ausgabe konnte nicht gefunden werden</h3>
      <NuxtLink to="/" class="btn btn-primary mx-auto">Zurück zur Startseite</NuxtLink>
    </div>
    <div v-else>
      <LoadDots/>
      <NuxtLink to="/" class="btn btn-primary mx-auto">Zurück zur Startseite</NuxtLink>
    </div>
  </div>
  </transition>
</template>

<script setup>
const route = useRoute();

const { id } = useID()
const { date } = useDate()
const { ausgaben } = useAusgaben()
const ausgabe = computed(() => ausgaben.value.find(ausgabe => id(ausgabe.title) === route.params.ausgabe) || []);
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
#content {
  color: whitesmoke !important;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.card {
  color: var(--text);
  background-color: var(--accent);
}
</style>
