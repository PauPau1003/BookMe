
<script>
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase/firebaseconfig"

const querySnapshot = await getDocs(collection(db, "usersForProj"));

export default{
  data(){
    return{
      services: []
    }
  },
created(){
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  this.services.push(doc.data())
  console.log(this.services)
});
}
}

</script>

<template>
   <div class="container-fluid">
        <div class="content m-3">
            <h1 class="m-3">New to buying in BookMe?</h1>
            <p class="m-3">Discover sellers with a great track record at guiding new buyers.</p>

<div class="section" style="background-color:#7EBFB3">
            <div class="container">
              <div class="row">
                <div class="col-6 col-lg-4 col-sm-12 expand-on-hover"  data-aos="fade-up" data-aos-delay="300" v-for="service in services">
                  <div class="box-feature mb-4">
                    <img src="/hero_bg_1.jpg" alt="" width="350" height="300">
                    <span class="flaticon-house mb-4 d-block"></span>
                    <!-- <img src="person_1-min.jpg" alt="Image" class="img-fluid rounded-circle w-25 mb-4"> -->
                    <p style="color:black; font-size: 20px;">{{ service.name }}</p>
                    <h3 class="text-black mb-3 fw-normal">{{service.serviceList.serviceDescription}}</h3>
                    <p class="text-black">From SGD${{ service.serviceList.productArray[0].pricing }}</p>
                    <p><a href="#" class="learn-more">Read more</a></p>
                  </div>
                </div>
                <!-- <div class="col-6 col-lg-4 col-sm-12"  data-aos="fade-up" data-aos-delay="300">
                  <div class="box-feature mb-4">
                    <img src="/hero_bg_2.jpg" alt="" width="350" height="300">
                    <span class="flaticon-house mb-4 d-block"></span>
                    <p style="color:black; font-size: 20px;">Mike Jones</p>
                    <h3 class="text-black mb-3 fw-normal">I will design 2 awesome business minimalist logo design in 24 hours</h3>
                    <p class="text-black">From SGD 22</p>
                    <p><a href="#" class="learn-more">Read more</a></p>
                  </div>
                </div>
                <div class="col-6 col-lg-4 col-sm-12"  data-aos="fade-up" data-aos-delay="300">
                  <div class="box-feature mb-4">
                    <img src="/hero_bg_3.jpg" alt="" width="350" height="300">
                    <span class="flaticon-house mb-4 d-block"></span>
                    <p style="color:black; font-size: 20px;">Mike Jones</p>
                    <h3 class="text-black mb-3 fw-normal">I will design 2 awesome business minimalist logo design in 24 hours</h3>
                    <p class="text-black">From SGD 22</p>
                    <p><a href="#" class="learn-more">Read more</a></p>
                  </div>
                </div> -->
                
                </div>
              </div>

</div>
          </div>
        </div>



</template>

<style scoped>
.expand-on-hover {
  transition: transform 0.2s ease; /* Add a smooth transition effect */
}

.expand-on-hover:hover {
  transform: scale(1.05); /* Scale the element slightly when hovered */
}
</style>