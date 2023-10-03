<template>
  <div class="popup-container">
    <div class="popup card p-5">
      <a class="icon"
        ><span class="close-button" @click="popping">&times;</span></a
      >
      <form @submit.prevent="login">
        <div class="row">
          <span>Username</span>
          <input type="text" v-model="input.username" />
          <span>Passwort</span>
          <input
            type="password"
            autocomplete="current-password"
            v-model="input.password"
          />
          <p v-if="errorMsg" class="text-danger">{{ errorMsg }}</p>
        </div>
        <button class="btn btn-primary mt-4" type="submit">
          Anmelden
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import CryptoJS from "crypto-js";
const router = useRouter();

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
const errorMsg = ref("");
function login() {
  if (!(input.username && input.password)) {
    return (errorMsg.value = "Username oder Passwort fehlen");
  }
  if (!keyBase.value) {
    fetch("https://frog.lowkey.gay/vyralux/api/v1/key", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        keyBase.value = CryptoJS.SHA256(data["keyBase"]).toString(
          CryptoJS.enc.Hex
        );
      })
      .then(() => {
        const data = JSON.stringify({
          name: input.username,
          password: input.password,
        });
        fetch("https://frog.lowkey.gay/vyralux/api/v1/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            hjtrfs: CryptoJS.HmacSHA256(data, keyBase.value).toString(
              CryptoJS.enc.Hex
            ),
          },
          body: data,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === 400) {
              return (errorMsg.value = "Login fehlgeschlagen");
            }
            const { sid } = data;
            if (sid) {
              session.value = sid;
              router.push("/admin");
            } else {
              console.error("No session token generated");
              errorMsg.value = "Login fehlgeschlagen. Bitte erneut versuchen.";
            }
          })
          .catch((error) => {
            this.errorMessage = "Login fehlgeschlagen!";
            console.error("Error fetching data:", error);
          });
      })
      .catch((error) => {
        errorMsg.value = "Login fehlgeschlagen!";
        console.error("Error fetching data:", error);
      });
  }
}
</script>

<script>
export default {
  methods: {
    popping() {
      this.$emit("popup");
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
</style>
