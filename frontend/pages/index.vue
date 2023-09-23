<template>
  <div class="top-nav">
    <a href="#showcase">hier kann ein Link hin</a>
    <a href="#contact">sogar zwei oder mehr</a>
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

    <div v-for="(ausgabe, index) in newspapers">
      <div class="container">
        <div v-if="index % 2 == 0">
          <div class="row">
            <div class="col-md-6 mt-3">
              <p class="text-small text-warning">{{ ausgabe.title }}</p>
              <h1 class="fw-bold">{{ ausgabe.topic }}</h1>
              <h4 class="fw-bold text-secondary">{{ ausgabe.releaseDate }}</h4>
              <p class="text-normal">
                {{ ausgabe.description }}
              </p>
              <NuxtLink :to="`/${ausgabe.title}`">balls</NuxtLink>
            </div>
            <div class="col-md-6">
              <NuxtLink :to="`/${ausgabe.title}`">
              <img src="../assets/example.jpg" alt="Image 1" />
            </NuxtLink>
            </div>
          </div>
        </div>

        <div v-else>
          <div class="row">
            <div class="col-md-6">
              <NuxtLink :to="`/${ausgabe.title}`">
              <img src="../assets/example.jpg" alt="Image 1" />
            </NuxtLink>
            </div>
            
            <div class="col-md-6 mt-3">
              <p class="text-small text-warning">{{ ausgabe.title }}</p>
              <h1 class="fw-bold">{{ ausgabe.topic }}</h1>
              <h4 class="fw-bold text-secondary">{{ ausgabe.releaseDate }}</h4>
              <p class="text-normal">
                {{ ausgabe.description }}
              </p>
              <NuxtLink :to="`/${ausgabe.title}`">balls</NuxtLink>
            </div>
          </div>
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
  const { newspapers } = useUtils();
</script>

<style>
  @import "bootstrap/dist/css/bootstrap.css";
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
  @import "../assets/main.css";
</style>
