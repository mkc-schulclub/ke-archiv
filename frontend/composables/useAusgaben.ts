import { ref, onMounted } from 'vue';

export function useAusgaben() {
  let ausgaben = ref([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://frog.lowkey.gay/quaxly/api/v1/issues');
      const data = await response.json();
      ausgaben.value = data;
    } catch (error) {
      console.error('Error fetching ausgaben:', error);
    }
  };

  onMounted(() => {
    fetchData();
  });
  
  return {
    ausgaben,
  };
}
