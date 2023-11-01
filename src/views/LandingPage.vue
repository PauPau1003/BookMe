<template>
<div class="navbar">
    <navbar />
</div>

<div class="section">
    <Section />
</div>

<div class="carouselsection">
    <Carouselsection />
</div>

<div class="cardsection">
    <Cardsection />
</div>

<div class="newfooter">
    <Newfooter />
</div>
      
</template>
<script>
import Cardsection from "../components/LandingPage/cardsection.vue";
import Carouselsection from "../components/LandingPage/carouselsection.vue";
import Section from "../components/LandingPage/section.vue";
import navbar from "../components/LandingPage/navbar.vue";
import Newfooter from "../components/LandingPage/newfooter.vue";
  
  export default {
    components: {
    navbar,
    Section,
    Carouselsection,
    Cardsection,
    Newfooter
},
  };
</script>
 