<template>
    <NavbarVue />
    <div class="container">
        <div class="login mb-3 mt-0">
            <div class="row">
                <div class="col">
                    <img src="../assets/image/login.jpg" style="width: 500px;" alt="">
                </div>
                <div class="col" style="margin-top: 50px;">
                    <h2>Login</h2>
                    <p>
                        <span class="create-account-label">Don't have an account?</span> <a
                            href="your_registration_page.html">Create
                            here</a>
                    </p>
                    <form action="#" method="post">
                        <input type="text" class="form-control custom-input" id="username" name="username"
                            placeholder="Username or Email*" required>
                        <input type="password" class="form-control custom-input" id="password" name="password"
                            placeholder="Your password*" required>
                        <label for="remember-me" class="mb-3"><input class="form-check-input">Remember me</label>
                        <a href="forgot_password.html" style="margin-left: 30px;">Forgot Password?</a>

                    </form>
                    <router-link to="/HomeLogin" @click="notifyAndRedirect" class="login-button">Login</router-link>
                    <!-- <button @click="notifyAndRedirect">Login</button> -->

                </div>
            </div>
        </div>
    </div>
    <Futer />
</template>
<script>
import NavbarVue from '../components/Navbar.vue';
import Futer from '../components/Futer.vue';

import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router';

export default {
    name: 'login',
    components: {
        NavbarVue, Futer,
    },
    // components/Sender.js
    methods: {
        notify() {
            // Kirim pesan ke halaman lain
            this.$store.dispatch('showToast', { title: 'User telah login', toastId: 'custom id', position: 'top-right' });
        },
    },
};
</script>

<style scoped>
.login {
    text-align: left;
    /* Align the content to the right */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
}

h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    margin-bottom: 10px;
}

p {
    margin-top: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
}

span.create-account-label {
    font-weight: bold;
    /* Menambahkan tebal pada label */
}

.custom-input {
    padding: 20px 25px;
    width: 400px;
    border-radius: 12px;
    border: 1px solid #dddddd;
    transition: border-color 0.3s;
    margin-bottom: 15px;
}

.custom-input:focus {
    border: 1px solid #E76202;
    box-shadow: none;
}

.custom-input-code {
    padding: 20px 25px;
    width: 200px;
    border-radius: 12px;
    border: 1px solid #dddddd;
    transition: border-color 0.3s;
    margin-bottom: 15px;
}

/* input[type="text"],
input[type="password"] {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 25px 20px;
    text-align: left;
    width: 370px;
    height: 30px;
}

input[type="text"]::placeholder,
input[type="password"]::placeholder {
    text-align: left;
    font-family: 'Roboto', sans-serif;
}

input[type="text"]#code::placeholder {
    text-align: center;
}

input[type="text"]#code {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px 5px;
    text-align: left;
    width: 30%;
    margin-right: 30%;
    /* Menggeser elemen ke kanan 
} */

.custom-code-span {
    border: 1px solid #E76202;
    /* Red border color (#FF0000) */
    border-radius: 4px;
    padding: 12px 50px;
    margin-right: 10%;
    /* Menambahkan margin antara input dan span */
    background: linear-gradient(45deg, #ff5733, #ffdb58, #33ff57, #337aff, #b833ff);
    /* -webkit-background-clip: text; */
    color: transparent;
    text-align: center;
    -webkit-text-fill-color: transparent;
    display: inline-block;
}

.login-button {
    background-color: #E76202;
    /* Set your desired background color for the button */
    border: none;
    color: #fff;
    padding: 10px 40px;
    border-radius: 10px;
    cursor: pointer;
    margin-right: 31px;
    transform: translateY(50px);
}

#remember-me,
a {
    margin-right: 120px;
    text-decoration: none;
    color: #242424;
}
</style>