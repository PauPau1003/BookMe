<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-title">
                    <img src="/BookMeLogo-removebg-preview.png" alt="Logo" style="height: 100px;">
                </div>

                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form>
                            <ul class="nav nav-tabs justify-content-center nav-pills nav-fill" id="loginRegisterTabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" :class="{ 'bg-success': loginTabActive }" id="login-tab" @click="activateLoginTab" data-bs-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" :class="{ 'bg-success': registerTabActive }" id="register-tab" @click="activateRegisterTab" data-bs-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                            </li>
                            </ul>

                            <div class="tab-content mt-3" id="loginRegisterTabContent">
                                <!-- Login Tab Content -->
                                <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                <!-- Login Form -->
                                <form class="login" @submit.prevent="login">
                                    <div class="mb-3">  
                                    <label for="loginEmail" class="form-label">Email address</label>
                                    <input required v-model="login_form.email" type="email" class="form-control" id="loginEmail" placeholder="Enter email">
                                    </div>
                                    <div class="mb-3">
                                    <label for="loginPassword" class="form-label">Password</label>
                                    <input required v-model="login_form.password" type="password" class="form-control" id="loginPassword" placeholder="Password">
                                    </div>
                                    <button type="submit" value="login" class="btn btn-outline-success">Login</button>
                                </form>
                                </div>
                            </div>

                            <!-- Register Tab Content -->
                            <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                            <!-- Registration Form -->
                            <form class="register" @submit.prevent="register">
                                <div class="mb-3">
                                <label for="registerEmail" class="form-label">Email address</label>
                                <input required type="email" v-model="register_form.email" class="form-control" id="registerEmail" placeholder="Enter email">
                                </div>
                                <div class="mb-3">
                                <label for="registerPassword" class="form-label">Password</label>
                                <input required v-model="register_form.password" type="password" class="form-control" id="registerPassword" placeholder="Password">
                                </div>
                                <button type="submit" value="login" class="btn btn-outline-success">Register</button>
                            </form>
                            </div>

                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
        </div>
    </div>


  </template>
  
  <script>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const login_form = ref({});
      const register_form = ref({});
      const store = useStore();
      const registerTabActive = ref(false);
  
      const login = () => {
        store.dispatch('login', login_form.value);
      };
  
      const register = () => {
        store.dispatch('register', register_form.value);
      };
  
      const activateRegisterTab = () => {
        registerTabActive.value = true;
      };
  
      return {
        login_form,
        register_form,
        login,
        register,
        registerTabActive
      };
    }
  };
  </script>


<style>

body {
    background: #7EBFB3;
}

.login-box {
    margin-top: 75px;
    height: auto;
    background: white;
    text-align: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.login-key {
    height: 100px;
    font-size: 80px;
    line-height: 100px;
    background: -webkit-linear-gradient(#27EF9F, #0DB8DE);
}

.login-title {
    margin-top: 15px;
    text-align: center;
    font-size: 30px;
    letter-spacing: 2px;
    margin-top: 15px;
    font-weight: bold;
    color: #ECF0F5;
}

.login-form {
    margin-top: 25px;
    text-align: left;
}

input[type=email] {
    background-color: white;
    border: none;
    border-bottom: 2px solid #0DB8DE;
    border-top: 0px;
    outline: 0;
    padding-left: 10px;
    margin-bottom: 20px;
    color: black;
}

input[type=password] {
    background-color: white;
    border: none;
    border-bottom: 2px solid #0DB8DE;
    border-top: 0px;
    outline: 0;
    padding-left: 10px;
    margin-bottom: 20px;
    color: black;
}

.form-group {
    margin-bottom: 40px;
    outline: 0px;
}

input:focus {
    outline: none;
    box-shadow: 0 0 0;
}

label {
    margin-bottom: 0px;
}

.form-label {
    font-size: 10px;
    color: #6C6C6C;
    font-weight: bold;
    letter-spacing: 1px;
}

.btn-outline-primary {
    border-color: #0DB8DE;
    color: #0DB8DE;
    border-radius: 0px;
    font-weight: bold;
    letter-spacing: 1px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.btn-outline-primary:hover {
    background-color: #0DB8DE;
    right: 0px;
}

.login-btm {
    float: left;
}

.login-button {
    padding-right: 0px;
    text-align: right;
    margin-bottom: 25px;
}

.login-text {
    text-align: left;
    padding-left: 0px;
    color: #A2A4A4;
}

.loginbttm {
    padding: 0px;
}

</style>
  