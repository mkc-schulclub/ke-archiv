<template>
    <div>
        <div v-for="ausgabe in ausgaben">
            {{ ausgabe.title }}
            <div class="divider"></div>
        </div>
    </div>
</template>

<script setup>
const { ausgaben } = useAusgaben()
definePageMeta({
    layout: "admin",
});
</script>