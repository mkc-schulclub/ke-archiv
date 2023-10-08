<template>
    <transition>
        <div>
            <div class="container">
				<h1>
					Liste aller Ausgaben
					<a href="#" class="fas fa-plus gray-plus-icon" style="font-size: medium; text-decoration: none" @click="mode = 'add'"></a>
				</h1>
			</div>
            <div v-for="(user, index) in users" :key="index" class="row">
                <div class="col-sm">
                    <h3>{{ user.name }}</h3>
                    <p>Admin-Status: {{ user.admin }}</p>
                    <div class="divider"></div>
                </div>
            </div>
        </div>
    </transition>
</template>
  
<script setup>
const { users } = useUsers()
definePageMeta({
    layout: "admin",
});
</script>