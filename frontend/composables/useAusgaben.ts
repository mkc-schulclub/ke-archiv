// useAusgaben.js
import { ref, onMounted } from 'vue';

export function useAusgaben() {
  let ausgaben = ref([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://script.aouani.de/api/ausgaben');
      const data = await response.json();
      ausgaben.value = data.response;
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
