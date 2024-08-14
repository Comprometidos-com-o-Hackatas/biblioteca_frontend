<template>
    <main class="main-login">
        <section class="section-login">
            <h1>Login</h1>

            <div class="container-login">
            <div class="login-input-boxes">
                <div class="input-box">
                    <p>Username or Email</p>
                    <input type="text">
                </div>
                <div class="input-box">
                    <p>Password</p>
                    <input type="text">
                </div>
            </div>

            <div class="login-buttons">
            <button>Next</button>
            <p>or try</p>
            <div class="ways-logins-box">
            <span class="mdi mdi-google"></span>
            <span class="mdi mdi-facebook"></span>
            <span class="mdi mdi-apple"></span>
            </div>
            </div>
            </div>
        </section>
    </main>
</template>
<style scoped>
.section-login {
    background-image: url('../assets/media/authbackground.png');
    width: 1150px;
    height: 100dvh;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
}

h1 {
    color: #8A3119;
    font-size: 100px;
    font-family: var(--font-poppins);
    font-weight: 200;
    position: relative;
    left: 130px;
}

.container-login {
    position: relative;
    left: 30px;
    height: 450px;
    width: 500px;
    background-color: aquamarine;
}

</style>