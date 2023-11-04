<script>
import ServiceProviderProfile from "../components/ServiceProvider/ServiceProviderProfile.vue";
import Services from "../components/ServiceProvider/Services.vue";
import Reviews from "../components/ServiceProvider/Reviews.vue";
import Scheduling from "../components/ServiceProvider/Scheduling.vue";
import Payment from "../components/ServiceProvider/Payment.vue";
import Footer from "../components/Footer.vue";
import Navbar from "@/components/Navbar.vue";


import data from "../firebase/data.json";
// const redirectToStripe = async () => {
// isLoading.value = true;

// const response = await fetch("/api/create-checkout-session", {
//   method: "POST",
// });
// const { url } = await response.json();

// window.location.href = url;
// };
export default {
  data() {
    return {
      serviceId: 0,
      serviceDetails: {},
      name: "",
      username: "",
      profileImage: "",
      serviceImage: [],
      serviceDescription: "",
      calendlyurl: "",
    };
  },
  // computed: {
  //   serviceProviderId() {
  //     // Access the data from route parameters
  //     serviceId = this.$route.params.id
  //     console.log(this.$route.params.id)
  //     return this.$route.params.id;
  //   },
  // },
  async created() {
    // Fetch service details based on the route parameter (serviceId)
    this.serviceId = this.$route.params.id;
    // Fetch service details from your data source (e.g., JSON data)
    // Assign the service details to this.serviceDetails
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
      if (data[i].service.serviceId == this.serviceId) {
        this.serviceDetails = data[i];
        // For service provider profile
        this.name = this.serviceDetails.user.name;
        this.username = this.serviceDetails.user.username;
        this.profileImage = this.serviceDetails.user.profileImage;

        // For about me
        this.serviceImage = this.serviceDetails.service.serviceImage;
        this.serviceDescription =
          this.serviceDetails.service.serviceDescription;

        //For Scheduling
        this.calendlyurl = this.serviceDetails.service.calendlyURL;
        console.log(this.calendlyurl);
      }
    }
  },

  methods: {
    test(serviceId) {
      for (user in data) {
        console.log(user);
      }
    },
  },
  components: {
    Navbar,
    ServiceProviderProfile,
    Services,
    Reviews,
    Scheduling,
    Payment,
    Footer,
  },
};
</script>
<template>
  <!-- <SearchBar/>
  <Categories/>
  <Filter/>
  <SellerContent/>
  <Suggested/>
  <Footer/> -->
  <!-- <button v-on:click="test(serviceId)">
    Test
  </button> -->
  <v-breadcrumbs
    :items="['Home', 'Services', 'ServiceProvider']"
  ></v-breadcrumbs>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <ServiceProviderProfile
          :name="name"
          :username="username"
          :profileImage="profileImage"
        />
        <Services
          :serviceDescription="serviceDescription"
          :serviceImage="serviceImage"
        />
      </v-col>
      <v-col cols="12" md="6">
        <Scheduling :calendlyurl="calendlyurl" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <Reviews />
      </v-col>
      <v-col cols="12" md="6">
        <Payment />
      </v-col>
    </v-row>
  </div>

  <h2></h2>

  <!-- <v-row>
        <v-col>
        <ServiceProviderProfile/>
      </v-col>
      <v-col>
        <Scheduling/>
      </v-col>
      </v-row>
      <v-row>
        <v-col>
        <Services/>
      </v-col>
      <v-col>
        <Payment/>
      </v-col>
      </v-row>
      <Reviews/> -->
</template>

<style scoped>
/* .service-provider-profile {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .profile {
    flex: 1;
  }
  
  .services,
  .reviews,
  .scheduling {
    flex: 1;
    margin-left: 20px; 
  }
   */
.scheduling {
  /* Set a specific width and height for the embedded widget */
  width: 100%;
  /* Adjust this as needed */
  margin: 0 auto; /* Center align the widget horizontally */

  /* You can add more styling as needed to customize the appearance */
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
}
#payment {
  margin-left: 20pxz;
}

*{
  background-color: #EBF2F1;
}

.v-btn_overlay {
  border-radius: 10px;
  background-color: #194759 !important;
  color: #ebf2f1 !important;
  border: none !important;
}


</style>
