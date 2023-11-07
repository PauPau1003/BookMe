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

      console.log(this.productArray)
const response = await fetch("/api/create-checkout-session", {
  method: "POST",
});
const { url } = await response.json();

window.location.href = url;
}

  },
  props:{
    productArray: Array
  }
};
</script>
<template>
  <v-card class="payment-tab m-4">
    <v-tabs v-model="tab" bg-color="#4F7369">
      <v-tab :value="index" v-for="(product, index) in productArray">
        {{ product.product_name }}
        <span class="price-label">${{ product.pricing }}</span>
      </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item :value="index" v-for="(product, index) in productArray">
          {{ product.product_description }}<br>
          <span class="price">Price: $ {{ product.pricing }}</span>
        </v-window-item>
      </v-window>
    </v-card-text>
    <v-btn @click="redirectToStripe" color="#194759" class="m-3">Pay Now!</v-btn>
  </v-card>
</template>

<style>
.payment-tab {
  margin-top: 63px;
}

.price-label {
  font-weight: bold;
  color: white; /* Change the color to your preference */
  margin-left: 8px;
}

.price {
  font-size: 1.2em; /* Increase font size as needed */
  font-weight: bold;
  color: #333; /* Change the color to your preference */
}
</style>