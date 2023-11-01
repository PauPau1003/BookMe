<!-- ServiceSelectionView.vue -->
<template>
    <div>
      <!-- List of services -->
      <div v-for="(service, index) in services" :key="index">
        <button @click="redirectToServiceProvider(service.serviceId)">Select Service</button>
      </div>
    </div>
  </template>
  
  <script>
import data from "../../firebase/data.json"; // Import your JSON data
  export default {
    data() {
      return {
        services: [], // List of services
      };
    },
    created() {
    // Populate the services array with data from the JSON file
    
    for (let i = 0; i < data.length;i++){
      console.log(data[i].service.serviceId)
      this.services.push(data[i].service) 
      console.log(this.services[i])
    }
     // Assuming your JSON structure has a "services" array
    
  },
    methods: {
      // selectService(service) {
      //   console.log(service)
      //   this.$emit("service-selected", service);
      // },
      redirectToServiceProvider(serviceId) {
        console.log(serviceId)
      this.$router.push(`/service-provider/${serviceId}`);
    },
    // selectServiceProvider(serviceProviderData) {
    //   // Navigate to the service provider page and pass the data as a route parameter
    //   console.log(serviceProviderData)
    //   this.$router.push({ name: 'service-provider', params: { serviceProviderData } });
    // },
    },
    
  };
  </script>
  