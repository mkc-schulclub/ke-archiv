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
				<div class="parent row text-center">
					<p class="col-lg">{{ ausgabe.title }}</p>
					<a href="#" class="fas fa-pencil-alt hidden-child text-decoration-none" @click="edit(ausgabe)"></a>
					<div class="divider"></div>
				</div>
			</div>
			<button class="btn btn-primary" @click.prevent="fetchAusgaben">Refetch</button>
			<AdminAusgabeAdd v-if="mode == 'add'" @exit="mode = 'view'" />
			<AdminAusgabeEdit v-if="mode == 'edit'" @exit="mode = 'view'" :ausgabe="editTarget"/>
		</div>
	</transition>
</template>

<script setup>
	const { ausgaben, fetchAusgaben } = useAusgaben();
	definePageMeta({
		layout: "admin",
	});
	let mode = ref("view");

	const editTarget = ref({});
    function edit(target) {
        editTarget.value = target
        mode.value = 'edit'
    }
</script>

<style scoped>
    .parent:hover {
        background-color: var(--secondary);
    }
	.parent .hidden-child {
		visibility: hidden;
	}

	.parent:hover .hidden-child {
		visibility: visible;
	}
</style>
