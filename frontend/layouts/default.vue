<template>
    <div>
        <nav>
            <div class="top-nav">
                <a href="#showcase">Link 1</a>
                <a href="#contact">Link 2</a>
                <a class="icon"><i class="fas fa-pencil-alt" @click="popping"></i></a>
            </div>
        </nav>

        <slot></slot>

        <footer class="text-white text-center p-2">
        <a href="https://github.com/probablyjassin" class="link-light"
          ><i class="fab fa-github"></i
        ></a>
        <nuxt-link to="/admin">test</nuxt-link>
        <a href="#"><p class="text-info">Das ist der Footer</p></a>
        <Counter />
      </footer>

        <HomeLogin v-if="isPopped == true" @popup="popupClose"/>
    </div>
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