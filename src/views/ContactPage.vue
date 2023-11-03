<template>
  <div class="Navbar">
    <Navbar />
  </div>

  <div class="ContactElement">
    <ContactElement />
  </div>

  <div class="ContactForm">
    <ContactForm/>
  </div>

  <div class="Footer">
    <Footer />
  </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue";
import ContactElement from "../components/ContactPage/ContactElement.vue";
import ContactForm from  "../components/ContactPage/ContactForm.vue"
import Footer from "@/components/footer.vue";

import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/icomoon/style.css";


export default {
  components: {
    Navbar,
    ContactElement,
    ContactForm,
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
      // Add new elements to the DOM dynamically
      // Call AOS.refresh() to detect and apply animations to the new elements
      AOS.refresh();
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

.icon:hover {
  color: gray;
}
</style>
