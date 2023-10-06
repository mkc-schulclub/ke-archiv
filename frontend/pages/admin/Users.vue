<template>
    <transition>
        <div>
            <h1>Liste aller Nutzer</h1>
            <div class="container">
                <div v-for="(user, index) in users" :key="index" class="row">
                    <div class="col-sm">
                        <h3>{{ user.name }}</h3>
                        <p>Admin-Status: {{ user.admin }}</p>
                        <div class="divider"></div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
  
<script setup>
definePageMeta({
    layout: "admin",
});
const { users } = useUsers()
</script>