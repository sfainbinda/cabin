<template>
    <section>
        
        <div class="mt-10 title-section">Actividades para distrufar en La Villa</div>
        <!-- <h2 class="mt-10 d-flex justify-center">Actividades para disfurtar en la villa</h2> -->
            <div class="d-flex flex-wrap justify-center mt-6">
                <v-card
                    v-for="(activitie, i) in activities"
                    :key="i"
                    class="card ma-6"
                    elevation="12"
                >
                    <v-img
                        class="img-size"
                        :src="require(`@/assets/images/activities/${activitie.image.src}`)"
                        :alt="activitie.image.alt"                    
                    >
                        <div class="golden">
                            <v-card-title>{{ activitie.name }}</v-card-title>
                            <v-card-subtitle class="d-flex">#{{ activitie.category }}</v-card-subtitle>
                        </div>
                    </v-img>
                    <v-card-text>
                        <div class="ma-4">{{ activitie.description }}</div>
                    </v-card-text>
                </v-card>
            </div>
        <div>
            <p class="rights">
                Todas las imágenes de la sección <b><em>actividades</em></b> corresponden a la web de Villa La Angostura. 
                <a href="https://www.villalaangosturaturismo.gob.ar/">Visitar.</a>
            </p>
            
        </div>
    </section>
</template>
<script src="./Activities"></script>
<style scoped>
    .title-section {
        font-size: 20px;
        font-weight: 500;
    }
    .img-size {
        height: 500px;
        width: 375px;
    }
    .card {
        width: 375px;
    }
    .btn {
        color: #2196F3;
    }
    .rights {
        font-size: 8px;
    }
    .golden {
        background-color: goldenrod;
    }
    .white {
        background-color: white;
    }
    .red {
        background-color: red;
    }
</style>