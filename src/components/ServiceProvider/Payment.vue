<script>

// }
export default {
  data() {
    return {
      tab: null,
      productArray: [],
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
  <v-card class="payment-tab">
    <v-tabs
      v-model="tab"
      bg-color= '#4F7369'
    >
    
      <v-tab value="one" >Basic</v-tab>
      <v-tab value="two">Standard</v-tab>
      <v-tab value="three">Premium</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          $5
        </v-window-item>

        <v-window-item value="two">
          $10
        </v-window-item>

        <v-window-item value="three">
          $20
        </v-window-item>
      </v-window>
    </v-card-text>
    <v-btn @click="redirectToStripe" color="#194759 " >Pay Now!</v-btn>
  </v-card>
</template>

<style>
.payment-tab{
  margin-top: 63px;
}

</style>


