<template>
    <div id="showcase" class="section-showcase">
        <div class="container">
          <div class="col-md-12 text-center">
            <h1 class="fw-bold">Zeitungsarchiv</h1>
          </div>
        </div>

        <div
          v-for="(ausgabe, index) in newspapers"
          :key="index"
          class="container"
        >
          <div class="row">
            <div class="divider"></div>
            <div class="col-md-6" :class="{ 'order-md-2': index % 2 === 0 }">
              <NuxtLink :to="`/${id(ausgabe.title)}`">
                <img src="../assets/example.jpg" alt="Image" class="zoomer" />
              </NuxtLink>
            </div>
            <div
              class="col-md-6 mt-3"
              :class="{ 'order-md-1': index % 2 === 0 }"
            >
              <p class="text-small text-warning">{{ date(ausgabe.date) }}</p>
              <h1 class="fw-bold">{{ ausgabe.title }}</h1>
              <h4 class="fw-bold text-secondary">{{ ausgabe.releaseDate }}</h4>
              <p class="text-normal">{{ ausgabe.description }}</p>
              <NuxtLink :to="`/${id(ausgabe.title)}`" class="btn btn-primary">Ansehen</NuxtLink>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import { useAusgaben } from "~/composables/useAusgaben";

const { id } = useID();
const { date } = useDate();
const { ausgaben } = useAusgaben();

let newspapers = ausgaben;
</script>

<style scoped>
.zoomer {
    scale: 0.8;
    transition: transform 0.3s ease !important;
  }
  .zoomer:hover {
    transform: scale(1.2) !important;
  }
</style>