<template>
    <nav>
            <div class="top-nav">
                <a href="#showcase">Link 1</a>
                <a href="#contact">Link 2</a>
                <a class="icon"><i class="fas fa-pencil-alt" @click="popping"></i></a>
            </div>
        </nav>
        <HomeLogin v-if="isPopped == true" @popup="popupClose"/>
</template>

<script setup>
const router = useRouter()
const session = useCookie('session')

const { error } = useAusgaben()
const isPopped = ref(false);

const popping = () => {
  if (session.value) {
    router.push("/admin")
  }
  else {
    popupOpen()
  }
};

const popupOpen = () => {
  isPopped.value = true
};
const popupClose = () => {
  isPopped.value = false
};
</script>