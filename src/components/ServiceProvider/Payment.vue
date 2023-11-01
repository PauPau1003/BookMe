<script>

// }
export default {
  data() {
    return {
      tab: null,
    };
  },
  methods: {
     async redirectToStripe() {


const response = await fetch("/api/create-checkout-session", {
  method: "POST",
});
const { url } = await response.json();

window.location.href = url;
}

  },
};
</script>
<template>
  <v-card>
    <v-tabs
      v-model="tab"
      bg-color= '#4ABDAC'
    >
      <v-tab value="one">Basic</v-tab>
      <v-tab value="two">Standard</v-tab>
      <v-tab value="three">Premium</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          One
        </v-window-item>

        <v-window-item value="two">
          Two
        </v-window-item>

        <v-window-item value="three">
          Three
        </v-window-item>
      </v-window>
    </v-card-text>
    <v-btn @click="redirectToStripe" color="#FC4A1A" >Pay Now!</v-btn>
  </v-card>
  
 
</template>


