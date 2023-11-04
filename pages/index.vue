<template>
    <div id="contenedorGrande">
        <div id="bloquePortada">
            <div id="bloqueTitulos">
                <div id="titulo">
                    Ruta de caracola
                </div>
                <div id="subtitulo">
                    Plataforma de aprendizaje
                </div>
            </div>
            <img src="~/assets/landing/caracol.png" alt="Caracol" id="imagenCaracol">
        </div>
        <div id="bloqueContraportada">
            <div id="bloqueEstadoPersonal">
                <div id="bloqueAvatar">
                    <div id="bloqueCirculoAvatar">
                        <div id="contenedorImagenAvatar">
                            <img src="~/assets/iconos/user.svg" alt="Usuario" id="imagenAvatar">
                        </div>
                    </div>
                    <div id="nombreUsuario">
                        Nombre usuario
                    </div>
                </div>
                <div id="bloqueInfoNodos">
                    <div id="bloqueNodoRastreado" class="bloqueInfoNodo">
                        <div class="contenedorImagen">
                            <img src="~/assets/iconos/nodoConocimiento.png" alt="Nodo">
                        </div>
                        <div class="comentarioInfoNodo">
                            No hay nodo rastreado
                        </div>
                    </div>
                    <div id="bloqueNodoOlvidado" class="bloqueInfoNodo">
                        <div class="contenedorImagen">
                            <img src="~/assets/iconos/nodoConocimiento.png" alt="Nodo">
                        </div>
                        <div class="comentarioInfoNodo">
                            Este nodo debe ser repasado
                        </div>
                    </div>
                    <div id="bloqueColeccionProgresada" class="bloqueInfoNodo">
                        <div class="contenedorImagen">
                            <img src="~/assets/iconos/nodos.svg" alt="Colección">
                        </div>
                        <div class="comentarioInfoNodo">
                            Colección progresando
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style>
html {
    font-size: 18px;
}
</style>

<style scoped>
#contenedorGrande {
    display: flex;
    flex-direction: column;
    gap: 100px;
}

#bloquePortada {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15%;
    padding: 5px 2vw;
    margin-top: 50px;
}

#bloqueTitulos {
    display: flex;
    flex-direction: column;
    width: 40%;
    flex-shrink: 0;
    flex-basis: 40%;
}

#titulo {
    font-size: 2rem;
    flex-shrink: 0;
}

#subtitulo {
    font-size: 0.7rem;
}

#imagenCaracol {
    width: 40%;
    flex-shrink: 0;
    flex-basis: 40%;
}

#bloqueContraportada {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

#bloqueEstadoPersonal {
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
}

#bloqueAvatar {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

#bloqueCirculoAvatar {
    display: flex;
    align-items: center;
    justify-content: center;
}

#contenedorImagenAvatar {
    width: min(40vw, 100px);
    height: min(40vw, 100px);
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#imagenAvatar {
    height: 100%;
}

#nombreUsuario {
    font-size: 0.8rem;
}

#bloqueInfoNodos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
}

.bloqueInfoNodo {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

.bloqueInfoNodo .contenedorImagen {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.bloqueInfoNodo .contenedorImagen img {
    height: 50%;
}

.comentarioInfoNodo {
    font-size: 14px;
    text-align: center;
    width: 80px;
    text-align: center;
}

@media (min-width: 1000px) {
    #contenedorGrande {
        flex-direction: row;
    }

    #bloquePortada {
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        min-height: 70vh;
        flex-basis:60%;
        padding: 0px 0px;
    }
    #titulo{
        font-size: 5rem;
    }
    #subtitulo{
        font-size: 1rem;
    }
    #imagenCaracol{
        flex-grow: 0;
        flex-basis: unset;
    }
    #bloqueContraportada{
        flex-basis: 40%;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
    }

}
</style>
