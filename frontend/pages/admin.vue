<template>
    <div>
      <h1>Data from API:</h1>
      <ul>
        <li v-for="item in apiData" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData() {
      try {
        // Replace with your API endpoint
        const response = await fetch('https://api.example.com/data');
        const apiData = await response.json();
        
        return { apiData };
      } catch (error) {
        console.error('Error fetching data:', error);
        return { apiData: [] };
      }
    },
  };
  </script>
  
  <style>
  /* Your component's styles here */
  </style>
  