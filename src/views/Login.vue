<script setup>

</script>

<template>
    <div class="container">
        <div class="login mb-3">
            <div class="row">
                <div class="col">
                    <img src="../assets/image/imgLogin.jpg" alt="">
                </div>
                <div class="col" style="margin-top: 50px;">
                    <h2>Login</h2>
                    <p><span class="create-account-label">Don't have an account?</span> <a
                            href="your_registration_page.html">Create
                            here</a></p>
                    <form action="#" method="post">
                        <input type="text" class="form-control custom-input" id="username" name="username"
                            placeholder="Username or Email*" required><br><br>
                        <input type="password" class="form-control custom-input" id="password" name="password"
                            placeholder="Your password*" required><br><br>
                        <input type="text" class="form-control custom-input" id="code" name="code" placeholder="Code*"
                            size="10" required>
                        <span class="code-span">12345</span> <!-- Kode angka di samping input "Code" -->
                        <br><br>
                        <input type="checkbox" class="form-control custom-input" id="remember-me" name="remember-me"
                            value="1" style="margin-right: 5px;">
                        <label for="remember-me">Remember me</label>
                        <a href="forgot_password.html" style="margin-left: 30px;">Forgot Password?</a>
                        <br><br>
                        <input type="submit" value="Log in" class="login-button">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

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



input[type="text"],
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
    /* Menggeser elemen ke kanan */
}

.code-span {
    border: 1px solid #E76202;
    /* Red border color (#FF0000) */
    border-radius: 4px;
    padding: 5px 20px;
    margin-right: 10%;
    /* Menambahkan margin antara input dan span */
    background: linear-gradient(45deg, #ff5733, #ffdb58, #33ff57, #337aff, #b833ff);
    -webkit-background-clip: text;
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
    margin-right: 315px;
}

#remember-me,
a {
    margin-right: 120px;
    text-decoration: none;
    color: #242424;
}</style>