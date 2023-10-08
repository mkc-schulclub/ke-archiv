import { ref, onMounted } from 'vue';

let hasAusgaben = ref(false)
let ausgaben = ref([]);
let error = ref(false)
let tries = 0;

export function useAusgaben() {
  
  const fetchAusgaben = async () => {
    try {
      const response = await fetch('https://frog.lowkey.gay/quaxly/api/v1/issues');
      const data = await response.json();
      ausgaben.value = data;
      hasAusgaben.value = true
      console.log("uhuh", hasAusgaben.value)
    } catch (error) {
      console.error('Error fetching ausgaben:', error);
      if (tries < 3 ) {
        tries++        
        console.info(`retrying to fetch... ${tries}/3`)
        fetchAusgaben()
      }
      else {
        error = true
      }
    }
  };

  onMounted(() => {
    console.log(hasAusgaben.value)
    if (hasAusgaben.value) return
    fetchAusgaben();
  });
  
  return {
    fetchAusgaben,
    ausgaben,
    error,
  };
}
