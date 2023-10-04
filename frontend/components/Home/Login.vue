<template>
  <div class="popup-container">
    <div class="popup card p-5">
      <a class="icon"
        ><span class="close-button" @click="popping">&times;</span></a
      >
      <form @submit.prevent="login(input.username, input.password)">
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
          <p v-if="statusMsg && dev" class="text-primary">{{ statusMsg }}</p>
        </div>
          <button class="btn btn-primary mt-4" type="submit">Anmelden</button>
      </form>
      <div class="row justify-content-end me-0">
        <label class="switch col-1">
          <input type="checkbox" v-model="dev">
          <span class="slider round"></span>
        </label>
      </div>
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
let dev = false;
const errorMsg = ref("");
const statusMsg = ref("");

async function login(username, password) {
  if (!(username && password)) {
    return (errorMsg.value = "Username oder Passwort fehlen");
  }
  if (!keyBase.value) {
    getKeyBase()
  }
  else {
    getSession(input.username, input.password)
  }
  function getKeyBase() {
    statusMsg.value = "getting key"
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
        statusMsg.value = "key saved"
      })
      .then(() => {getSession(input.username, input.password)})
      .catch((error) => {
        errorMsg.value = "Login fehlgeschlagen!";
        statusMsg.value = "error while getting key"
        console.error("Error fetching data:", error);
      });
  }
  function getSession(username, password) {
    const data = JSON.stringify({
      name: username,
      password: password,
    });
    statusMsg.value = "getting session"
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
          return (
            errorMsg.value = "Login fehlgeschlagen",
            statusMsg.value = "400 response"
          );
        }
        const { sid } = data;
        if (sid) {
          statusMsg.value = "sucess"
          session.value = sid;
          router.push("/admin");
        } else {
          console.error("No session token generated");
          statusMsg.value = "error while using session token"
          errorMsg.value = "Login fehlgeschlagen. Bitte erneut versuchen.";
        }
      })
      .catch((error) => {
        errorMsg.value = "Login fehlgeschlagen!";
        statusMsg.value = "error while getting session token"
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
  -webkit-transition: .4s;
  transition: .4s;
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
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
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
