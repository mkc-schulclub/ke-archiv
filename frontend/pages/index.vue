<template>
  <transition name="page" mode="out-in">
    <div id="content">
      <Navbar @popup="tryLogin"/>
      <Header/>
      <Scrolls/>
      <Ausgaben v-if="error === false"/>
      <FetchError v-else/>
      <Footer/>
      <Login v-if="isPopped == true" @popup="togglePopup"/>
    </div>
  </transition>
</template>

<script setup>
const router = useRouter()
const session = useCookie('session')

const { error } = useAusgaben()
const isPopped = ref(false);

const togglePopup = () => {
  isPopped.value = !isPopped.value;
};

const tryLogin = () => {
  if (session.value) {
    router.push("/admin")
  }
  else {
    togglePopup()
  }
}
</script>