<template>
    <transition>
      <div>
        <AdminNavbar :pages="pages"/>
  
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



        <div class="container">
    <div v-for="(user, index) in users" :key="index" class="row">
        <div class="col-sm">
            <h3>{{ user.name }}</h3>
            <p>Admin-Status: {{ user.admin }}</p>
            <div class="divider"></div>
        </div>
    </div>
</div>


      </div>

    </transition>
  </template>
  
  <script setup>
  const keyBase = useCookie('key')
  const session = useCookie("session");
  const router = useRouter();
  /* if (!session.value) {
    router.push("/");
  } */
  
  const pages = [
    {
      title: "Dashboard",
    }, {
      title: "Ausgaben",
    }
  ]
  
  const { counter } = useCounter();
  let date;
  function deleteCookies() {
    session.value = null
    keyBase.value = null
  }
  </script>
  

  