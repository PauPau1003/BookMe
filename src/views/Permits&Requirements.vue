<template>
    <div class="spnavbar">
            <spnavbar />
    </div>
    
            
    <h1 class="ps-5 pt-5" style="color:#194759">Guide to Permits & Licensing in Singapore</h1>
 <p class="ps-5" style="color:#4F7369">You may refer to the following links at your own leisure to finish setting up your business!</p>
    <br>

 <div class="container">
  <div class="row" v-for="websites in data_array.permits">
   <div class="col-12 mb-5" style="text-align: center; border: solid #194759 2px; border-radius: 5px;">
    <a :href='websites.url' target="_blank" style="text-decoration:underline;font-size:x-large;color:#4F7369">{{ websites.name }}</a><br><br>
    <p>
     {{ websites.description }}
    </p>
            </div>
  </div>
 </div>
    
    
    
    
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseconfig";
import spnavbar from "../components/spnavbar.vue";
import spfooter from "../components/spfooter.vue";
import { auth } from "../firebase/firebaseconfig.js";

const querySnapshot = await getDocs(collection(db, "usersForProj"));

export default {
  components: {
    spnavbar,
    spfooter,
  },
  data() {
    return {
      data_array: {},
      name: "",
      email: null,
    };
  },
  methods: {
    fetchEmail() {
      const user = auth.currentUser; // Get the currently logged-in user

      if (user) {
        // If a user is logged in
        this.email = user.email; // Set the email to the user's email
      } else {
        this.email = null; // If no user is logged in, set email to null
      }
    },
  },
  created() {
    this.fetchEmail();
    querySnapshot.forEach((doc) => {
      if (doc.data().email == this.email) {
        this.data_array = doc.data();
        console.log(this.data_array);
      }
    });
  },
};
</script>

<style></style>
