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
import Cardsection from "../components/cardsection.vue";
import Carouselsection from "../components/carouselsection.vue";
import Section from "../components/section.vue";
import navbar from "../components/navbar.vue";
import Newfooter from "../components/newfooter.vue";
  
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
 