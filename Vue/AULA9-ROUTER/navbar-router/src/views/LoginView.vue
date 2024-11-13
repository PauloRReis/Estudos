<template>
    <div class="login">
        <h2>Login</h2>
        <input type="text" placeholder="email" class="input-field"/>
        <input type="text" placeholder="senha" class="input-field"/>
        <button type="submit">Enviar</button>
    </div>
</template>

<style>
    .login{
        width: 200px;
        margin: 0 auto;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .input-field {
        width: 100%;
        margin-bottom: 10px;
        padding: 8px;
    }
    button {
        justify-content: center;
        display: flex;
    }
</style>