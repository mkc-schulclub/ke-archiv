<template>
  <transition>
    <div>
      <a @click="deleteCookies()">Logout</a>
      <div>
        Counter: {{ counter }}
        <div>
          <button @click="counter++">++</button>
          <button @click="counter--">--</button>
        </div>
      </div>
      <nuxt-link to="/">Zurück</nuxt-link>
      <input type="date" name="date" id="date" v-model="date" />
      <button @click="console.log(date)"></button>
    </div>
  </transition>
</template>

<script setup>
const keyBase = useCookie('key')
const session = useCookie("session");
const router = useRouter();
if (!session.value) {
  router.push("/");
}
const { counter } = useCounter();
let date;
/* definePageMeta({
  middleware: "auth",
}); */
function deleteCookies() {
  session.value = null
  keyBase.value = null
}
</script>
