<template>
    <transition name="page" mode="out-in">
    <div id="content">
        ausgabe: {{ $route.params.ausgabe }} <br>
        <h1>{{ currentPaper.title }}</h1>
        {{ currentPaper.description }} <br>
        <div>
            <NuxtLink to="/">Zurück</NuxtLink>
        </div>
    </div>
    
    </transition>
</template>

<script setup>
    const router = useRouter()
    const route = useRoute()
    const { newspapers } = useUtils()
    let currentPaper = null
    currentPaper = newspapers.find(newspaper => newspaper.title === route.params.ausgabe);
    if (!currentPaper) {
        currentPaper = {}
        router.push("/")
    }
</script>

<style scoped>
    #content {
        background-color: white;
        color: black !important;
        height: 100vh;
    }
</style>