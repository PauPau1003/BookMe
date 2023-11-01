<template>
  <!-- Carousel of Images -->
  <div id="imageCarousel" class="carousel slide" data-bs-ride="carousel">
    <section class="captions">
      <h1 data-aos="fade-up" data-aos-duration="3000">
        Easiest way to find your desired services
      </h1>
    </section>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="images/barbers-in-singapore.jpg"
          class="d-block w-100"
          alt="Image 1"
        />
      </div>
      <div class="carousel-item">
        <img
          src="images/photographer.jpg"
          class="d-block w-100"
          alt="Image
          2"
        />
      </div>
      <div class="carousel-item">
        <img src="images/plumber.jpg" class="d-block w-100" alt="Image 3" />
      </div>
      <div class="carousel-item">
        <img src="images/bake.jpg" class="d-block w-100" alt="Image 4" />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#imageCarousel"
      role="button"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#imageCarousel"
      role="button"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
</template>

<style>
.captions {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  font-weight: bolder;
  padding: 10px;
  color: white;
}

#imageCarousel {
  position: relative;
}

#imageCarousel .carousel-inner {
  filter: brightness(60%);
}
</style>

<script>
import AOS from "aos";
import "aos/dist/aos.css"; // You may need to import AOS styles as well

export default {
  name: "FirstImage",
  mounted() {
    AOS.init({
      offset: 100, // Adjust this value as needed
      duration: 1000, // Animation duration in milliseconds
      easing: "ease", // Animation easing function
      once: true, // Whether the animation should only occur once
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
