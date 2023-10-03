const session = useCookie('session')

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path == '/admin' && !session.value) {
    console.log("You're not logged in, redirecting")
    return navigateTo('/')
  }
})