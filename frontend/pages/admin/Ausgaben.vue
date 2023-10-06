<template>
    <transition>
        <div>
            <div class="container">
                <h1>Liste aller Ausgaben 
                    <a href="#" class="fas fa-plus gray-plus-icon" style="font-size: medium; text-decoration: none;" @click="mode = 'add'"></a>
                </h1>
    </div>
            <div v-for="ausgabe in ausgaben">
                {{ ausgabe.title }}
                <div class="divider"></div>
            </div>
            <AdminAdd v-if="mode == 'add'" @exit="mode = 'view'"/>
        </div>
    </transition>
</template>

<script setup>
const { ausgaben } = useAusgaben()
definePageMeta({
    layout: "admin",
});
let mode = ref("view")
</script>

<style scoped>

</style>