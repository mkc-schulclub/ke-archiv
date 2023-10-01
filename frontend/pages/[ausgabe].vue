<template>
  <transition name="page" mode="out-in">
    <div>
      <div id="content">
      <div class="container text-center">
        <img src="../assets/example.jpg" alt="Image" class="img-fluid"/>
        <h1>{{ ausgabe.title }}</h1>
        <p>{{ date(ausgabe.date) }}</p>
        <p>{{ ausgabe.description }}</p>
        <p>Ansehen: {{ ausgabe.url }}</p>
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
    </div>
  </div>
  </transition>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

const { id } = useID()
const { date } = useDate()
const { ausgaben } = useAusgaben()
const ausgabe = computed(() => ausgaben.value.find(ausgabe => id(ausgabe.title) === id(route.params.ausgabe)) || []);
//const next = computed(() => ausgaben[0].title || "/")
</script>

<style scoped>
#content {
  color: whitesmoke !important;
  height: 100vh;
}
.card {
  color: var(--text);
  background-color: var(--accent);
}
</style>
