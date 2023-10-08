<template>
	<transition>
		<div>
			<div class="container">
				<h1>
					Liste aller Ausgaben
					<a href="#" class="fas fa-plus gray-plus-icon" style="font-size: medium; text-decoration: none" @click="mode = 'add'"></a>
				</h1>
			</div>
			<div v-for="ausgabe in ausgaben">
				{{ ausgabe.title }}
				<div class="divider"></div>
			</div>
            <button class="btn btn-primary" @click.prevent="fetchAusgaben">Refetch</button>
			<AdminAusgabeAdd v-if="mode == 'add'" @exit="mode = 'view'" />
            <AdminAusgabeEdit v-if="mode == 'edit'" @exit="mode = 'view'" />
		</div>
	</transition>
</template>

<script setup>
	const { ausgaben, fetchAusgaben } = useAusgaben();
	definePageMeta({
		layout: "admin",
	});
	let mode = ref("view");
</script>

<style scoped></style>
