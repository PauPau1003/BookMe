<template>
<div class="spnavbar">
		<spnavbar />
</div>

		<div class="container-fluid" style="background-color:#7EBFB3 ;border-radius: 5px;padding-bottom:10px;">
			<div class="row mb-4">
				<div class="col-md-6 col-12">
					<h2 class="font-weight-bold heading mt-5" style="color: white">Your Executive Dashboard</h2>
				</div>
				</div>
				<div class="row mb-3 mx-2">
					<div class="col-md-3 col-12 mx-md-3 mb-3" data-aos="fade-up" data-aos-delay="300" style="height:80%;border: 2px solid white; border-radius:5px;background-color: white; ">
						<p><small class="text-muted">Auto date range</small><br><img src="../../src/assets/Img/calendar.png" style="width:20px ; height:20px;"> This Month</p>
					</div>
					<div class="col-md-2 col-12 mx-md-3 mb-3" data-aos="fade-up" data-aos-delay="300" style="height:90%;border: 2px solid white; border-radius:5px;background-color: white; ">
						<p><small class="text-muted">Products</small><br>All</p>
					</div>
					<div class="col-md-2 col-12 mx-md-3 mb-3" data-aos="fade-up" data-aos-delay="300" style="height:90%;border: 2px solid white; border-radius:5px;background-color: white; ">
						<p><small class="text-muted">Posts</small><br>All</p>
					</div>
				</div>
				<div class="row mb-3 mx-2">
					<div class="col-md-3 col-5 mx-md-3 mx-3 mb-3"  data-aos="fade-up" data-aos-delay="300" style="border: 2px solid white; border-radius:5px;background-color: white; ">
						<h3 class="mb-3">New Sales</h3>
						<div style="text-align: center;">
						<h1>230</h1>
						<h2 style="color:green; font-weight:200;">25%</h2>
						<p style="font-weight:100;">vs previous month</p>
						</div>
					</div>
					<div class="col-md-3 col-5 mx-md-2 mx-3 mb-3"  data-aos="fade-up" data-aos-delay="500" style="border: 2px solid white; border-radius:5px;background-color: white; ">
							<h3 class="mb-3">Business Growth Rate</h3>
							<div style="text-align: center;">
								<h1>17.23%</h1>
								<h2 style="color:green; font-weight:200;">25%</h2>
								<p style="font-weight:100;">vs previous month</p>
								</div>
					</div>
					<div class="col-md-3 col-5 mx-md-2 mx-3 mb-3"  data-aos="fade-up" data-aos-delay="400" style="border: 2px solid white; border-radius:5px;background-color: white; ">
							<h3 class="mb-3">MRR</h3>
							<div style="text-align: center;">
								<h1>$4,596</h1>
								<h2 style="color:green; font-weight:200;">7.8%</h2>
								<p style="font-weight:100;">vs previous month</p>
								</div>
					</div>
					<div class="col-md-2 col-5 mx-md-2 mx-3 mb-3"  data-aos="fade-up" data-aos-delay="600" style="border: 2px solid white; border-radius:5px;background-color: white; ">
							<h3 class="mb-3">Webpage Views</h3>
							<div id="myDiv"></div>

					</div>	
				</div>
				<div class="row mb-3 mx-2">
					<div class="col-md-6 col-12 mx-md-3 mb-3"  data-aos="fade-up" data-aos-delay="400" style="border: 2px solid white; border-radius:5px;background-color: white; ">
						<div>
						<h3 class="mb-3">Business Progress</h3>
						<div id="myBarChart"></div>
						</div>
					</div>
					<div class="col-md-5 col-12 mx-md-2 mb-3"  data-aos="fade-up" data-aos-delay="400" style="border: 2px solid white; border-radius:5px;background-color: white; ">
						<div>
						<h3 class="mb-3">MRR</h3>
						<div id="myLineChart"></div>
					</div>
					</div>
				</div>
			</div>


</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css"; // You may need to import AOS styles as well

import spnavbar from "../components/spnavbar.vue";
import { collection, getDocs } from "firebase/firestore"; 
import db from "../firebase/firebaseconfig" 
import { auth } from "../firebase/firebaseconfig.js";
import * as Plotly from 'plotly.js-dist-min';

  
  export default {
    components: {
    spnavbar,
},data(){
      return{
        data_array: {},
        name: '',
        email: null,
		pieChart: null,
		barChart: null,
		lineChart:null,
      }},
mounted() {
    AOS.init({
      offset: 100, // Adjust this value as needed
      duration: 1000, // Animation duration in milliseconds
      easing: "ease", // Animation easing function
      once: true, // Whether the animation should only occur once
    });
	this.fetchEmail();
	this.fetchData();
	this.createBarChart();
	this.createLineChart();
  },
  methods: {
    updateContentDynamically() {
      // Add new elements to the DOM dynamically
      // Call AOS.refresh() to detect and apply animations to the new elements
      AOS.refresh();
    },
	fetchEmail() {
      const user = auth.currentUser; // Get the currently logged-in user

      if (user) {
        // If a user is logged in
        this.email = user.email; // Set the email to the user's email
      } else {
        this.email = null; // If no user is logged in, set email to null
      }
    },
	updatePieChart() {
    const data = [{
      values: this.dynamicData,
      labels: this.dynamicLabels,
      type: 'pie',
    }];

    const layout = {
      height: 150,
      width: 150,
	  margin: {"t": 0, "b": 0, "l": 0, "r": 0},
  	  showlegend: false
    };

    if (this.pieChart === null) {
      this.pieChart = Plotly.newPlot('myDiv', data, layout);
    } else {
      Plotly.update('myDiv', data, layout);
    }
  },
  createLineChart() {
	this.lineData = {
        x: this.linex,
        y: this.liney,
        type: 'scatter',
      };
	
      Plotly.newPlot('myLineChart', [this.lineData]);
    },
  createBarChart() {
      this.barData = {
        x: this.barchartx,
        y: this.barcharty,
        type: 'bar',
      };

      const layout = {
        title: 'Product Sales',
        xaxis: {
          title: 'Products',
        },
        yaxis: {
          title: 'Sales',
        },
      };

      this.barChart = Plotly.newPlot('myBarChart', [this.barData], layout);
    },



  async fetchData() {
      const querySnapshot = await getDocs(collection(db, "usersForProj"));

      querySnapshot.forEach((doc) => {
        if (doc.data().email == this.email) {
          this.data_array = doc.data();
          console.log(this.data_array);
          this.dynamicData = [
            this.data_array.webpage.referral,
            this.data_array.webpage.direct,
            this.data_array.webpage.organic
          ];
          this.dynamicLabels = ['Referral', 'Direct', 'OrganicSearch'];
		  this.updatePieChart();
		  const productArray = this.data_array.serviceList.productArray;
		  this.barchartx = productArray.map((product) => product.product_name)
		  this.barcharty = productArray.map((product) => product.pricing);
		  this.createBarChart();
		  const mrrData = this.data_array.mrr;

      // Create an intermediate object to associate dates with numbers
    	  const mrrEntries = Object.entries(mrrData);

      // Sort the entries by date
      	  mrrEntries.sort((a, b) => new Date(a[0]) - new Date(b[0]));

      // Separate the sorted "x" and "y" values
      	  this.linex = mrrEntries.map((entry) => entry[0]); // Dates
      	  this.liney = mrrEntries.map((entry) => entry[1]); // Numbers
		  this.createLineChart();

        }
      });
    },
  },
  created() {
    // Leave this hook empty or use it for synchronous setup if needed
  },
};

</script>

<style>

</style>