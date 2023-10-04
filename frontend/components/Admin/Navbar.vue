<template>
    <nav class="navbar navbar-expand-lg">
        <router-link @click="true" class="navbar-brand ml-4" to="/"
          >MKC Merch-Store</router-link
        >
        <div class="container-fluid">
          <ul id="navcontent" class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-for="(page, index) in pages" :key="index" class="nav-item">
              <a
                class="nav-link mx-0"
                :class="{ active: activePage === index }"
                @click.prevent="setPage(index)"
              >
                {{ page.title }}
              </a>
            </li>
            <router-link
              v-if="$route.name === 'Login'"
              class="nav-link"
              :title="`Zu Home`"
              to="/"
            >
              Zurück zu Home
            </router-link>
          </ul>
        </div>
      </nav>
</template>

<script setup>
const props = defineProps({
  pages: Array,
});
</script>

<style scoped>
.nav, nav a {
    color: white !important;
}
</style>