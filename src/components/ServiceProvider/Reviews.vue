<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="ps-5">
        <!-- Write a Review Section -->
        <h2 >Write a Review</h2>
        <v-textarea v-model="newReview" label="Write your review" rows="4"></v-textarea>
        <v-btn @click="addReview" color="#194759">Submit</v-btn>
      </v-col>
      
      <v-col cols="12" class="ps-5">
        <!-- Existing Reviews Section -->
        <h2 class="existing-reviews-header">Reviews</h2>
        <v-card class="existing-reviews-card align-middle" v-for="(review, index) in reviews" :key="index+1">
          <v-card-title class="pt-0 pb-3">
            {{ review.reviewerName}}
            <v-rating half-increments readonly :length="5" :size="30" :model-value="review.rating" color="warning" active-color="warning"/>
          </v-card-title>
          <v-card-text>
            <div class="review-text">{{ review.review}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      newReview: '',
      newRating: 0,
    };
  },
  methods: {
    addReview() {
      // if (this.newReview.trim() !== '' && this.newRating > 0) {
      //   this.reviews.unshift({
      //     author: 'Hardcoded User',
      //     date: new Date().toLocaleDateString(),
      //     text: this.newReview,
      //     rating: this.newRating,
      //   });
      //   this.newReview = '';
      //   this.newRating = 0;
      // }
      console.log(this.reviews)
    },
  },
  props:{
    reviews: Array
  },
};
</script>

<style scoped>
.existing-reviews-header {
  font-size: 20px;
  margin-bottom: 10px;
}

.review-date {
  font-style: italic;
  color: #777;
}

.review-text {
  margin-top: 10px;
}

.existing-reviews-card {
  margin-bottom: 20px;
  
}

</style>