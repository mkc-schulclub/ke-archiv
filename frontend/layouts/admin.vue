<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <router-link class="navbar-brand ml-4" to="/">MKC Schulclub</router-link>
      <div class="container-fluid">
        <ul id="navcontent" class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="(page, index) in pages" :key="index" class="nav-item">
            <nuxt-link :to="`/${page.url}`" class="nav-link mx-0" :class="{ active: currentPage === page.title }" >
                {{ page.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <slot />
  </div>
</template>

<script setup>
const route = useRoute()
const currentPage = computed(() => {
  return route.name.lastIndexOf("-") !== -1 ? route.name.substring(route.name.lastIndexOf("-") + 1) : "Dashboard"
})
const pages = [
  {
    title: "Dashboard",
    url: "admin",
  }, 
  {
    title: "Ausgaben",
    url: `admin/Ausgaben`,
  },
  {
    title: "Users",
    url: `admin/Users`,
  },
]
</script>

<style scoped>
nav,
nav a {
  color: whitesmoke;
  background-color: var(--secondary);
}

@media (max-width: 1000px) {
  #navcontent {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /*overflow-x: auto;*/
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  #navcontent .nav-item {
    white-space: nowrap;
    /*margin: 0 3vh;*/
    margin-left: 0;
    margin-right: 1em;
  }

  .navbar-brand {
    margin-left: 4vh;
  }
}

.navbar-brand {
  margin-left: 30px;
}
.nav-link {
  color: var(--accent);
}
.active {
  color: white !important;
  text-decoration: underline;
}
</style>