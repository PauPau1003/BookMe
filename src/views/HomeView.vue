<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div id="nav" v-if="$store.state.user">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/service-provider">Service Provider</router-link>|
    <router-link to="/service-selection">Service Selection</router-link>|
    <button @click="$store.dispatch('logout')">Logout</button>|
  </div>
  <main>
    <TheWelcome />
  </main>
  <div>
    <!-- Payment Success Modal -->
    <v-dialog v-model="paymentSuccessDialog" max-width="400">
      <v-card>
        <v-card-title class="headline success-color">
          Payment Successful
        </v-card-title>
        <v-card-text>
          Thank you for your payment. Your transaction was successful.
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" text @click="closePaymentSuccessDialog">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Payment Unsuccessful Modal -->
    <v-dialog v-model="paymentUnsuccessfulDialog" max-width="400">
      <v-card>
        <v-card-title class="headline error-color">
          Payment Unsuccessful
        </v-card-title>
        <v-card-text>
          Sorry, we couldn't process your payment. Please try again later.
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" text @click="closePaymentUnsuccessfulDialog">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
