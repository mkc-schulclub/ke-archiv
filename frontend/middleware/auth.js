const session = useCookie('session')
const router = useRouter()

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path == '/admin' && !session.value) {
    router.push('/')
    return 
  }
})