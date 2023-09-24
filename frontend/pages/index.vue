<template>
  <div class="top-nav">
    <a href="#showcase">Link 1</a>
    <a href="#contact">Link 2</a>
  </div>

  <div class="header">
    <div class="card">
      <div class="card-body">
        <h1 id="name">Max-Klinger-Schulclub</h1>
        <h4 class="text-secondary">wow</h4>
        <div class="social-links">
          <a href="https://github.com/probablyjassin">
            <i class="fab fa-github" style="color: black"></i>
          </a>
        </div>
      </div>
    </div>

    <a id="scroll-down-btn" href="#showcase" class="scroll-down-btn">
      <i class="fas fa-chevron-down"></i>
    </a>
    <a id="scroll-up-btn" href="#" class="scroll-up-btn">
      <i class="fas fa-chevron-up"></i>
    </a>
  </div>

  <!-- <div class="about-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2 id="about" class="fw-bold">heading</h2>
              <p>
                info lorem ipsum 
              </p>
            </div>
            <div class="col-md-6">
              <div class="custom-left-indent">
                <p><i class="fas fa-calendar"></i> 17</p>
                <p>
                  <i class="fas fa-icons"></i> zeug
                </p>
                <p><i class="fas fa-map-marker-alt"></i> ort</p>
                <a href=".#" class="btn btn-danger">download button</a>
              </div>
            </div>
          </div>
        </div>
      </div> -->

  <div id="showcase" class="section-showcase">
    <div class="container">
      <div class="col-md-12 text-center">
        <h1 class="fw-bold">Zeitungsarchiv</h1>
      </div>
    </div>

    <div v-for="(ausgabe, index) in newspapers" :key="index" class="container">
      <div class="row">
        <div class="col-md-6" :class="{'order-md-2': index % 2 === 0}">
          <NuxtLink :to="`/${ausgabe.title}`">
            <img src="../assets/example.jpg" alt="Image" class="zoomer" />
          </NuxtLink>
        </div>
        <div class="col-md-6 mt-3" :class="{'order-md-1': index % 2 === 0}">
          <p class="text-small text-warning">{{ ausgabe.title }}</p>
          <h1 class="fw-bold">{{ ausgabe.topic }}</h1>
          <h4 class="fw-bold text-secondary">{{ ausgabe.releaseDate }}</h4>
          <p class="text-normal">{{ ausgabe.description }}</p>
          <NuxtLink :to="`/${ausgabe.title}`">Ansehen</NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="about-section">
        <div class="container">
          <div class="row">
            <h1 id="contact" class="fw-bold">andere section</h1>
            <div class="col-md-6 mt-3">
              <a href="#" class="text-info"
                ><i class="fas fa-envelope"></i> hmm</a
              >
            </div>
            <div class="col-md-6 mt-3">
            
            </div>
          </div>
        </div>
      </div> -->

  <footer class="bg-dark text-white text-center p-2">
    der schulclub
    <a href="https://github.com/probablyjassin" class="link-light"
      ><i class="fab fa-github"></i
    ></a>
    <a href="#"><p class="text-info">Das ist der Footer</p></a>
  </footer>
</template>

<script setup>
import { useAusgaben } from '~/composables/useAusgaben';

const { ausgaben } = useAusgaben();

let newspapers = ausgaben
  

</script>

<style>
  @import "../assets/main.css";

  .zoomer {
    scale: 0.8;
    transition: transform 0.3s ease !important;
  }
  .zoomer:hover {
    transform: scale(1.2) !important;
  }
</style>
