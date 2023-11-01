
<template>
  <div class="Navbar">
      <Navbar />
  </div>

  <div class="Categories">
      <Categories />
  </div>

  <div class="Suggested">
      <Suggested />
  </div>

  <div class="Filter">
      <Filter />
  </div>

  <div class="SellerContent">
      <SellerContent />
  </div>

  <div class="Footer">
      <Footer />
  </div>
</template>

  <script>
    import Categories from '../components/Searchpage/Categories.vue';
    import Filter from '../components/Searchpage/Filter.vue';
    import Footer from '../components/Footer.vue';
    import Navbar from '../components/navbar.vue';
    import SellerContent from '../components/Searchpage/SellerContent.vue';
    import Suggested from '../components/Searchpage/Suggested.vue';
  
  
  export default {
      components: {
          Categories,
          Filter,
          Footer,
          Navbar,
          SellerContent,
          Suggested
     
  },
    };
  </script>