<script>
export default{
 name: 'Suggested'
}


</script>

<template>  
  <div class="suggested">
      <nav class="navbar bg-body-tertiary">
        <form class="container-fluid justify-content-center my-6 d-flex flex-wrap">
            <!-- <span class="m-3 fw-bold">Suggested</span> -->
          <button class="m-1 btn btn-sm btn-outline-secondary btn-block col-lg-2 col-xxl-1" type="button" @click="filterKeyword = 'Phone Service'">Phone Service</button>
          <button class="m-1 btn btn-sm btn-outline-secondary btn-block col-md-2 col-xxl-1" type="button" @click="filterKeyword = 'Personal Chef'">Chef</button>
          <button class="m-1 btn btn-sm btn-outline-secondary btn-block col-md-2 col-xxl-1" type="button" @click="filterKeyword = 'Shoe Cleaner'">Shoe Cleaner</button>
          <button class="m-1 btn btn-sm btn-outline-secondary btn-block col-md-2 col-xxl-1" type="button" @click="filterKeyword = 'Watch Repair'">Watch Repair</button>
          <button class="m-1 btn btn-sm btn-outline-secondary btn-block col-md-2 col-xxl-1" type="button" @click="filterKeyword = 'Aircon Cleaner'">Aircon Cleaner</button>
          <button class="m-1 btn btn-sm btn-outline-secondary btn-block col-md-2 col-xxl-1" type="button" @click="filterKeyword = 'Makeup Artist'">Makeup Artist</button>
          <button class="m-1 btn btn-sm btn-outline-secondary btn-block col-md-2 col-xxl-1" type="button" @click="filterKeyword = 'Baker'">Baker</button>
          <button class="m-1 btn btn-sm btn-outline-secondary btn-block col-md-2 col-xxl-1" type="button" @click="filterKeyword = 'Tutoring'">Tutor</button>
          <button class="m-1 btn btn-sm btn-outline-secondary btn-block col-md-2 col-xxl-1" type="button" @click="filterKeyword = 'Photography'">Photography</button>
        </form>
      </nav>
    </div>

    <!-- <script src="filter.js"></script> -->
    
</template>

<style>
.btn {
  color: white;
}
</style>