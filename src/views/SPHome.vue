<template>
    <div class="spnavbar">
            <spnavbar />
    </div>
    <div class="container-fluid" style="background-color:#7EBFB3 ;border-radius: 5px;padding-bottom:10px; padding-top:25px;">
        <div class="row">
            <div class="col-md-4 col-12">
                <div class="container-fluid">
                    <!-- profile display take from waihong -->
                    <div class="row mb-5"> 
                      <div class="col-12">
                        <div class="card">
                          <img src="../../src/assets/Img/person_1-min.jpg" class="card-img-top" style="height: 60px;width:60px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                          <h5 class="card-title" style="text-align: center;color:#194759;">{{ data_array.name }}</h5>
                          <p class="card-text" style="text-align: center;color: #7EBFB3;">
                            Customer is #1 Priority!
                          </p>
                            <p style="text-align: center;">
                            {{  }} <small class="text-muted">({{ (data_array.reviews).length }} Reviews)</small>
                          </p>
                          <hr>
                          <p class="card-text">
                            <img src="../../src/assets/Img/location_marker.png" style="height:20px ;width:20px; margin: 5px;"> Location : {{ data_array.location }}<br><br>
                            <img src="../../src/assets/Img/user.png" style="height:20px ;width:20px; margin: 5px;"> Member Since : {{ data_array.creationdate }}<br><br>
                            <img src="../../src/assets/Img/clock.png" style="height:20px ;width:20px; margin: 5px;"> Avg. Response Time : {{ data_array.responsetime }} Hrs.<br><br>
                            <img src="../../src/assets/Img/acquisition.png" style="height:20px ;width:20px; margin: 5px;"> Recent Sale(s) : {{ data_array.recentsales }} Day Ago</p>                              
                            </div>
                          </div>
    
                    </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-12">
                            <div class="card overflow-auto">
                                <div class="card-body">
                                  <h5 class="card-title">Successfully Completed Courses</h5>
                                  <br>
                                  <div v-for="courses in data_array.Courses">
                                  <p class="card-text" style="font-weight: bold;"><img :src='courses.cimg' style="height:30px ;width:30px; margin: 5px; display: inline;">{{ courses.cname }}</p><br>    
                                  </div>
                                </div>
                              </div>
        
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-1">

            </div>
            <div class="col-md-7 col-12">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-12">
                            <p style="font-weight: bold;border: 1px solid rgb(205, 200, 200); border-radius:5px ; padding: 5px;color:white;">{{ data_array.name }}'s Services</p>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-4 col-12 mb-4" v-for="products in data_array.serviceList.productArray">
                            <div class="card">
                                <img :src='products.product_image' class="card-img-top">
                                <div class="card-body">
                                  <h5 class="card-title">{{ products.product_name }}</h5>
                                  <p class="card-text">{{ products.product_description }}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">SGD${{ products.pricing }}</li>
                                </ul>
                              </div>
                        </div>
                        <div>
                        <button type="button" class="btn btn-light" style="color:#194759; text-decoration: underline;">Add Product</button>
                      </div>
                    </div>
                    <div class="row mb-2">
                      <h2 style="color: white;">Customer Reviews</h2>
                      <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active" data-bs-interval="10000">
                           <div class="card-group">
                            <div class="card">
                              <img src="../../src/assets/Img/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                             <div class="card-body">
                             <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                             <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                             <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                        <div class="card">
                          <img src="../../src/assets/Img/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                             <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                             <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                        <div class="card">
                          <img src="../../src/assets/Img/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                             <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                             <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                      </div>
                      
                          </div>
                          <div class="carousel-item">
                      <div class="card-group">
                        <div class="card">
                          <img src="../../src/assets/Img/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                            <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                        <div class="card">
                          <img src="../../src/assets/Img/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                            <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                        <div class="card">
                          <img src="../../src/assets/Img/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                            <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                      </div>
                      
                          </div>
                          <div class="carousel-item">
                        
                      
                      <div class="card-group">
                        <div class="card">
                          <img src="../../src/assets/Img/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                            <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                        <div class="card">
                          <img src="../../src/assets/Img/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                            <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                        <div class="card">
                          <img src="../../src/assets/Img/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                            <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                      </div>
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    
            
            
    
    
</template>
    
<script>

    import { collection, getDocs } from "firebase/firestore"; 
    import db from "../firebase/firebaseconfig" 
    import spnavbar from "../components/spnavbar.vue";
    import { auth } from "../firebase/firebaseconfig.js";

    const querySnapshot = await getDocs(collection(db, "usersForProj")); 

      export default {
        components: {
        spnavbar,
    },
    data(){
      return{
        data_array: {},
        name: '',
        email: null,
      }
    },
    methods:{
      fetchEmail() {
      const user = auth.currentUser; // Get the currently logged-in user

      if (user) {
        // If a user is logged in
        this.email = user.email; // Set the email to the user's email
      } else {
        this.email = null; // If no user is logged in, set email to null
      }
    }
    },
    created(){
      this.fetchEmail();
      querySnapshot.forEach((doc)=>{
        if (doc.data().email == this.email){
          this.data_array = (doc.data())
          console.log(this.data_array)
        }
      })

      },
    }
    
</script>
    
<style>
    
</style>