<script>
export default {
  name: "spfooter",
};
</script>
<template>
  <div class="SPfooter container-fluid">
    <div class=" pt-4 pt-md-5 border-top">
      <div class="row">
        <div class="col-12 col-md mx-5">
          <img
            class="mb-2"
            src="/BookMeLogo-removebg-preview.png"
            alt=""
            width="80"
            height="30"
          />
          <small class="d-block mb-3 text-muted">© 2022-2023</small>
        </div>
        <div class="col-6 col-md">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li class="nav-item">
              <router-link to="/SPHome" class="text-muted">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/SPAboutPage" class="text-muted"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/Dashboard" class="text-muted"
                >Dashboard</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Support</h5>
          <ul class="list-unstyled text-small">
            <li class="nav-item">
              <router-link to="/SPContactPage" class="text-muted"
                >Contact Us</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/LearningAvenue" class="text-muted"
                >Learning Avenue</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/Permits&Requirements" class="text-muted"
                >Permits & Requirements</router-link
              >
            </li>
            <li><a class="text-muted" href="#">Terms and Condition</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.SPfooter{
  background-color: #ebf2f1;
}
</style>