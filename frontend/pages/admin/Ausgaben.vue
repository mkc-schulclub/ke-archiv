<template>
    <transition>
        <div>
            <div v-for="ausgabe in ausgaben">
                {{ ausgabe.title }}
                <div class="divider"></div>
            </div>
        </div>
    </transition>
</template>

<script setup>
const { ausgaben } = useAusgaben()
definePageMeta({
    layout: "admin",
});
</script>