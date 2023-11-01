

<template>
  
  <router-view/>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/service-provider">Service Provider</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <nav class="site-nav">
            
            <div class="menu-bg-wrap">
                <div class="site-navigation">
                    <a href="index.html" class="logo m-0 float-start">BookMe</a>

                    <ul class="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="properties.html">Explore</a></li>
                        <li><a href="personalsettings.html">My Profile</a></li>
                        <li><a>Log In</a></li>
                        <li><a>Register</a></li>
                    </ul>

                    <a href="#" class="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none" data-toggle="collapse" data-target="#main-navbar">
                        <span></span>
                    </a>

                </div>
            </div>
        
    </nav> -->
</template>
<script >
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>

<style>
</style>
