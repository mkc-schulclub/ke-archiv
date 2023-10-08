<template>
	<div class="popup-container">
		<div class="popup card p-5">
			<a class="icon"><span class="close-button" @click="popping">&times;</span></a>

			<form @submit.prevent="editAusgabe" v-if="ausgabe.tops">
				<h3>Neue Ausgabe hinzufügen</h3>

				<div class="row">
					<input type="text" placeholder="Titel" v-model="ausgabe.title" />
					<input type="text" placeholder="Beschreibung" v-model="ausgabe.description" />
					<input type="date" placeholder="Titel" v-model="datum" />

					<span>Featured Artikel:</span>
					<div v-for="(top, index) in ausgabe.tops" :key="index">
						<input type="text" placeholder="Artikel" v-model="top.title" />
						<p>
							<input type="text" placeholder="Author" v-model="top.author" />
							<span>
								<i
									class="fas fa-plus gray-plus-icon mx-1"
									v-if="index == ausgabe.tops.length - 1 && ausgabe.tops.length < 3"
									@click="ausgabe.tops.push({ title: '', author: '' })">
								</i>
								<i
									class="fas fa-minus gray-minus-icon mx-1"
									v-if="index == ausgabe.tops.length - 1 && ausgabe.tops.length > 1"
									@click="ausgabe.tops.splice(index, 1)">
								</i>
							</span>
						</p>
					</div>
					<span>PDF der Ausgabe:</span>
					<input type="file" ref="fileInput" accept=".pdf" />

					<span>Bild von Front- und Backcover:</span>
					<input type="file" ref="fileInput" accept="image/*" />

					<p v-if="errorMsg" class="text-danger">{{ errorMsg }}</p>
					<p v-if="statusMsg && dev" class="text-primary">{{ statusMsg }}</p>
				</div>
				<button class="btn btn-primary mt-4" type="submit">Hinzufügen</button>
			</form>
		</div>
	</div>
</template>

<script setup>
	import CryptoJS from "crypto-js";

	const props = defineProps({
		ausgabe: Object,
	});

	const datum = ref("");

	watchEffect(() => {
		if (props.ausgabe && props.ausgabe.date) {
			datum.value = props.ausgabe.date.split("T")[0];
		}
	});

	const keyBase = useCookie("key", {
		maxAge: 43200,
		secure: true,
		sameSite: "lax",
	});
	const session = useCookie("session", {
		maxAge: 43200,
		secure: true,
		sameSite: "lax",
	});

	const input = {};
	let dev = false;
	const errorMsg = ref("");
	const statusMsg = ref("");

	function editAusgabe() {
		props.ausgabe.date = datum.value;
		return console.log(props.ausgabe);
		const data = JSON.stringify(props.ausgabe);
		fetch("https://frog.lowkey.gay/vyralux/api/v1/items", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				hjtrfs: CryptoJS.HmacSHA256(data, keyBase.value).toString(CryptoJS.enc.Hex),
				ndcauth: session.value,
			},
			body: data,
		})
			.then((response) => {})
			.then(() => {})
			.catch((error) => {});
	}
</script>

<script>
	export default {
		methods: {
			popping() {
				this.$emit("exit");
			},
		},
	};
</script>

<style scoped>
	.popup-container {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		backdrop-filter: blur(5px);
		z-index: 9999;
	}

	.popup {
		background-color: white;
		padding: 20px;
		position: relative;
	}

	.close-button {
		position: absolute;
		top: 10px;
		right: 35px;
		font-size: xx-large;
		cursor: pointer;
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 30px;
		height: 30px;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		size: 1%;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #2196f3;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
