<template>
    <div class="Navbar">
        <Navbar />
    </div>

    <!-- <div class="Categories">
        <Categories />
    </div> -->

    <div class="Suggested">
        <Suggested />
    </div>

    <!-- <div class="Filter">
        <Filter />
    </div> -->

    <div class="SellerContent">
        <SellerContent />
    </div>

    <div class="Footer">
        <Footer />
    </div>
    <!-- <Navbar/>
    <Categories/>
    <Suggested/>
    <Filter/>
    <SellerContent/>
    <Footer/> -->
</template>

    <script>
      import Categories from '../components/SearchPage/categories.vue';
    //   import Filter from '../components/Searchpage/filter.vue';
      import Footer from '../components/Searchpage/footer.vue';
      import Navbar from '../components/Searchpage/navbar.vue';
      import SellerContent from '../components/SearchPage/sellercontent.vue';
      import Suggested from '../components/SearchPage/suggested.vue';
    
    
    export default {
        components: {
            Categories,
            // Filter,
            Footer,
            Navbar,
            SellerContent,
            Suggested
       
    },
      };
    </script>