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

.main-login {
    width: 100%;
    height: 100dvh;
    overflow: hidden;
}
.section-login {
    background-image: url('../assets/media/baseTemplate.png');
    width: 100%;
    height: 100dvh;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
}

h1 {
    color: #8A3119;
    font-size: 90px;
    font-family: var(--font-poppins);
    font-weight: 200;
    position: relative;
    left: 130px;
}

.container-login {
    position: relative;
    left: 30px;
    height: 300px;
    width: 500px;
   margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: burlywood;
}

.login-input-boxes {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.input-box {
    width: 100%;
    & input {
        width: 100%;
        height: 35px;
        font-size: 16px;
        background-color: transparent;
        outline: none;
        border: none;
        border-bottom: 2px solid #8A3119;
    }
}

.input-box p {
    font-size: 13px;
    color: #8A3119;
    font-family: var(--font-poppins);
    font-weight: 300;
}

.login-buttons {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aquamarine;
    gap: 10px;

    & button {
        width: 91px;
        height: 32px;
        font-size: 14px;
        border-radius: 10px;
        border: none;
        background-color: #8A3119;
        color: white;
        font-family: var(--font-poppins);
        margin-top: 15px;
    }
}

.login-buttons p {
    font-size: 15px;
    font-family: var(--font-poppins);
    color: #8A3119;
}
</style>