<template>
    <div id="loginCuadro">
        <div id="titulo">
            Autenticación
        </div>

        <input type="text" v-model="username" id="inputUsername" placeholder="Nombre de usuario">
        <input :type="mostrandoPassword ? 'text' : 'password'" v-model="password" id="inputPassword"
            placeholder="Contraseña">

        <button class="boton" @click="logearse">
            Aceptar
        </button>
    </div>
</template>

<script setup>

let username = ref(null);
let password = ref(null);
const mostrandoPassword = ref(false);

const cosa = "juan"
console.log(cosa);

const queryLoginDoc = gql`
query($username: String, $password: String){
login(username: $username, password: $password)
}
`;
async function logearse() {
    const { result: resp } = useQuery(queryLoginDoc,
        {
            username, password
        },
        {
            fetchPolicy: "network-only"
        }
    )
    console.log("Respuesta: " + JSON.stringify(resp));
    console.log("Result: " + resp.login);
}
</script>

<style scoped>
#loginCuadro {
    margin: 20px auto;
    width: min(500px, 90vw);
    min-height: 200px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
}

#titulo {
    font-size: 2rem;
}

input {
    border: 1px solid transparent;
    border-bottom-color: gray;
    padding: 3px 3px;
    background-color: transparent;
    width: min(300px, 95%);

}

input:focus {
    border: none;
}
</style>
