export default defineNuxtRouteMiddleware((to, from) => {
    const usuario = useState('usuario');
    if(!usuario){
        console.log("Redirigiendo a login screen");
    }
    console.log("Navegando " + usuario.value);
})
