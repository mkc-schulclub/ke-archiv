import { ref, onMounted } from 'vue';

export function useUsers() {
  let users = ref([]);

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
    } catch (error) {
      console.error("Fehler:", error);
    }
  };

  onMounted(() => {
    fetchData();
  });

  return {
    users,
  };
}
