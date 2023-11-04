<template>
    <div id="barraNavegacion" @click="clickFuera">
        <img src="~/assets/iconos/menuMobile.png" alt="menu" id="botonAbrirMenuNavegacion"
            @click.stop="mostrandoBloqueNavegacionPrincipal = !mostrandoBloqueNavegacionPrincipal">
        <div id="bloqueNavegacionPrincipal" :class="{ oculto: !mostrandoBloqueNavegacionPrincipal }">
            <NuxtLink to="/" class="botonNavegacion">
                <img src="~/assets/iconos/home.svg" alt="">
                Ruta de Caracola
            </NuxtLink>
            <NuxtLink to="/explorar" class="botonNavegacion">
                Explorar
            </NuxtLink>
            <NuxtLink to="/atlasConocimiento" class="botonNavegacion deshabilitado">
                Atlas de conocimiento
            </NuxtLink>
        </div>


        <div id="bloqueLogin" v-if="usuario">
            <div id="botonNombreUsuario">
                Nombre
                <img src="~/assets/iconos/user.svg" alt="">
            </div>

        </div>

    </div>
    <NuxtPage @click="clickFuera" />
</template>

<script setup>
import { ref } from 'vue'
const usuario = useState('usuario',() => {
    return null 

})

function clickFuera() {
    mostrandoBloqueNavegacionPrincipal.value = false;
}

let mostrandoBloqueNavegacionPrincipal = ref(false);

</script>



<style>
#botonAbrirMenuNavegacion {
    height: 35px;
    width: 35px;
    cursor: pointer;
}

#barraNavegacion {
    display: flex;
    align-items: center;
    height: 60px;
    position: relative;
}

#bloqueNavegacionPrincipal {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0px;
    background-color: var(--paletaMain);
}

#bloqueNavegacionPrincipal.oculto {
    display: none;
}

.botonNavegacion {
    padding: 20px 35px;
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    text-decoration: none;
    color: unset;

}

.botonNavegacion img {
    height: 15px;
}

#bloqueLogin {
    display: flex;
    height: 100%;
    margin-left: auto;
    padding-right: 20px;
}

#botonNombreUsuario {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
}

#botonNombreUsuario img {
    height: 15px;
}

@media (min-width: 1000px) {
    #botonAbrirMenuNavegacion {
        display: none;
    }

    #bloqueNavegacionPrincipal {
        position: unset;
        flex-direction: row;
        background-color: transparent;
    }

    #bloqueNavegacionPrincipal.oculto {
        display: flex;
    }
}</style>
