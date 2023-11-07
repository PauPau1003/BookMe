<template>
  <div class="Navbar">
    <Navbar />
  </div>

  <div class="FirstImage">
    <FirstImage />
  </div>

  <div class="Cardscarousel">
    <Cardscarousel />
  </div>

  <div class="Featurespage">
    <Featurespage />
  </div>

  <div class="MoreFeatures">
    <MoreFeatures />
  </div>

  <div class="Cilentsreviews">
    <Cilentsreviews />
  </div>

  <div class="Footer">
    <Footer />
  </div>
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

<script>
import Cardscarousel from "@/components/Home/Cardscarousel.vue";
import Cilentsreviews from "@/components/Home/Cilentsreviews.vue";
import Featurespage from "@/components/Home/Featurespage.vue";
import FirstImage from "@/components/Home/FirstImage.vue";
import Footer from "@/components/Footer.vue";
import MoreFeatures from "@/components/Home/MoreFeatures.vue";
import Navbar from "@/components/Navbar.vue";

import "../assets/icomoon/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  data() {
    return {
      paymentSuccessDialog: false,
      paymentUnsuccessfulDialog: false,
    };
  },
  components: {
    Navbar,
    FirstImage,
    Cardscarousel,
    Featurespage,
    MoreFeatures,
    Cilentsreviews,
    Footer,
  },
  
  mounted() {
    AOS.init({
      //   offset: 100, // Adjust this value as needed
      //   duration: 1000, // Animation duration in milliseconds
      easing: "ease", // Animation easing function
      // once: true, // Whether the animation should only occur once
    });
  },
  methods: {
    updateContentDynamically() {
      AOS.refresh();
    },
    showPaymentSuccessModal() {
      this.paymentSuccessDialog = true;
    },
    closePaymentSuccessDialog() {
      this.paymentSuccessDialog = false;
    },
    showPaymentUnsuccessfulModal() {
      this.paymentUnsuccessfulDialog = true;
    },
    closePaymentUnsuccessfulDialog() {
      this.paymentUnsuccessfulDialog = false;
    },
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  background-color: white;
}

.btn {
  border-radius: 10px;
  background-color: #194759 !important;
  color: #ebf2f1 !important;
  border: none !important;
}

.card {
  justify-content: center;
  width: fit-content;
}

.features,
.reviewsection {
  background-color: #ebf2f1;
  padding: 5px;
}
.person-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.person-wrap img {
  width: 100px; /* Adjust the width as needed */
  height: 100px; /* Adjust the height as needed */
  border-radius: 50%;
  text-align: center;
}

/*reviews*/

.person-contents h2 {
  text-align: center;
  text-decoration: none;
  justify-content: center;
}

.meta {
  color: grey;
  display: flex;
  justify-content: center;
}
</style>
