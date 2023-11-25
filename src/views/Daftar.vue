<script setup>
import NavbarVue from '../components/Navbar.vue';
import Futer from '../components/Futer.vue'
</script>
<template>
    <NavbarVue />
    <div class="container">
        <div class="row">
            <div class="col"></div>
            <div class="col-4 mt-5">
                <h1>Create an Account</h1>
                <p>Already have an account? <span><strong>Login</strong></span></p>
                <form>
                    <div class="mb-3">
                        <input type="text" class="form-control custom-input" placeholder="Username">
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control custom-input" placeholder="Email">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control custom-input" placeholder="Password">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control custom-input" placeholder="Confirm Password">
                    </div>
                    <div class="mb-3">
                        <button type="button" class="btn-custom">Register</button>
                    </div>
                </form>
            </div>
            <div class="col-3 medsos">
                <a href="" class="facebook mb-1 d-flex align-items-center"><i
                        class="fa-brands fa-facebook ms-3 me-3"></i>Facebook</a>
                <a href="" class="google mb-1 d-flex align-items-center"><i
                        class="fa-brands fa-google ms-3 me-3"></i>Google</a>
                <a href="" class="apple mb-1 d-flex align-items-center"><i
                        class="fa-brands fa-apple ms-3 me-3"></i>Apple</a>
            </div>
            <div class="col"></div>
        </div>
    </div>
    <Futer />
</template>

<style scoped>
span {
    color: #E76202;
}

a {
    text-decoration: none;
    color: #E76202;
}


.codes {
    margin-left: 60px;
    background-color: #E3CABC;
}

.custom-input-6 {
    padding: 20px 25px;
    width: 200px;
    border-radius: 12px;
    border: 1px solid #dddddd;
    transition: border-color 0.3s;
}

.custom-input-6:focus {
    border: 1px solid #E76202;
    box-shadow: none;
}

.custom-input {
    padding: 20px 25px;
    width: 400px;
    border-radius: 12px;
    border: 1px solid #dddddd;
    transition: border-color 0.3s;
}

.custom-input:focus {
    border: 1px solid #E76202;
    box-shadow: none;
}

.code {
    width: 400px;
}

.btn-custom {
    background-color: #E76202;
    padding: 20px 30px;
    width: 250px;
    color: #fff;
    border-radius: 12px;
    border: none;
    font-size: 20px;
    transition: box-shadow 0.3s;
}

.btn-custom:hover {
    color: #fff;
    background-color: #be4f00;
}

.btn-custom:active {
    background: #E76202;
    box-shadow: 5px 5px #666;
}

.medsos {
    margin: 100px 0 0 50px;
    border: 1px solid #dddddd;
    width: 350px;
    height: 250px;
    border-radius: 12px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
}

.facebook {
    background-color: #1877F2;
    height: 50px;
    width: 100%;
    color: #fff;
    padding: 25px;
    border-radius: 7px;
    transition: 0.3s;
}

.facebook:hover {
    transform: translateY(-5px);
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.3);
}

.google {
    background-color: #eee;
    /* border: 1px solid #1a1a1a; */
    height: 50px;
    width: 100%;
    padding: 25px;
    color: #000;
    border-radius: 7px;
    transition: 0.3s;
}

.google:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
}

.apple {
    background-color: #1E1E1E;
    height: 50px;
    width: 100%;
    padding: 25px;
    color: #fff;
    border-radius: 7px;
    transition: 0.3s;
}

.apple:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
}</style>
