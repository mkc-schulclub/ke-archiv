import { ref, onMounted } from 'vue';
let users = ref([]);
let hasUsers = ref(false)

export function useUsers() {

  const fetchData = async () => {
    try {
      const session = useCookie('session')
      const response = await fetch("https://frog.lowkey.gay/vyralux/api/v1/user", {
        method: "GET",
        headers: {
          ndcauth: <string>session.value,
        },
      });
      if (!response.ok) return
      const data = await response.json();
      users.value = data;
      hasUsers.value = true
    } catch (error) {
      console.error("Fehler:", error);
    }
  };

  onMounted(() => {
    if (hasUsers.value) return
    fetchData();
  });

  return {
    users,
  };
}
