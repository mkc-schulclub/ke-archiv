import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export function useAusgaben() {
  let ausgaben = ref([]);
  const router = useRouter()
  
  const fetchData = async () => {
    let tries = 0;
    try {
      const response = await fetch('https://frog.lowkey.gay/quaxly/api/v1/issues');
      const data = await response.json();
      ausgaben.value = data;
    } catch (error) {
      console.error('Error fetching ausgaben:', error);
      if (tries < 3 ) {
        tries++        
        console.info(`retrying to fetch... ${tries}/3`)
        fetchData()
      }
      else {
        router.replace("/500")
      }
    }
  };

  onMounted(() => {
    fetchData();
  });
  
  return {
    ausgaben,
  };
}
