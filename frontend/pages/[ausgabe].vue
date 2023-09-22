<template>
    <div>
        ausgabe: {{ $route.params.ausgabe }}
    </div>
    {{ currentPaper.title }}
    {{ currentPaper.description }}
</template>

<script setup>
const route = useRoute()
const { newspapers } = useUtils()
let currentPaper = newspapers.find(newspaper => newspaper.title === route.params.ausgabe);
</script>

<style scoped>
body {
    background-color: aqua;
    color: greenyellow !important;
}
</style>